import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/ProgressSteps.module.css';

type TotalSteps = Array<{
  id: number;
}>;

const setTotalSteps = (numberOfSteps: number) => {
  let id = 0;
  const arr = [];
  for (let i = 0; i < numberOfSteps; i += 1) {
    const newCircle = { id: (id += 1) };
    arr.push(newCircle);
  }
  return arr;
};

const steps: TotalSteps = setTotalSteps(6);
const stepsLength = steps.length;
const {
  container,
  progress,
  progressContainer,
  circle,
  active,
  progressBtn,
  mainContainer,
} = styles;

export default function ProgressSteps(): JSX.Element {
  const [isActive, setIsActive] = useState([0]);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line operator-linebreak
    const updatedProgressWidth =
      ((isActive.length - 1) / (stepsLength - 1)) * 100;
    setProgressWidth(updatedProgressWidth);
  }, [isActive]);

  const handleNext = () => {
    if (isActive.length < stepsLength) {
      const activeCircles = isActive.length;
      const newActiveCircles = [...isActive, activeCircles];
      setIsActive(newActiveCircles);
    }
  };

  const hanlePrev = () => {
    if (isActive.length > 1) {
      const newActiveCircles = isActive.slice(0, -1);
      setIsActive(newActiveCircles);
    }
  };

  return (
    <>
      <Head>
        <title>Progress Steps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <div className={container}>
          <div className={progressContainer}>
            <div
              className={progress}
              id="progress"
              style={{ width: `${progressWidth}%` }}
            >
              {null}
            </div>
            {steps.map((step, i) => (
              <div
                className={
                  isActive.includes(i) ? `${circle} ${active}` : `${circle}`
                }
                key={step.id}
              >
                {step.id.toString()}
              </div>
            ))}
          </div>
          <button
            type="button"
            className={progressBtn}
            id="prev"
            onClick={() => hanlePrev()}
            disabled={isActive.length === 1}
          >
            Prev
          </button>
          <button
            type="button"
            className={progressBtn}
            id="next"
            onClick={() => handleNext()}
            disabled={isActive.length === stepsLength}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
