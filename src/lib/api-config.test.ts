import { describe, expect, test } from "bun:test";
import { resolveApiBaseUrl } from "./api-config";

describe("resolveApiBaseUrl", () => {
  test("uses the local API default when no public URL is configured", () => {
    expect(resolveApiBaseUrl(undefined).href).toBe("http://localhost:3001/");
  });

  test("removes trailing path slashes while preserving a configured prefix", () => {
    expect(resolveApiBaseUrl("https://api.example.test/v1///").href).toBe(
      "https://api.example.test/v1",
    );
  });

  test("rejects unsupported protocols", () => {
    expect(() => resolveApiBaseUrl("ftp://api.example.test")).toThrow(
      "NEXT_PUBLIC_API_URL must use HTTP or HTTPS.",
    );
  });
});
