import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/BlurryLoading.module.css';

const scale = (
  num: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
): number => ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

const { blurryLoadingBody, bg, loadingText, mainContainer } = styles;

export default function BlurryLoading(): JSX.Element {
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const int = setInterval(blurring, 30);
    let load = 0;
    function blurring() {
      load += 1;

      if (load > 99) {
        clearInterval(int);
      }
      setLoading(load);
    }
    document.querySelector('body')?.classList.add(`${blurryLoadingBody}`);
    return () => {
      document.querySelector('body')?.classList.remove(`${blurryLoadingBody}`);
      setLoading(0);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Blurry Loading</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <section
          className={bg}
          style={{ filter: `blur(${scale(loading, 0, 100, 30, 0)}px)` }}
        >
          {' '}
        </section>
        <div
          className={loadingText}
          style={{ opacity: scale(loading, 0, 100, 1, 0) }}
        >
          {`${loading}%`}
        </div>
      </div>
    </>
  );
}
