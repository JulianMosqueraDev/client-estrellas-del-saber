const defaultApiUrl = "http://localhost:3001";

export function resolveApiBaseUrl(value: string | undefined): URL {
  const candidate = value?.trim() || defaultApiUrl;
  const parsed = new URL(candidate);

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_API_URL must use HTTP or HTTPS.");
  }

  parsed.pathname = parsed.pathname.replace(/\/+$/, "");
  return parsed;
}

export const apiBaseUrl = resolveApiBaseUrl(process.env.NEXT_PUBLIC_API_URL);
