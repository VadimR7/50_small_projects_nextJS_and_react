import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useLayoutEffect, useRef } from 'react';
import styles from '../styles/SplitLanding.module.css';

const { container, split, left, right, btn, hoverRight, hoverLeft } = styles;

export default function SplitLanding(): JSX.Element {
  const leftSideRef = useRef<HTMLDivElement | null>(null);
  const rightSideRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const leftSide = leftSideRef.current;
    const rightSide = rightSideRef.current;
    const containerDiv = containerRef.current;

    if (leftSide && containerDiv && rightSide) {
      leftSide.addEventListener('mouseenter', () =>
        containerDiv.classList.add(`${hoverLeft}`),
      );
      leftSide.addEventListener('mouseleave', () =>
        containerDiv.classList.remove(`${hoverLeft}`),
      );

      rightSide.addEventListener('mouseenter', () =>
        containerDiv.classList.add(`${hoverRight}`),
      );
      rightSide.addEventListener('mouseleave', () =>
        containerDiv.classList.remove(`${hoverRight}`),
      );
    }
  });

  return (
    <>
      <Head>
        <title>Split Landing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${container}`} ref={containerRef}>
        <div className={`${split} ${left}`} ref={leftSideRef}>
          <h1>PlayStation 5</h1>
          <button type="button" className={btn}>
            Buy Now
          </button>
        </div>
        <div className={`${split} ${right}`} ref={rightSideRef}>
          <h1>XBox Series X</h1>
          <button type="button" className={btn}>
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}
