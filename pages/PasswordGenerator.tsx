/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ComponentStyles from '../styles/PasswordGeneratorStyle';

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

type ActiveTypes = {
  upper: boolean;
  lower: boolean;
  number: boolean;
  symbol: boolean;
};

const countTypes = (obj: ActiveTypes) => {
  let count = 0;
  const typeArr = Object.values(obj);
  typeArr.forEach((item) => {
    if (item) count += 1;
  });
  return count;
};

const passwordTypes = (arr: Array<() => string>, obj: ActiveTypes) => {
  const types = Object.keys(obj);
  const randomTypes: { [key: string]: () => string } = {};
  types.forEach((type, index) => {
    randomTypes[type] = arr[index];
  });
  return randomTypes;
};

const createTypesArr = (obj: ActiveTypes) => {
  const arr: { [x: string]: boolean }[] = [];
  Object.entries(obj).forEach((item) => {
    arr.push({ [item[0]]: item[1] });
  });
  return arr;
};

const createPassword = (
  desiredMinLength: number,
  desiredMaxLength: number,
  passLenght: string,
  typesCount: number,
  typesArr: { [x: string]: boolean }[],
  randomFunc: { [key: string]: () => string },
) => {
  const password: string[] = [];
  let length = Number(passLenght);
  if (length > desiredMaxLength) length = desiredMaxLength;
  if (length < desiredMinLength) length = desiredMinLength;
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((item) => {
      const funcName = Object.keys(item)[0];
      const newPass = randomFunc[funcName]();
      password.push(newPass);
    });
  }
  return password.join('');
};

const initState = {
  resultOutput: '',
  passLenght: '20',
  activeTypes: {
    upper: true,
    lower: true,
    number: true,
    symbol: true,
  },
};

export default function PasswordGenerator(): JSX.Element {
  const [resultOutput, setResultOutput] = useState<string>('');
  const [passLenght, setPassLenght] = useState<string>('20');
  const [activeTypes, setActiveTypes] = useState<ActiveTypes>({
    upper: true,
    lower: true,
    number: true,
    symbol: true,
  });

  useEffect(() => {
    setResultOutput(initState.resultOutput);
    setPassLenght(initState.passLenght);
    setActiveTypes(initState.activeTypes);
  }, []);

  const handleGeneratePassClick = () => {
    const typesArr = createTypesArr(activeTypes).filter(
      (item) => Object.values(item)[0],
    );
    const typesCount = countTypes(activeTypes);
    const randomFunc = passwordTypes(
      [getRandomUpper, getRandomLower, getRandomNumber, getRandomSymbol],
      activeTypes,
    );

    if (typesCount === 0) {
      setResultOutput('');
    } else {
      const newPass = createPassword(
        4,
        20,
        passLenght,
        typesCount,
        typesArr,
        randomFunc,
      );

      setResultOutput(newPass);
    }
  };

  const handleCopyToClipBoardClick = () => {
    if (resultOutput) navigator.clipboard.writeText(resultOutput);
  };

  return (
    <>
      <Head>
        <title>Password Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Muli"
          rel="stylesheet"
        />
      </Head>
      <ComponentStyles.Wrapper>
        <div className="container">
          <h2>Password Generator</h2>
          <div className="result-container">
            <span id="result">{resultOutput}</span>
            <button
              title="Copy to clipboard"
              type="button"
              className="btn"
              id="clipboard"
              onClick={handleCopyToClipBoardClick}
            >
              <i className="far fa-clipboard" />
            </button>
          </div>
          <div className="settings">
            <div className="setting">
              <label htmlFor="length">Password Length</label>
              <input
                type="number"
                id="length"
                min="4"
                max="20"
                value={passLenght}
                onChange={(e) => setPassLenght(e.currentTarget.value)}
              />
            </div>
            <div className="setting">
              <label htmlFor="uppercase">Include uppercase letters</label>
              <input
                type="checkbox"
                id="uppercase"
                checked={activeTypes.upper}
                onChange={() =>
                  setActiveTypes({ ...activeTypes, upper: !activeTypes.upper })
                }
              />
            </div>
            <div className="setting">
              <label htmlFor="lowercase">Include lowercase letters</label>
              <input
                type="checkbox"
                id="lowercase"
                checked={activeTypes.lower}
                onChange={() =>
                  setActiveTypes({ ...activeTypes, lower: !activeTypes.lower })
                }
              />
            </div>
            <div className="setting">
              <label htmlFor="numbers">Include numbers</label>
              <input
                type="checkbox"
                id="numbers"
                checked={activeTypes.number}
                onChange={() =>
                  setActiveTypes({
                    ...activeTypes,
                    number: !activeTypes.number,
                  })
                }
              />
            </div>
            <div className="setting">
              <label htmlFor="symbols">Include symbols letters</label>
              <input
                type="checkbox"
                id="symbols"
                checked={activeTypes.symbol}
                onChange={() =>
                  setActiveTypes({
                    ...activeTypes,
                    symbol: !activeTypes.symbol,
                  })
                }
              />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-large"
            id="generate"
            onClick={handleGeneratePassClick}
          >
            Generate Password
          </button>
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
