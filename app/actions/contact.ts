'use server';

import {
  CONTACT_FIELDS,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from '../contact/validation';

const HUBFORM_ENDPOINT = 'https://hub-form.vercel.app/api/f/SLSu0-MuSRCI';

export interface ContactState {
  status: 'idle' | 'success' | 'error';
  /** Form-level error (network, configuration, unexpected API reply). */
  message?: string;
  /** Per-field errors from validation or from Hub Form. */
  fieldErrors?: ContactErrors;
  /** Submitted values, so the form can tell whether an error still applies. */
  values?: ContactValues;
}

const read = (formData: FormData, key: string) => String(formData.get(key) ?? '').trim();

/**
 * Sends the contact form to Hub Form. Runs on the server so HUB_KEY never
 * reaches the browser, and re-validates everything the browser already checked.
 */
export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = Object.fromEntries(CONTACT_FIELDS.map((f) => [f, read(formData, f)])) as ContactValues;

  // Spam trap: real visitors never see this field. Pretend success so bots move on.
  if (read(formData, '_gotcha')) {
    return { status: 'success' };
  }

  const fieldErrors = validateContact(values);
  if (Object.keys(fieldErrors).length > 0) {
    return { status: 'error', fieldErrors, values };
  }

  const key = process.env.HUB_KEY;
  if (!key) {
    console.error('sendContact: HUB_KEY is not set');
    return { status: 'error', message: 'The contact form is not configured yet. Please email us instead.', values };
  }

  try {
    const res = await fetch(HUBFORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        ...(values.phone ? { phone: values.phone } : {}),
        topic: values.topic,
        message: values.message,
        source: 'english-offline-web /contact',
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });

    const data = (await res.json().catch(() => null)) as
      | { ok: true }
      | { ok: false; code?: string; error?: string; field?: string }
      | null;

    if (data?.ok) {
      return { status: 'success' };
    }

    const error = (data && !data.ok && data.error) || 'Something went wrong while sending your message. Please try again.';
    const field = data && !data.ok && (CONTACT_FIELDS as readonly string[]).includes(data.field ?? '') ? (data.field as ContactField) : null;
    return field
      ? { status: 'error', fieldErrors: { [field]: error }, values }
      : { status: 'error', message: error, values };
  } catch (err) {
    console.error('sendContact failed', err);
    return {
      status: 'error',
      message: 'We could not reach the server. Check your connection and try again.',
      values,
    };
  }
}
