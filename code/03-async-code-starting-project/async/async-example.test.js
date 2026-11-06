import { test, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

// 1. First test (Note: This one doesn't actually wait for the callback
// because generateToken is async, but it might pass falsely or leak assertions)
test("should generate a token value", () => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (err, token) => {
    expect(token).toBeDefined();
  });
});

// 2. FIXED: Asynchronous test with callbacks using `done`
test("should generate a token value with done", (done) => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      done(); // <-- MUST call done() here so Vitest knows it passed!
    } catch (error) {
      done(error); // <-- Pass the caught error instance here
    }
  });
});

// 3. Third test (This one already works fine because it uses async/await)
test("should generate a token value", async () => {
  const testUserEmail = "test@test.com";

  const token = await generateTokenPromise(testUserEmail);

  expect(token).toBeDefined();
});
