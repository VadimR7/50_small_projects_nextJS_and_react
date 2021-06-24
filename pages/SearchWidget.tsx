import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/SearchWidget.module.css';

const { mainContainer, search, active, btnClass, input, searchWidgetBody } =
  styles;

export default function SearchWidget(): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    document.querySelector('body')?.classList.add(`${searchWidgetBody}`);
    return () => {
      document.querySelector('body')?.classList.remove(`${searchWidgetBody}`);
    };
  });

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <Head>
        <title>Search Widget</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossOrigin="anonymous"
        />
      </Head>
      <div className={mainContainer}>
        <div className={isActive ? `${search} ${active}` : `${search}`}>
          <input type="text" className={input} placeholder="Search..." />
          <button
            type="button"
            className={btnClass}
            onClick={() => handleClick()}
          >
            <i className="fas fa-search"> </i>
          </button>
        </div>
      </div>
    </>
  );
}
