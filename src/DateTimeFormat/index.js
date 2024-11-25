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
  constructor(
    defaultTimezone = "UTC",
    defaultLocale = "en",
    defaultFormat = "DD/MM/YYYY"
  ) {
    this.defaultTimezone = defaultTimezone;
    this.defaultFormat = defaultFormat;
    this.defaultLocale = defaultLocale;
    this._date = dayjs();
    this._locale = defaultLocale;

    const formatter = (date) => {
      return new FormatterInstance(
        date,
        this.defaultTimezone,
        this.defaultLocale,
        this.defaultFormat
      );
    };

    formatter.tz = this.tz;
    formatter.getTimezone = this.getTimezone;

    return formatter;
  }

  tz(tz) {
    this.defaultTimezone = tz;
    return this;
  }

  getTimezone() {
    return this.defaultTimezone;
  }
}

class FormatterInstance {
  constructor(date, timezone, locale, format) {
    this._date = date ? dayjs(date) : dayjs();
    this._locale = locale;
    this.defaultFormat = format;
    this.defaultTimezone = timezone;

    return this._date.locale(this._locale).format(this.defaultFormat)
  }

  locale(locale) {
    validateLocale(locale);
    this._locale = locale;
    this._date = this._date.locale(locale);
    return this;
  }

  format(format = this.defaultFormat) {
    return this._date.locale(this._locale).format(format);
  }

  tz(tz) {
    this._date = this._date.tz(tz);
    return this;
  }

  getTimezone() {
    return this._date.tz() || this.defaultTimezone;
  }

  isSameOrBefore(date) {
    return this._date.isSameOrBefore(date);
  }

  reset() {
    this._date = dayjs();
    this._locale = this.defaultLocale;
    return this;
  }
}

const dayFormatter = new DateTimeFormatter();
module.exports = dayFormatter;
