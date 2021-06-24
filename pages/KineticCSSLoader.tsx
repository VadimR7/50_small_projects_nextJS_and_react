import Head from 'next/head';
import styles from '../styles/KineticCSSLoader.module.css';

const { mainContainer, kinetic } = styles;

export default function KineticCSSLoader(): JSX.Element {
  return (
    <>
      <Head>
        <title>Kinetic CSS Loader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <div className={kinetic} />
      </div>
    </>
  );
}
