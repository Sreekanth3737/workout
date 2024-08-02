const CRON_CONSTANTS = {
  DAY_OF_MONTH: 86400,
  HOUR: 3600,
  MINUTES: 60,
  MONTH: 2592000,
  WEEK_DAY: 604800,
};

function convertFreqInSecondsToCronTime(seconds) {
  let arr = ["*", "*", "*", "*", "*"];

  if (seconds >= CRON_CONSTANTS.MONTH) {
    const value = Math.floor(seconds / CRON_CONSTANTS.MONTH);
    const result = seconds % CRON_CONSTANTS.MONTH;
    arr[3] = value;
    arr[0] = 0;
    arr[1] = 0;
    seconds = result;
  }
  if (seconds >= CRON_CONSTANTS.WEEK_DAY) {
    const value = Math.floor(seconds / CRON_CONSTANTS.WEEK_DAY);
    const result = seconds % CRON_CONSTANTS.WEEK_DAY;
    arr[4] = value;
    arr[0] = 0;
    arr[1] = 0;
    seconds = result;
  }
  if (seconds >= CRON_CONSTANTS.DAY_OF_MONTH) {
    const value = Math.floor(seconds / CRON_CONSTANTS.DAY_OF_MONTH);
    const result = seconds % CRON_CONSTANTS.DAY_OF_MONTH;
    arr[2] = value;
    arr[0] = 0;
    arr[1] = 0;
    seconds = result;
  }
  if (seconds >= CRON_CONSTANTS.HOUR) {
    const value = Math.floor(seconds / CRON_CONSTANTS.HOUR);
    const result = seconds % CRON_CONSTANTS.HOUR;
    arr[1] = value;
    arr[0] = 0;
    seconds = result;
  }
  if (seconds >= CRON_CONSTANTS.MINUTES) {
    const value = Math.floor(seconds / CRON_CONSTANTS.MINUTES);
    const result = seconds % CRON_CONSTANTS.MINUTES;
    arr[0] = value;
    seconds = result;
  }

  return arr;
}

const second = 609800 * 2;
const cronExpressions = convertFreqInSecondsToCronTime(second);
// console.log(cronExpressions.join("  "));

const convertSecondsToCronTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const remainderMinutesForCron = minutes % 60;
  const days = Math.floor(hours / 24);
  const remainderHoursForCron = hours % 24;

  if (
    days === 0 &&
    remainderHoursForCron === 0 &&
    remainderMinutesForCron === 0
  ) {
    return "* * * * *";
  }

  const minuteCron =
    remainderMinutesForCron === 0 ? "*" : `*/${remainderMinutesForCron}`;
  const hourCron =
    remainderHoursForCron === 0 ? "*" : `*/${remainderHoursForCron}`;
  const dayCron = days === 0 ? "*" : `*/${days}`;

  return `${minuteCron} ${hourCron} ${dayCron} * *`;
};

// Example usage
const seconds = 180;
const cronExpression = convertSecondsToCronTime(seconds);
console.log(cronExpression);
