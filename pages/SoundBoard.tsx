/* eslint-disable jsx-a11y/media-has-caption */
import Head from 'next/head';
import { useRef, RefObject, createRef, useEffect } from 'react';
import styles from '../styles/SoundBoard.module.css';

const { mainContainer, btn } = styles;

type Sounds = {
  source: string;
  id: string;
}[];

const sounds: Sounds = [
  { source: '/sounds/applause.mp3', id: 'applause' },
  { source: '/sounds/boo.mp3', id: 'boo' },
  { source: '/sounds/gasp.mp3', id: 'gasp' },
  { source: '/sounds/tada.mp3', id: 'tada' },
  { source: '/sounds/victory.mp3', id: 'victory' },
  { source: '/sounds/wrong.mp3', id: 'wrong' },
];

export default function SoundBoard(): JSX.Element {
  const buttonsRef = useRef<(RefObject<HTMLButtonElement> | null)[]>([]);
  const audioRefs = useRef<(RefObject<HTMLAudioElement> | null)[]>([]);

  buttonsRef.current = sounds.map(
    // eslint-disable-next-line no-return-assign
    (_ref, index) =>
      (buttonsRef.current[index] = createRef<HTMLButtonElement>()),
  );

  audioRefs.current = sounds.map(
    // eslint-disable-next-line no-return-assign
    (_ref, index) => (audioRefs.current[index] = createRef<HTMLAudioElement>()),
  );

  useEffect(() => {
    const buttonsArr = buttonsRef.current;
    const audioArr = audioRefs.current;

    const stopSongs = () => {
      audioArr.forEach((sound) => {
        const song = sound?.current;

        song?.pause();
        if (song?.currentTime) {
          song.currentTime = 0;
        }
      });
    };

    buttonsArr.forEach((button, index) => {
      button?.current?.addEventListener('click', () => {
        stopSongs();
        audioArr[index]?.current?.play();
      });
    });
  });

  return (
    <>
      <Head>
        <title>Sound Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        {sounds.map((sound, index) => (
          <audio
            src={sound.source}
            id={sound.id}
            key={sound.id}
            ref={audioRefs.current[index]}
          />
        ))}
        <div id="buttons">
          {sounds.map((sound, index) => (
            <button
              key={sound.id}
              type="button"
              className={btn}
              ref={buttonsRef.current[index]}
            >
              {sound.id}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
