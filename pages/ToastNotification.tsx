/* eslint-disable react/no-array-index-key */
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/ToastNotification.module.css';

const { mainContainer, btn, toasts, toast } = styles;

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

export default function ToastNotification(): JSX.Element {
  const [toastList, setToastList] = useState<Array<string>>([]);
  const [list, setList] = useState<Array<string>>(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        toastList.splice(0, 1);
        setList([...toastList]);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [toastList]);

  const handleButtonClick = () => {
    const notificationIndex = Math.ceil(Math.random() * messages.length - 1);
    const newNotificationMsg = messages[notificationIndex];
    setToastList([...toastList, newNotificationMsg]);
  };

  return (
    <>
      <Head>
        <title>Toast Notification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <div id={toasts}>
          {list.length > 0 &&
            list.map((msg, i) => (
              <div key={i} className={toast}>
                {list[i]}
              </div>
            ))}
        </div>
        <button type="button" className={btn} onClick={handleButtonClick}>
          Show Notification
        </button>
      </div>
    </>
  );
}
