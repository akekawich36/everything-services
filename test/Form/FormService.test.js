const services = require("../../src");

describe('services.isTrue Function', () => {
  describe('Boolean Tests', () => {
    test('true should return true', () => {
      expect(services.isTrue(true)).toBe(true);
    });

    test('false should return false', () => {
      expect(services.isTrue(false)).toBe(false);
    });
  });

  // Number Tests
  describe('Number Tests', () => {
    test('positive number should return true', () => {
      expect(services.isTrue(42)).toBe(true);
    });

    test('negative number should return true', () => {
      expect(services.isTrue(-5)).toBe(true);
    });

    test('zero should return false', () => {
      expect(services.isTrue(0)).toBe(false);
    });

    test('NaN should return false', () => {
      expect(services.isTrue(NaN)).toBe(false);
    });
  });

  // String Tests
  describe('String Tests', () => {
    test('non-empty string should return true', () => {
      expect(services.isTrue('hello')).toBe(true);
    });

    test('empty string should return false', () => {
      expect(services.isTrue('')).toBe(false);
    });

    test('whitespace string should return false', () => {
      expect(services.isTrue('   ')).toBe(false);
    });
  });

  // Array Tests
  describe('Array Tests', () => {
    test('non-empty array should return true', () => {
      expect(services.isTrue([1, 2, 3])).toBe(true);
    });

    test('empty array should return false', () => {
      expect(services.isTrue([])).toBe(false);
    });
  });

  // Object Tests
  describe('Object Tests', () => {
    test('object with keys should return true', () => {
      expect(services.isTrue({ key: 'value' })).toBe(true);
    });

    test('empty object should return false', () => {
      expect(services.isTrue({})).toBe(false);
    });
  });

  // Symbol Tests
  describe('Symbol Tests', () => {
    test('symbol should return true', () => {
      expect(services.isTrue(Symbol('test'))).toBe(true);
    });
  });

  // Function Tests
  describe('Function Tests', () => {
    test('function should return true', () => {
      expect(services.isTrue(() => {})).toBe(true);
    });
  });

  // Null and Undefined Tests
  describe('Null and Undefined Tests', () => {
    test('null should return false', () => {
      expect(services.isTrue(null)).toBe(false);
    });

    test('undefined should return false', () => {
      expect(services.isTrue(undefined)).toBe(false);
    });
  });

  // Special Cases
  describe('Special Cases', () => {
    test('Date object should return true', () => {
      expect(services.isTrue(new Date())).toBe(true);
    });

    test('Regular expression should return true', () => {
      expect(services.isTrue(/test/)).toBe(true);
    });
  });
});