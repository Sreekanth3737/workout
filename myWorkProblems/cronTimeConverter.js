const timeInSeconds = 10;
const cronInterval = timeInSeconds * 1000;
const convertSecondsToCronTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const remainderMinutesForCron = minutes % 60;
  const days = Math.floor(hours / 24);
  const remainderHoursForCron = hours % 24;
  const remainderSeconds = seconds % 60;

  const minuteCron =
    remainderMinutesForCron === 0 ? "0" : `*/${remainderMinutesForCron}`;
  const hourCron =
    remainderHoursForCron === 0 ? "0" : `*/${remainderHoursForCron}`;
  const dayCron = days === 0 ? "0" : `*/${days}`;

  return `${remainderSeconds} ${minuteCron} ${hourCron} ${dayCron} * * *`;
};

const runTaskBasedOnTime = (cronTime) => {
  console.log(`RUNNING ______: ${cronTime}`);

  setTimeout(() => {
    scheduleTask(cronTime);
  }, cronInterval);
};

const scheduleTask = (cronTime) => {
  runTaskBasedOnTime(cronTime);
};

const cronTime = convertSecondsToCronTime(timeInSeconds);

scheduleTask(cronTime);
