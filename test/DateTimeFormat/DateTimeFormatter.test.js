const services = require("../../src");

describe("DateTimeFormatter", () => {
  test("format date", () => {
    const result = services.dayjs('2023-01-16').format("DD/MM/YYYY")
    expect(result).toBe("16/01/2023")
  })

  test("handles Thai locale correctly", () => {
    const result = services.dayjs("2024-01-16").locale('th').format('DD MMMM BBBB');
    expect(result).toMatch("16 มกราคม 2567");
  });

  test("handles Thai locale correctly and timezone", () => {
    const result = services.dayjs("2024-01-16").tz('Asia/Bangkok').locale('th').format('DD MMMM BBBB');
    expect(result).toMatch("16 มกราคม 2567");
  });
});
