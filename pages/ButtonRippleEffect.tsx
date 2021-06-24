import Head from 'next/head';
import { MouseEvent, ReactElement, useState } from 'react';
import styles from '../styles/ButtonRippleEffect.module.css';

const { mainContainer, circle, ripple } = styles;

const crateSpan = (top: number, left: number) => (
  <span
    className={circle}
    style={{
      top: `${top}px`,
      left: `${left}px`,
    }}
  />
);

export default function ButtonRippleEffect(): JSX.Element {
  const [rippleSpan, setRippleSpan] = useState<ReactElement | null>(null);

  const handleButtonClick = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;

    const { top, left } = e.currentTarget.getBoundingClientRect();

    const spanTop = y - top;
    const spanLeft = x - left;

    const newSpan = crateSpan(spanTop, spanLeft);

    setRippleSpan(newSpan);

    setTimeout(() => {
      setRippleSpan(null);
    }, 500);
  };

  return (
    <>
      <Head>
        <title>Button Ripple Effect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <button
          type="button"
          className={ripple}
          onClick={(e) => handleButtonClick(e)}
        >
          Click Me
          {rippleSpan && rippleSpan}
        </button>
      </div>
    </>
  );
}
