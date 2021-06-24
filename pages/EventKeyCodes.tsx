import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/EventKeyCodes.module.css';

const { mainContainer, key } = styles;

export default function EventKeyCodes(): JSX.Element {
  const [showInsertDiv, setShowInsertDiv] = useState(false);

  const eventKeyRef = useRef<HTMLDivElement>(null);
  const eventKeyCodeRef = useRef<HTMLDivElement>(null);
  const eventCodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const eventAction = (e: KeyboardEvent) => {
      setShowInsertDiv(true);
      const eventKey = eventKeyRef.current;
      const eventKeyCode = eventKeyCodeRef.current;
      const eventCode = eventCodeRef.current;
      if (eventKey && eventKeyCode && eventCode) {
        eventKey.innerText = e.key === ' ' ? 'Space' : e.key;
        eventKeyCode.innerText = e.keyCode.toString();
        eventCode.innerText = e.code;
      }
    };
    window.addEventListener('keydown', (e) => eventAction(e));
    return () => window.removeEventListener('keydown', (e) => eventAction(e));
  }, []);

  return (
    <>
      <Head>
        <title>Event KeyCodes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <div id="insert">
          {showInsertDiv && (
            <div>
              <div className={key}>
                <span ref={eventKeyRef}> </span>
                <small>event.key</small>
              </div>
              <div className={key}>
                <span ref={eventKeyCodeRef}> </span>
                <small>event.keyCode</small>
              </div>
              <div className={key}>
                <span ref={eventCodeRef}> </span>
                <small>event.code</small>
              </div>
            </div>
          )}
          {!showInsertDiv && (
            <div className={key}>Press any key to get the keyCode</div>
          )}
        </div>
      </div>
    </>
  );
}
