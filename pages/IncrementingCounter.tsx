import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/IncrementingCounter.module.css';

const { mainContainer, counterContainer, counter } = styles;

type Socials = {
  init: {
    twitter: number;
    youtube: number;
    facebook: number;
  };
  target: [
    {
      twitter: number;
    },
    {
      youtube: number;
    },
    {
      facebook: number;
    },
  ];
};

const socials: Socials = {
  init: { twitter: 0, youtube: 0, facebook: 0 },
  target: [{ twitter: 5000 }, { youtube: 500 }, { facebook: 10000 }],
};

export default function IncrementingCounter(): JSX.Element {
  const [folowers, setFolowers] = useState(socials.init);

  useEffect(() => {
    const updateCounter = () => {
      socials.target.forEach((social) => {
        const target = Object.values(social)[0];
        const key = Object.keys(social)[0];
        const increment = target / 200;
        let c = 0;

        const interval = setInterval(incrementFolowers, 1);

        function incrementFolowers() {
          const newFolowers = Math.ceil((c += increment));
          if (c > target - 1) {
            clearInterval(interval);
            setFolowers((prevState) => ({
              ...prevState,
              [key]: target,
            }));
            return;
          }
          setFolowers((prevState) => ({
            ...prevState,
            [key]: newFolowers,
          }));
        }
      });
    };
    updateCounter();

    return () => setFolowers(socials.init);
  }, []);

  return (
    <>
      <Head>
        <title>Incrementing Counter</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossOrigin="anonymous"
        />
      </Head>
      <div className={mainContainer}>
        <div className={counterContainer}>
          <i className="fab fa-twitter fa-3x" />
          <div className={counter}>{folowers.twitter.toString()}</div>
          <span>Twitter Folowers</span>
        </div>
        <div className={counterContainer}>
          <i className="fab fa-youtube fa-3x" />
          <div className={counter}>{folowers.youtube.toString()}</div>
          <span>Youtube Folowers</span>
        </div>
        <div className={counterContainer}>
          <i className="fab fa-facebook fa-3x" />
          <div className={counter}>{folowers.facebook.toString()}</div>
          <span>Facebook Folowers</span>
        </div>
      </div>
    </>
  );
}
