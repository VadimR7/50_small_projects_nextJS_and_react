import Head from 'next/head';
import { useEffect, useLayoutEffect, useState } from 'react';
import ComponentStyles from '../styles/PasswordStrengthBackgroundStyle';
import { tailWind } from '../helpers/externalLinks';

const initBlurValue = 20;

export default function PasswordStrengthBackground(): JSX.Element {
  const [password, setPassword] = useState('');
  const [blurValue, setBlurValue] = useState(initBlurValue);

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const passwordLength = password.length;
    let newValue = initBlurValue - passwordLength;
    if (newValue < 1) newValue = 0;
    setBlurValue(newValue);
  }, [password]);

  return (
    <>
      <Head>
        <title>Password Strength Background</title>
        <link rel="icon" href="/favicon.ico" />
        {tailWind}
      </Head>
      <ComponentStyles.Wrapper>
        <div
          className="background"
          style={{ filter: `blur(${blurValue}px)` }}
        />
        <div className="bg-white rounded p-10 text-center shadow-md">
          <h1 className="text-3xl">Image Password Strength</h1>
          <p className="text-sm text-gray-700">
            Change the password to see the effect
          </p>
          <div className="my-4 text-left">
            <label htmlFor="email" className="text-gray-900">
              Email:
              <input
                type="text"
                className="border block w-full p-2 mt-2 rounded"
                placeholder="Enter Email"
              />
            </label>
          </div>
          <div className="my-4 text-left">
            <label htmlFor="email" className="text-gray-900">
              Password:
              <input
                type="password"
                className="border block w-full p-2 mt-2 rounded"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </label>
          </div>
          <button
            className="bg-black text-white py-2 mt-4 inline-block w-full rounded "
            type="submit"
          >
            Submit
          </button>
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
