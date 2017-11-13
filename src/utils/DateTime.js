import { format, addDays } from 'date-fns';
import { DAY_START_TIME } from '../constants';

const DayOfWeek = (todayUTC, dayOfWeek) => {
  if (dayOfWeek === 0) {
    const nowHour = format(new Date(), 'H');

    return nowHour > 17 || nowHour < 6 ? 'Tonight' : 'Today';
  }
  
  return format(todayUTC * 1000, 'dddd');
};

const TimeOfDay = (time) => {
  return format(new Date(time * 1000), 'HH:mm');
};

const CutOffTime = (now) => {
  const nowHour = format(now, 'H');
  const firstTimeCutoff = nowHour > 6 ?
                          format(addDays(now, 1), `YYYY-MM-DD ${DAY_START_TIME}`) :
                          format(now, `YYYY-MM-DD ${DAY_START_TIME}`);

  return firstTimeCutoff;

}



export { DayOfWeek, TimeOfDay, CutOffTime};