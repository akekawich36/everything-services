const services = require("../../src");

describe("DateTimeFormatter", () => {
  let formatter = services.dayFormatter;

  test("formats current date correctly", () => {
    const result = formatter.format();
    expect(result).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
  });

  test("formats current date correctly", () => {
    const result = formatter.format("YYYY-MM-DD");
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  test("handles Thai locale correctly", () => {
    const result = formatter.locale('th').setDate('2024-01-16').format('DD MMMM BBBB');
    expect(result).toMatch("16 มกราคม 2567");
  });

  test("throws error for invalid locale", () => {
    expect(() => {
      formatter.locale("invalid");
    }).toThrow("Not support locale: invalid");
  });
});
