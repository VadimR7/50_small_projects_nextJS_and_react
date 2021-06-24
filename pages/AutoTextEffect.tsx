import Head from 'next/head';
import { FormEvent, useEffect, useState } from 'react';
import ComponentStyles from '../styles/AutoTextEffectStyle';

const displayedText = 'I love programming!';

export default function AutoTextEffect(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [textToType, setTextToType] = useState(displayedText);
  const [letterIndex, setLetterIndex] = useState(1);
  const [speed, setSpeed] = useState<string>('1');
  const [text, setText] = useState('');

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTextToType(inputValue);
    setInputValue('');
    setLetterIndex(1);
  };

  useEffect(() => {
    const letter = textToType.slice(0, letterIndex);
    setText(letter);
    const timer1 = setTimeout(() => {
      setLetterIndex((prev) => prev + 1);
    }, 300 / Number(speed));

    if (letterIndex > textToType.length) {
      setLetterIndex(1);
      setText('');
    }

    return () => clearTimeout(timer1);
  }, [letterIndex, speed, textToType]);

  return (
    <>
      <Head>
        <title>Auto Text Effect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComponentStyles.Wrapper>
        <h1 id="text">{text}</h1>
        <div className="input-text">
          <form onSubmit={(e) => handleOnSubmit(e)}>
            <input
              value={inputValue}
              type="text"
              name="textInput"
              id="input-text"
              placeholder="Input text to see it"
              onChange={(e) => setInputValue(e.currentTarget.value)}
            />
          </form>
        </div>
        <div className="speed">
          <label htmlFor="speed">
            Speed:
            <input
              value={speed}
              name="speed"
              type="number"
              id="speed"
              min="1"
              max="5"
              step="1"
              onChange={(e) => setSpeed(e.currentTarget.value)}
            />
          </label>
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
