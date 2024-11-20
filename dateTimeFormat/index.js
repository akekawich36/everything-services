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
  const validLocales = ['en', 'th'];
  if (!validLocales.includes(locale)) {
    throw new Error(`Not support locale: ${locale}`);
  }
}

const formatDate = (date, format, locale = "en") => {
  try {
    validateLocale(locale)

    dayjs.locale(locale);

    let dateFormatted = date ? dayjs(date) : dayjs();
    return format ? dateFormatted.format(format) : dateFormatted;
  } catch (err) {
    throw new Error(`Date formatting error: ${err.message}`);
  }
};

const compareDates = (date1, date2, unit = "day") => {
  try {
    const d1 = dayjs(date1);
    const d2 = dayjs(date2);
    return {
      isBefore: d1.isBefore(d2, unit),
      isAfter: d1.isAfter(d2, unit),
      isSame: d1.isSame(d2, unit),
      difference: d2.diff(d1, unit),
      isSameOrAfter: d1.isSameOrAfter(d2, unit),
      isSameOrBefore: d1.isSameOrBefore(d2, unit),
    };
  } catch (err) {
    throw new Error(`Date compare error: ${err.message}`);
  }
};

module.exports = {
  formatDate,
  compareDates,
  dayjs
};
