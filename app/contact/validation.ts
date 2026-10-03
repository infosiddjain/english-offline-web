/**
 * Contact form rules, shared by the browser (instant feedback) and the
 * server action (the check that actually counts — never trust the client).
 */

export const CONTACT_FIELDS = ['name', 'email', 'phone', 'topic', 'message'] as const;
export type ContactField = (typeof CONTACT_FIELDS)[number];
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

export const TOPICS = ['General question', 'App feedback', 'Report a bug', 'Content mistake', 'Partnership'];

export const LIMITS = {
  nameMin: 2,
  nameMax: 80,
  emailMax: 254,
  phoneDigitsMin: 10,
  phoneDigitsMax: 13,
  messageMin: 10,
  messageMax: 5000,
};

// Letters (any script, incl. Hindi), combining marks, spaces, dots, apostrophes and hyphens.
const NAME_RE = /^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u;
const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
const PHONE_RE = /^\+?[\d\s-]+$/;

export const emptyValues: ContactValues = { name: '', email: '', phone: '', topic: TOPICS[0], message: '' };

export function validateField(field: ContactField, raw: string): string | undefined {
  const value = raw.trim();

  switch (field) {
    case 'name':
      if (!value) return 'Please enter your name.';
      if (value.length < LIMITS.nameMin) return `Name must be at least ${LIMITS.nameMin} characters.`;
      if (value.length > LIMITS.nameMax) return `Name must be under ${LIMITS.nameMax} characters.`;
      if (!NAME_RE.test(value)) return 'Name can only contain letters, spaces, dots, apostrophes and hyphens.';
      return undefined;

    case 'email':
      if (!value) return 'Please enter your email address.';
      if (value.length > LIMITS.emailMax) return 'This email address is too long.';
      if (!EMAIL_RE.test(value) || value.includes('..')) return 'Please enter a valid email, like you@example.com.';
      return undefined;

    case 'phone': {
      if (!value) return undefined; // optional
      if (!PHONE_RE.test(value) || value.indexOf('+') > 0) return 'Use digits only, with an optional + at the start.';
      const digits = value.replace(/\D/g, '').length;
      if (digits < LIMITS.phoneDigitsMin || digits > LIMITS.phoneDigitsMax) {
        return `Phone number should have ${LIMITS.phoneDigitsMin}–${LIMITS.phoneDigitsMax} digits.`;
      }
      return undefined;
    }

    case 'topic':
      if (!TOPICS.includes(value)) return 'Please choose a topic from the list.';
      return undefined;

    case 'message':
      if (!value) return 'Please write a message.';
      if (value.length < LIMITS.messageMin) return `Message must be at least ${LIMITS.messageMin} characters.`;
      if (value.length > LIMITS.messageMax) return `Message must be under ${LIMITS.messageMax.toLocaleString()} characters.`;
      return undefined;
  }
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  for (const field of CONTACT_FIELDS) {
    const error = validateField(field, values[field] ?? '');
    if (error) errors[field] = error;
  }
  return errors;
}
