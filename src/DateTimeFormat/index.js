const dayjs = require("dayjs");
require("dayjs/locale/th");
require("dayjs/locale/en");
const buddhistEra = require("dayjs/plugin/buddhistEra");
const customParseFormat = require("dayjs/plugin/customParseFormat");
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
const isLeapYear = require("dayjs/plugin/isLeapYear");
const relativeTime = require("dayjs/plugin/relativeTime");
const dayOfYear = require("dayjs/plugin/dayOfYear");
const minMax = require("dayjs/plugin/minMax");

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(customParseFormat);
dayjs.extend(buddhistEra);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isLeapYear);
dayjs.extend(relativeTime)
dayjs.extend(dayOfYear)
dayjs.extend(minMax);

module.exports = dayjs;
