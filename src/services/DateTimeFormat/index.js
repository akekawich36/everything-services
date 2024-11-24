const dayjs = require("dayjs");
require("dayjs/locale/th");
require("dayjs/locale/en");
const buddhistEra = require("dayjs/plugin/buddhistEra");
const customParseFormat = require("dayjs/plugin/customParseFormat");
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(customParseFormat);
dayjs.extend(buddhistEra);
dayjs.extend(utc);
dayjs.extend(timezone);

const validateLocale = (locale) => {
  const validLocales = ["en", "th"];
  if (!validLocales.includes(locale)) {
    throw new Error(`Not support locale: ${locale}`);
  }
};

class DateTimeFormatter {
  constructor(defaultTimezone = "UTC", defaultLocale = "en", defaultFormat = "") {
    this.defaultTimezone = defaultTimezone;
    this.defaultFormat = defaultFormat;
    this.defaultLocale = defaultLocale;
    this._date = dayjs();
    this._locale = defaultLocale;
    
    return new Proxy(this, {
      apply: (target, thisArg, argumentsList) => {
        return target.setDate(...argumentsList);
      }
    });
  }

  /**
   * @param {Date|string|number} [date]
   * @returns {DateTimeFormatter}
   */
  setDate(date) {
    this._date = date ? dayjs(date) : dayjs();
    return this;
  }

  /**
   * @param {string} locale
   * @returns {DateTimeFormatter}
   */
  locale(locale) {
    validateLocale(locale);
    this._locale = locale;
    return this;
  }

  /**
   * @param {string} [format]
   * @returns {string} 
   */
  format(format = this.defaultFormat) {
    return this._date.locale(this._locale).format(format);
  }

  /**
   * @param {string} tz
   * @returns {DateTimeFormatter}
   */
  tz(tz) {
    this._date = this._date.tz(tz);
    return this;
  }

  /**
   * @returns {string} 
   */
  getTimezone() {
    return this._date.tz() || this.defaultTimezone;
  }

  /**
   * @returns {DateTimeFormatter}
   */
  reset() {
    this._date = dayjs();
    this._locale = this.defaultLocale;
    return this;
  }
}

const dayFormatter = new DateTimeFormatter()
module.exports = dayFormatter;