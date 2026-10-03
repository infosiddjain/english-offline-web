'use client';

import React, { useActionState, useRef, useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { sendContact, type ContactState } from '../actions/contact';
import {
  CONTACT_FIELDS,
  LIMITS,
  TOPICS,
  emptyValues,
  validateContact,
  validateField,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from './validation';

const initialState: ContactState = { status: 'idle' };

const inputBase =
  'w-full rounded-xl border bg-paper px-4 py-3 text-sm text-walnut-deep placeholder-walnut/50 outline-none transition focus:ring-2';

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const formRef = useRef<HTMLFormElement>(null);

  if (state.status === 'success') {
    return (
      <div className="rounded-3xl border border-line bg-paper p-8 text-center shadow-sm animate-rise" role="status">
        <CheckCircle2 className="w-12 h-12 text-success mx-auto" />
        <h2 className="mt-4 font-serif text-2xl font-semibold text-walnut-deep">Message sent — धन्यवाद!</h2>
        <p className="mt-2 text-sm text-walnut leading-relaxed">Thanks for reaching out. We usually reply within 1–2 working days.</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-burgundy px-6 py-3 text-sm font-bold text-ivory hover:bg-burgundy-dark transition-colors"
        >
          Back to home
        </Link>
      </div>
    );
  }

  // A server error stays visible until the visitor changes that field.
  const errorFor = (f: ContactField): string | undefined => {
    if (errors[f]) return errors[f];
    const serverError = state.fieldErrors?.[f];
    return serverError && state.values?.[f] === values[f].trim() ? serverError : undefined;
  };

  const update = (f: ContactField, value: string) => {
    setValues((v) => ({ ...v, [f]: value }));
    // Re-check live once the visitor has left the field, so errors clear as soon as they're fixed.
    if (touched[f] || errors[f]) setErrors((e) => ({ ...e, [f]: validateField(f, value) }));
  };

  const blur = (f: ContactField) => {
    setTouched((t) => ({ ...t, [f]: true }));
    setErrors((e) => ({ ...e, [f]: validateField(f, values[f]) }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const all = validateContact(values);
    setTouched(Object.fromEntries(CONTACT_FIELDS.map((f) => [f, true])));
    setErrors(all);
    const first = CONTACT_FIELDS.find((f) => all[f]);
    if (first) {
      e.preventDefault(); // stop the server action; show every problem at once
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    }
  };

  const fieldProps = (f: ContactField) => {
    const error = errorFor(f);
    return {
      id: f,
      name: f,
      value: values[f],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => update(f, e.target.value),
      onBlur: () => blur(f),
      'aria-invalid': !!error,
      'aria-describedby': error ? `${f}-error` : undefined,
      className: `${inputBase} ${
        error ? 'border-danger focus:border-danger focus:ring-danger/20' : 'border-line focus:border-burgundy focus:ring-burgundy/20'
      }`,
    };
  };

  const errorCount = CONTACT_FIELDS.filter((f) => errorFor(f)).length;
  const messageLength = values.message.trim().length;

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-line bg-paper p-5 sm:p-8 shadow-sm space-y-5"
    >
      {state.status === 'error' && state.message && (
        <div role="alert" className="flex gap-2 rounded-xl border border-danger/30 bg-danger-soft p-3 text-sm text-danger">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{state.message}</span>
        </div>
      )}
      {errorCount > 1 && (
        <p role="alert" className="text-sm font-medium text-danger">
          Please fix the {errorCount} highlighted fields below.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your name" hint="नाम" required error={errorFor('name')} htmlFor="name">
          <input type="text" autoComplete="name" maxLength={LIMITS.nameMax} placeholder="Priya Sharma" {...fieldProps('name')} />
        </Field>
        <Field label="Email" hint="ईमेल" required error={errorFor('email')} htmlFor="email">
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={LIMITS.emailMax}
            placeholder="you@example.com"
            {...fieldProps('email')}
          />
        </Field>
        <Field label="Phone" hint="फ़ोन · optional" error={errorFor('phone')} htmlFor="phone">
          <input type="tel" autoComplete="tel" inputMode="tel" maxLength={20} placeholder="+91 98765 43210" {...fieldProps('phone')} />
        </Field>
        <Field label="Topic" hint="विषय" required error={errorFor('topic')} htmlFor="topic">
          <select {...fieldProps('topic')} className={`${fieldProps('topic').className} appearance-none`}>
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label="Message"
        hint="संदेश"
        required
        error={errorFor('message')}
        htmlFor="message"
        aside={
          <span
            className={`text-xs tabular-nums ${
              messageLength > LIMITS.messageMax || (messageLength > 0 && messageLength < LIMITS.messageMin)
                ? 'text-danger'
                : 'text-walnut/60'
            }`}
            aria-live="polite"
          >
            {messageLength.toLocaleString()} / {LIMITS.messageMax.toLocaleString()}
          </span>
        }
      >
        <textarea
          rows={6}
          placeholder="Tell us what you think, what went wrong, or what you'd like to learn next…"
          {...fieldProps('message')}
          className={`${fieldProps('message').className} resize-y min-h-36`}
        />
      </Field>

      {/* Spam trap: hidden from people, bots fill it in. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="_gotcha">Leave this empty</label>
        <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
        <p className="text-xs text-walnut/70 leading-relaxed">
          <span className="text-danger">*</span> Required. We only use your details to reply — see our{' '}
          <Link href="/privacy" className="font-semibold text-burgundy hover:underline">
            privacy policy
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-full bg-burgundy px-7 py-3 text-sm font-bold text-ivory shadow-md shadow-burgundy/20 hover:bg-burgundy-dark disabled:opacity-60 disabled:cursor-wait transition-colors"
        >
          {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          {pending ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  required,
  error,
  htmlFor,
  aside,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  htmlFor: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <label htmlFor={htmlFor} className="flex items-baseline gap-2 text-sm font-semibold text-walnut-deep">
          <span>
            {label}
            {required && <span className="text-danger"> *</span>}
          </span>
          {hint && <span className="font-hindi text-xs font-medium text-bronze-dark">{hint}</span>}
        </label>
        {aside}
      </div>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 flex items-start gap-1 text-xs font-medium text-danger">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-px" /> <span>{error}</span>
        </p>
      )}
    </div>
  );
}
