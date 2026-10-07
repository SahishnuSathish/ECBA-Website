/** Prefix an internal path with the configured base so the site works from a sub-path. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Build a mailto: link with an encoded subject and body. */
export function mailto(to: string, subject?: string, body?: string): string {
  const params = [
    subject ? `subject=${encodeURIComponent(subject)}` : '',
    body ? `body=${encodeURIComponent(body)}` : '',
  ].filter(Boolean);
  return `mailto:${to}${params.length ? `?${params.join('&')}` : ''}`;
}
