import Head from 'next/head';
import { useState, useEffect } from 'react';
import ComponentStyles from '../styles/AnimatedCountdownStyle';

// Set counters length (0 based)
const desiredCounterLength = 4;

const setCounterLength = (numberOfSteps: number) => {
  let id = numberOfSteps;
  const arr = [];
  for (let i = numberOfSteps; i > 0; i -= 1) {
    const newCircle = { id: (id -= 1) };
    arr.push(newCircle);
  }
  return arr;
};

const countersLength = setCounterLength(desiredCounterLength);
const firstCounter = countersLength.length - 1;

export default function AnimatedCountdown(): JSX.Element {
  const [isActive, setIsActive] = useState(firstCounter);
  const [animationClass, setAnimationClass] = useState('');
  const [toogleCounter, setToogleCounter] = useState(true);

  useEffect(() => {
    setIsActive(firstCounter);
    setAnimationClass('in');
  }, []);

  useEffect(() => {
    const activateInClass = () => {
      setAnimationClass('in');
    };
    const activateOutClass = () => {
      setAnimationClass('out');
    };
    const changeActiveSpan = () => {
      setIsActive((prevState) => prevState - 1);
    };

    activateInClass();

    const timeout = setTimeout(() => {
      activateOutClass();
    }, 501);

    const timeout2 = setTimeout(() => {
      if (isActive > 0) {
        changeActiveSpan();
      }
    }, 1002);

    const timeout3 = setTimeout(() => {
      if (isActive === 0) {
        setToogleCounter(false);
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [isActive]);

  const handleReplayClick = () => {
    setToogleCounter(true);
    setIsActive(firstCounter);
  };

  return (
    <>
      <Head>
        <title>Animated Countdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComponentStyles.Wrapper>
        <div className={toogleCounter ? 'counter' : 'counter hide'}>
          <div className="nums">
            {countersLength.map((item) => (
              <span
                key={item.id}
                className={isActive === item.id ? animationClass : undefined}
              >
                {item.id}
              </span>
            ))}
          </div>
          <h4>Get ready</h4>
        </div>

        <div className={!toogleCounter ? 'final show' : 'final'}>
          <h1>Go</h1>
          <button type="button" onClick={handleReplayClick}>
            Replay
          </button>
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
