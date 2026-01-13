import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("auth_header", () => {
  test("auth header can NOT be falsy or missing", () => {
    expect(getAPIKey({})).toBe(null);
  });
});

describe("auth_header", () => {
  test("auth header return number after Api Key", () => {
    expect(getAPIKey({ authorization: "ApiKey 12345" })).toBe("12345");
  });
});

describe("auth_header", () => {
  test("auth header must have number specified after api key", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBe(null);
  });
});
