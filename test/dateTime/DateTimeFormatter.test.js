const services = require("../../src");

describe("DateTimeFormatter", () => {
  test("default format current date", () => {
    const result = services.dayFormatter().format();
    expect(result).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
  });

  test("format date", () => {
    const result = services.dayFormatter('2023-01-16').format()
    expect(result).toBe("16/01/2023")
  })

  test("formats current date correctly", () => {
    const result = services.dayFormatter().format("YYYY-MM-DD");
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  test("handles Thai locale correctly", () => {
    const result = services.dayFormatter("2024-01-16").locale('th').format('DD MMMM BBBB');
    expect(result).toMatch("16 มกราคม 2567");
  });
});
