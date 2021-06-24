import Head from 'next/head';
import { KeyboardEvent, useEffect, useRef } from 'react';
import ComponentStyles from '../styles/VerifyAccountUIStyle';
import { googleFonts } from '../helpers/externalLinks';

const numOfInputs = 6;

const createArr = (num: number) => {
  const arr = [];
  for (let i = 0; i < num; i += 1) {
    arr.push({ id: i });
  }
  return arr;
};

const inputs = createArr(numOfInputs);

export default function VerifyAccountUI(): JSX.Element {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputKeyPressed = (
    e: KeyboardEvent<HTMLInputElement>,
    id: number,
  ) => {
    const num = Number(e.key);
    if (num >= 0 && num <= 9) {
      inputRefs.current[id].value = '';
      setTimeout(() => inputRefs.current[id + 1]?.focus(), 10);
    } else if (e.key === 'Backspace') {
      setTimeout(() => inputRefs.current[id - 1]?.focus(), 10);
    }
  };

  return (
    <>
      <Head>
        <title>Verify Account UI</title>
        <link rel="icon" href="/favicon.ico" />
        {googleFonts('Muli', 300, 700)}
      </Head>
      <ComponentStyles.Wrapper>
        <div className="container">
          <h2>Verify Your Account</h2>
          <p>
            We emailed you the six digit code to cool_guy@email.com <br /> Enter
            the code below to confirm your email address.
          </p>
          <div className="code-container">
            {inputs.map((input, idx) => (
              <input
                key={input.id}
                ref={(item) => {
                  if (item) inputRefs.current.push(item);
                }}
                onKeyDown={(e) => handleInputKeyPressed(e, idx)}
                type="number"
                className="code"
                placeholder="0"
                min="0"
                max="9"
              />
            ))}
          </div>
          <small className="info">
            This is design only. We didn&apos;t actually send you an email as we
            don&apos;t have your email, right?
          </small>
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
