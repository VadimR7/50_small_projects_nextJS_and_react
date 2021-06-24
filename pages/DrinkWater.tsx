import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import styles from '../styles/DrinkWater.module.css';

const {
  mainContainer,
  remained,
  percentage,
  cup,
  text,
  cups,
  cupSmall,
  full,
  liters,
} = styles;

const goal = 2000;
const cupVolume = 250;

const setTotalCups = (nOfCups: number) => {
  const arr = [];
  for (let i = 0; i < nOfCups; i += 1) {
    const newCup = i;
    arr.push(newCup);
  }
  return arr;
};

type RemainedInfo = {
  visibility: VisibilityState;
  height: number | string;
  litters: number;
};

type RemainedInfoPercentage = {
  visibility: VisibilityState;
  height: string | number;
  percentage: number;
};

const remainedInfoInitState: RemainedInfo = {
  visibility: 'visible',
  height: 'auto',
  litters: 0,
};

const percentageInitState: RemainedInfoPercentage = {
  visibility: 'hidden',
  height: 0,
  percentage: 0,
};

const totalCups = setTotalCups(goal / cupVolume);

export default function DrinkWater(): JSX.Element {
  const [fullCups, setFullCups] = useState<number[]>([]);
  const [percentageProps, setPercentageProps] =
    useState<RemainedInfoPercentage>(percentageInitState);
  const [remainedInfoProps, setRemainedInfoProps] = useState<RemainedInfo>(
    remainedInfoInitState,
  );

  const updateBigCup = useCallback(() => {
    const fulledCups = fullCups.length;
    const totalCupsLength = totalCups.length;

    if (fulledCups === 0) {
      setPercentageProps({
        visibility: 'hidden',
        height: 0,
        percentage: 0,
      });
    } else {
      setPercentageProps({
        visibility: 'visible',
        height: (fulledCups / totalCupsLength) * 330,
        percentage: (fulledCups / totalCupsLength) * 100,
      });
    }

    if (fulledCups === totalCupsLength) {
      setRemainedInfoProps({
        visibility: 'hidden',
        height: '0px',
        litters: 0,
      });
    } else {
      setRemainedInfoProps({
        visibility: 'visible',
        height: 'auto',
        litters: goal / 1000 - (cupVolume * fulledCups) / 1000,
      });
    }
  }, [fullCups]);

  useEffect(() => {
    updateBigCup();
  }, [updateBigCup]);

  const handleSetFull = (id: number) => {
    const fulledCups = fullCups.length;
    if (id === fulledCups - 1) {
      updateBigCup();
      setFullCups(fullCups.filter((fullCup) => fullCup !== id));
      return;
    }
    setFullCups(totalCups.filter((_fullCup, index) => index <= id));
    updateBigCup();
  };

  return (
    <>
      <Head>
        <title>Drink Water</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <h1>Drink Water</h1>
        <h3>{`Goal: ${(goal / 1000).toString()} Liters`}</h3>

        <div>
          <div className={cup}>
            <div
              id={remained}
              className={remained}
              style={{
                height: `${remainedInfoProps.height}`,
                visibility: `${remainedInfoProps.visibility}`,
              }}
            >
              <span id={liters}>{`${remainedInfoProps.litters}L`}</span>
              <small>Remained</small>
            </div>
            <div
              id={percentage}
              className={percentage}
              style={{
                height: `${percentageProps.height}px`,
                visibility: `${percentageProps.visibility}`,
              }}
            >
              {`${percentageProps.percentage}%`}
            </div>
          </div>
        </div>

        <p className={text}>
          Select how many glasses of water that you have drank
        </p>

        <div className={cups}>
          {totalCups.map((cup2, index) => (
            <div
              aria-hidden="true"
              onClick={() => handleSetFull(index)}
              key={cup2}
              className={`${cup} ${cupSmall} ${
                fullCups.includes(index) && full
              }`}
            >{`${cupVolume.toString()} ml`}</div>
          ))}
        </div>
      </div>
    </>
  );
}
