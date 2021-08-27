import { collatz } from "../collatz";

describe("the collatz algorithm", () => {
  test("should return 4 when 1 is provided", () => {
    const result = collatz(1n);
    expect(result).toBe(4n);
  });
  test("should return 2 when 4 is provided", () => {
    const result = collatz(4n);
    expect(result).toBe(2n);
  });
  test("should return 1 when 2 is provided", () => {
    const result = collatz(2n);
    expect(result).toBe(1n);
  });
});
