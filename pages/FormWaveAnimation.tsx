/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import styles from '../styles/FormWaveAnimation.module.css';

const { mainContainer, container, formControl, btn, text } = styles;

export default function FormWaveAnimation(): JSX.Element {
  const emailLabelRef = useRef<HTMLLabelElement>(null);
  const passLabelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const emailLabel = emailLabelRef.current;
    const passLabel = passLabelRef.current;
    if (emailLabel && passLabel) {
      const labels = [];
      labels.push(emailLabel, passLabel);
      labels.forEach((label) => {
        // eslint-disable-next-line no-param-reassign
        label.innerHTML = label.innerText
          .split('')
          .map(
            (letter, i) =>
              `<span style="transition-delay:${i * 30}ms" >${letter}</span>`,
          )
          .join('');
      });
    }
  });

  return (
    <>
      <Head>
        <title>Form Wave Animation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <div className={container}>
          <h1>Please Login</h1>
          <form>
            <div className={formControl}>
              <input type="text" required />
              <label ref={emailLabelRef}>Email</label>
            </div>
            <div className={formControl}>
              <input type="password" required />
              <label ref={passLabelRef}>Password</label>
            </div>
            <button type="button" className={btn}>
              Login
            </button>
            <p className={text}>
              D`ont have an account?
              <a href="#"> Register</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
