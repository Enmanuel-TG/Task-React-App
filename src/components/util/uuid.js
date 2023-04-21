export function uuid() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36);
}
