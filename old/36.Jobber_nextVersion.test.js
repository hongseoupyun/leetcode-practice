const nextVersion = require("./Jobber_nextVersion");

describe("Testing nextVersion Function", () => {
  test("returns correct version when the last digit of the string is not 9 ", () => {
    expect(nextVersion("1.2.3.4.5.6.7.8")).toBe("1.2.3.4.5.6.7.9");
  });
  test("retruns correct version when last digit of the string is 9", () => {
    expect(nextVersion("0.9.9")).toBe("1.0.0");
  });
  test("returns correct version when the string is an single digit", () => {
    expect(nextVersion("1")).toBe("2");
  });
  test("retruns correct version when first digit of the string is 9 ", () => {
    expect(nextVersion("9.9")).toBe("10.0");
  });
});
