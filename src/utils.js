export function toUrl(value, base) {
  if (!value) return null;
  return value.startsWith('http') ? value : `${base}${value}`;
}
