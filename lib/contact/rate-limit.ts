const rateLimitStore = new Map<string, number[]>();

export function consumeRateLimit(
  key: string,
  limit: number,
  windowMs: number,
  now = Date.now(),
) {
  const timestamps = rateLimitStore.get(key) ?? [];
  const activeWindow = timestamps.filter(
    (timestamp) => now - timestamp < windowMs,
  );

  if (activeWindow.length >= limit) {
    rateLimitStore.set(key, activeWindow);
    return false;
  }

  activeWindow.push(now);
  rateLimitStore.set(key, activeWindow);
  return true;
}

export function resetRateLimitStore() {
  rateLimitStore.clear();
}
