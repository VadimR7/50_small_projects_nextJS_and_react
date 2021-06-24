import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/DadJokes.module.css';

type Props = {
  theJoke: string;
};

const { mainContainer, container, joke, btn } = styles;

const getTheJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch('https://icanhazdadjoke.com/', config);
  const data = await res.json();
  const theJoke = data.joke;
  return theJoke;
};

export default function DadJokes({ theJoke }: Props): JSX.Element {
  const [jokeText, setJokeText] = useState('');

  const jokeDivRef = useRef<HTMLDivElement>(null);
  const jokeDiv = jokeDivRef.current;

  useEffect(() => {
    setJokeText(theJoke);
    if (jokeDiv) {
      jokeDiv.innerText = jokeText;
    }
  }, [jokeDiv, jokeText, theJoke]);

  const handleGetNewJoke = async () => {
    const newJoke = await getTheJoke();
    if (jokeDiv) {
      jokeDiv.innerText = newJoke;
    }
  };

  return (
    <>
      <Head>
        <title>Dad Jokes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <div className={container}>
          <h3>Don`t laugh challenge</h3>
          <div id="joke" className={joke} ref={jokeDivRef}>
            {null}
          </div>
          <button
            type="button"
            id="jokeBtn"
            className={btn}
            onClick={() => handleGetNewJoke()}
          >
            Get another joke
          </button>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const theJoke = await getTheJoke();
  return {
    props: { theJoke },
  };
};
