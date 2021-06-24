/* eslint-disable camelcase */
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/ThemeClock.module.css';

const {
  mainContainer,
  dark,
  toggle,
  clockContainer,
  needle,
  hour,
  minute,
  second,
  clock,
  centerPoint,
  timeClass,
  dateClass,
  circle,
} = styles;

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number,
) => ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

const setTransformStyle = (num: number, inMin: number, inMax: number) =>
  `translate(-50%, -100%) rotate(${scale(num, inMin, inMax, 0, 360)}deg)`;

const setTransitionForSpinFix = (timePart: number) => `
  ${timePart === 0 ? 'none' : 'all 0.1s ease-in'}
`;

const setDate = (datePart?: string) => {
  const time = new Date();
  let currentDatePart;
  switch (datePart) {
    case 'month':
      currentDatePart = time.getMonth();
      break;
    case 'day':
      currentDatePart = time.getDay();
      break;
    case 'hours':
      currentDatePart = time.getHours();
      break;
    case 'minutes':
      currentDatePart = time.getMinutes();
      break;
    case 'seconds':
      currentDatePart = time.getSeconds();
      break;
    default:
      currentDatePart = time.getDate();
  }

  return currentDatePart;
};

const setStyles = (theState: number, inMin: number, inMax: number) => ({
  transform: setTransformStyle(theState, inMin, inMax),
  transition: setTransitionForSpinFix(theState),
});

const ClockSeconds = (): JSX.Element => {
  const [secondsState, setSecondsState] = useState(0);

  useEffect(() => {
    const setSeconds = () => {
      const seconds = setDate('seconds');
      setSecondsState(seconds);
    };
    const interval = setInterval(setSeconds, 1000);
    return () => clearInterval(interval);
  }, [secondsState]);

  return (
    <div
      className={`${needle} ${second}`}
      style={setStyles(secondsState, 0, 60)}
    />
  );
};

const ClockMinutes = (): JSX.Element => {
  const [minutesState, setMinutesState] = useState(0);

  useEffect(() => {
    const setMinutes = () => {
      const minutes = setDate('minutes');
      setMinutesState(minutes);
    };
    const interval = setInterval(setMinutes, 1000);
    return () => clearInterval(interval);
  }, [minutesState]);

  return (
    <div
      className={`${needle} ${minute}`}
      style={setStyles(minutesState, 0, 60)}
    />
  );
};

const ClockHours = (): JSX.Element => {
  const [hoursState, setHoursState] = useState(0);

  useEffect(() => {
    const setHours = () => {
      const hours = setDate('hours');
      setHoursState(hours);
    };
    const interval = setInterval(setHours, 1000);
    return () => clearInterval(interval);
  }, [hoursState]);

  return (
    <div className={`${needle} ${hour}`} style={setStyles(hoursState, 0, 12)} />
  );
};

const Clock = (): JSX.Element => (
  <div className={clock}>
    <ClockHours />
    <ClockMinutes />
    <ClockSeconds />
    <div className={centerPoint} />
  </div>
);

type AppProps = {
  data: {
    initHour: number;
    initMinute: number;
    initMonth: number;
    initDay: number;
    initDate: number;
  };
};

export default function ThemeClock({ data }: AppProps): JSX.Element {
  const { initHour, initMinute, initMonth, initDay, initDate } = data;

  const [darkModeIsActive, setDarkModeIsActive] = useState(false);
  const [hourState, setHourState] = useState<number>(initHour);
  const [minuteState, setMinuteState] = useState<number>(initMinute);
  const [dayState, setDayState] = useState<number>(initDay);
  const [dateState, setDateState] = useState<number>(initDate);

  useEffect(() => {
    const setDateAndHour = () => {
      const hours = setDate('hours');
      setHourState(hours);
      const minutes = setDate('minutes');
      setMinuteState(minutes);
      const day = setDate('day');
      setDayState(day);
      const date = setDate();
      setDateState(date);
    };
    const interval = setInterval(setDateAndHour, 1000);
    return () => clearInterval(interval);
  }, [hourState, minuteState, dateState]);

  const handleDarkModeToggle = () => {
    setDarkModeIsActive((prevState) => !prevState);
  };

  const hourAndMinute = `${hourState}:${
    minuteState < 10 ? `0${minuteState}` : minuteState
  }`;

  return (
    <>
      <Head>
        <title>Theme Clock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${mainContainer} ${darkModeIsActive && dark}`}>
        <button
          type="button"
          className={toggle}
          onClick={() => handleDarkModeToggle()}
        >
          {darkModeIsActive ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className={clockContainer}>
          <Clock />
          <div className={timeClass}>{hourAndMinute}</div>
          <div className={dateClass}>
            {`${days[dayState]}, ${months[initMonth]} `}
            <span className={circle}>{dateState}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const setDateAndHour = () => {
    const initHour = setDate('hours');
    const initMinute = setDate('minutes');
    const initDay = setDate('day');
    const initMonth = setDate('month');
    const initDate = setDate();
    return {
      initHour,
      initDay,
      initMonth,
      initMinute,
      initDate,
    };
  };
  const data = setDateAndHour();
  return {
    props: { data },
  };
};
