/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import { ChangeEvent, useEffect, useState } from 'react';
import ComponentStyles from '../styles/GoodCheapFastStyle';

const initState = {
  good: false,
  cheap: false,
  fast: false,
};

export default function GoodCheapFast(): JSX.Element {
  const [isCkecked, setIsChecked] = useState(initState);

  useEffect(() => {
    setIsChecked(initState);
  }, []);

  const handleGoodToogleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked({ ...isCkecked, good: e.currentTarget.checked });
    if (isCkecked.fast && isCkecked.cheap) {
      setIsChecked({ ...isCkecked, fast: false, good: true });
    }
  };
  const handleCheapToogleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked({ ...isCkecked, cheap: e.currentTarget.checked });
    if (isCkecked.fast && isCkecked.good) {
      setIsChecked({ ...isCkecked, cheap: true, good: false });
    }
  };
  const handleFastToogleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked({ ...isCkecked, fast: e.currentTarget.checked });
    if (isCkecked.cheap && isCkecked.good) {
      setIsChecked({ ...isCkecked, fast: true, cheap: false });
    }
  };
  return (
    <>
      <Head>
        <title>Good Cheap Fast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComponentStyles.Wrapper>
        <h2>How you want your project to be?</h2>
        <div className="toggle-container">
          <input
            type="checkbox"
            id="good"
            className="toggle"
            onChange={(e) => handleGoodToogleChange(e)}
            checked={isCkecked.good}
          />
          <label htmlFor="good" className="label">
            <div className="ball" />
          </label>
          <span>Good</span>
        </div>
        <div className="toggle-container">
          <input
            type="checkbox"
            id="cheap"
            className="toggle"
            onChange={(e) => handleCheapToogleChange(e)}
            checked={isCkecked.cheap}
          />
          <label htmlFor="cheap" className="label">
            <div className="ball" />
          </label>
          <span>Cheap</span>
        </div>
        <div className="toggle-container">
          <input
            type="checkbox"
            id="fast"
            className="toggle"
            onChange={(e) => handleFastToogleChange(e)}
            checked={isCkecked.fast}
          />
          <label htmlFor="fast" className="label">
            <div className="ball" />
          </label>
          <span>Fast</span>
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
