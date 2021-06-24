import Head from 'next/head';
import { MouseEvent, useEffect, useState } from 'react';
import { googleFonts } from '../helpers/externalLinks';
import ComponentStyles from '../styles/CatchTheInsectStyle';

const insects = [
  {
    name: 'Fly',
    image: 'http://pngimg.com/uploads/fly/fly_PNG3946.png',
  },
  {
    name: 'Mosquito',
    image: 'http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png',
  },
  {
    name: 'Spider',
    image: 'http://pngimg.com/uploads/spider/spider_PNG12.png',
  },
  {
    name: 'Roach',
    image: 'http://pngimg.com/uploads/roach/roach_PNG12163.png',
  },
];

const getRandomId = () => {
  const id = Math.floor(Math.random() * 100 * new Date().getTime());
  return id.toString();
};

const getRandomPosition = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const left = Math.random() * (width - 200) + 100;
  const top = Math.random() * (height - 200) + 100;
  return { top, left };
};

type InsectInGame = {
  id: string;
  type: number;
  image: string;
  name: string;
  top: number;
  left: number;
  angle: number;
};

const createInsect = (insectType: number) => {
  const type = insectType;
  const { top, left } = getRandomPosition();
  const id = getRandomId();
  const { image } = insects[insectType];
  const { name } = insects[insectType];
  const angle = Math.random() * 360;
  return { id, type, image, name, top, left, angle };
};

export default function CatchTheInsect(): JSX.Element {
  const [secondScreenIsShown, setSecondScreenIsShown] = useState(false);
  const [thirdScreenIsShown, setThirdScreenIsShown] = useState(false);
  const [inGameInsects, setInGameInsects] = useState<InsectInGame[]>([]);
  const [gameIsStarted, setIsGameStarted] = useState(false);
  const [inGameSeconds, setInGameSeconds] = useState(0);
  const [timer, setTimer] = useState({ minutes: '00', seconds: '00' });
  const [score, setScore] = useState(0);
  const [infoMessageShow, setInfoMessageShow] = useState(false);
  const [stopMessageShow, setStopMessageShow] = useState(false);

  useEffect(() => {
    const mainDiv = document.getElementById('__next');
    if (mainDiv) {
      mainDiv.style.overflow = 'hidden';
    }
    return () => {
      if (mainDiv) {
        mainDiv.style.overflow = 'initial';
      }
    };
  }, []);

  useEffect(() => {
    const increaseTime = () => {
      const m = Math.floor(inGameSeconds / 60);
      const s = inGameSeconds % 60;
      const minutes = m < 10 ? `0${m}` : m.toString();
      const seconds = s < 10 ? `0${s}` : s.toString();
      setTimer({ minutes, seconds });
    };
    increaseTime();
  }, [inGameSeconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameIsStarted) {
        setInGameSeconds((prevState) => prevState + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [gameIsStarted]);

  const handleChooseInsectClick = (idx: number) => {
    const insect = createInsect(idx);
    setInGameInsects((prevState) => {
      prevState.push(insect);
      return prevState;
    });
    setThirdScreenIsShown(true);
    setIsGameStarted(true);
  };

  const handleOnInsectClick = (
    e: MouseEvent,
    insectType: number,
    insectId: string,
  ) => {
    const newInsect1 = createInsect(insectType);
    const newInsect2 = createInsect(insectType);
    e.currentTarget.classList.add('caught');
    setScore((prevState) => prevState + 1);
    if (score >= 20) {
      setInfoMessageShow(true);
    }
    if (gameIsStarted) {
      setTimeout(() => {
        setInGameInsects((prevState) => {
          const newState = prevState.filter((insect) => insect.id !== insectId);
          return newState;
        });
        setInGameInsects((prevState) => {
          const newState = [...prevState, newInsect1, newInsect2];
          return newState;
        });
      }, 500);
    }
    if (inGameInsects.length > 40) {
      setInfoMessageShow(false);
      setStopMessageShow(true);
      setTimeout(() => {
        setInGameInsects([]);
      }, 1000);
      setIsGameStarted(false);
    }
  };

  return (
    <>
      <Head>
        <title>Catch The Insect</title>
        <link rel="icon" href="/favicon.ico" />
        {googleFonts('Press+Start+2P')}
      </Head>
      <ComponentStyles.Wrapper>
        <div className={secondScreenIsShown ? 'screen up' : 'screen'}>
          <h1>Catch The Insect</h1>
          <button
            onClick={() => setSecondScreenIsShown(true)}
            type="button"
            className="btn"
          >
            Play Game
          </button>
        </div>

        <div className={thirdScreenIsShown ? 'screen up' : 'screen'}>
          <h1>What is your &lsquo;favourite&lsquo; insect?</h1>
          <ul className="insects-list">
            {insects.map((insect, idx) => (
              <li key={insect.name}>
                <button
                  onClick={() => handleChooseInsectClick(idx)}
                  type="button"
                  className="choose-insect-btn"
                >
                  <p>{insect.name}</p>
                  <img src={insect.image} alt={insect.name} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="screen game-container">
          <h3 className="time">
            Time: {timer.minutes}:{timer.seconds}
          </h3>
          <h3 className="score">Score: {score.toString()}</h3>
          {infoMessageShow && (
            <h5 className="message visible">
              Are you are annoyed yet? <br />
              You are playing an impossible game!
            </h5>
          )}
          {stopMessageShow && (
            <h5 className="message visible">
              GAME OVER! <br />
              You are the BEST! Thanks! :)))
            </h5>
          )}

          {inGameInsects &&
            inGameInsects.map((insect) => {
              const insectPosition = {
                top: `${insect.top}px`,
                left: `${insect.left}px`,
              };
              const insectAngle = { transform: `rotate(${insect.angle}}deg)` };
              return (
                <div
                  aria-hidden
                  className="insect"
                  key={insect.id}
                  style={insectPosition}
                  onClick={(e) =>
                    handleOnInsectClick(e, insect.type, insect.id)
                  }
                >
                  <img
                    aria-hidden
                    src={insect.image}
                    alt={insect.name}
                    style={insectAngle}
                  />
                </div>
              );
            })}
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
