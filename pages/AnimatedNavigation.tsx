import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/AnimatedNavigation.module.css';

const { mainContainer, active, nav, icon, line, line2, line1 } = styles;

export default function AnimatedNavigation(): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <Head>
        <title>Animated Navigation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer} id={nav}>
        <nav className={`${isActive && active}`}>
          <ul>
            <li>
              <button type="button">Home</button>
            </li>
            <li>
              <button type="button">Works</button>
            </li>
            <li>
              <button type="button">About</button>
            </li>
            <li>
              <button type="button">Contact</button>
            </li>
          </ul>
          <button
            type="button"
            className={icon}
            id="toggle"
            onClick={() => handleToggle()}
          >
            <div className={`${line} ${line1} `} />
            <div className={`${line} ${line2} `} />
          </button>
        </nav>
      </div>
    </>
  );
}
