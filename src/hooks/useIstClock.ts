import { useState, useEffect } from 'react';

export interface IstTimeState {
  time: string;
  timeString: string;
  timeStringWithSeconds: string;
  dateString: string;
  timezoneLabel: string;
  location: string;
}

export function useIstClock(): IstTimeState {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeFormatterWithSeconds = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return {
    time: timeFormatter.format(now),
    timeString: timeFormatter.format(now),
    timeStringWithSeconds: timeFormatterWithSeconds.format(now),
    dateString: dateFormatter.format(now),
    timezoneLabel: 'IST · UTC +5:30',
    location: 'COIMBATORE, INDIA',
  };
}
