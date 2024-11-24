const { dayFormatter } = require("../../src");

describe("DateTimeFormatter", () => {
  let formatter = dayFormatter;

  test("formats current date correctly", () => {
    const result = formatter.format("YYYY-MM-DD");
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  test("handles Thai locale correctly", () => {
    const result = formatter.locale("th").format("BBBB");
    expect(result).toMatch(/^[0-9]{4}$/);
  });

  test("throws error for invalid locale", () => {
    expect(() => {
      formatter.locale("invalid");
    }).toThrow("Not support locale: invalid");
  });
});
