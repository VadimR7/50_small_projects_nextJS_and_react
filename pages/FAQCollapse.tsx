import Head from 'next/head';
import { ReactNodeArray } from 'prop-types';
import { useState } from 'react';
import styles from '../styles/FAQCollapse.module.css';

const {
  mainContainer,
  faq,
  active,
  faqTitle,
  faqToggle,
  faqText,
  faqContainer,
  faTimes,
  faDown,
} = styles;

const data = [
  { title: 'Why should not we trust atoms?', text: 'They make up everything' },
  {
    title: 'What do you call someone with no body and no nose?',
    text: 'Nobody knows.',
  },
  {
    title: ' What is the object-oriented way to become wealthy?',
    text: 'Inheritance.',
  },
  {
    title: 'How many tickles does it take to tickle an octopus?',
    text: 'Ten-tickles!',
  },
  { title: 'What is: 1 + 1?', text: 'Depends on who are you asking.' },
];

export default function FAQCollapse(): JSX.Element {
  const [activeBoxes, setActiveBoxes] = useState<ReactNodeArray>([]);

  // const handleButtonClick = () => {
  //   return null
  // }

  const handleBoxOpen = (i: number) => {
    setActiveBoxes([...activeBoxes, i]);
  };

  const handleBoxClose = (i: number) => {
    setActiveBoxes(activeBoxes.filter((box) => box !== i));
  };

  return (
    <>
      <Head>
        <title>FAQ Collapse</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossOrigin="anonymous"
        />
      </Head>
      <div className={mainContainer}>
        <h1>Frequently asked questions</h1>
        <div className={faqContainer}>
          {data.map((box, index) => (
            <div
              className={`${faq} ${activeBoxes.includes(index) && active}`}
              key={box.title}
            >
              <h3 className={faqTitle}>{box.title}</h3>
              <p className={faqText}>{box.text}</p>
              <div className={faqToggle}>
                <button
                  type="button"
                  className={faDown}
                  onClick={() => handleBoxOpen(index)}
                >
                  <i className="fas fa-chevron-down" />
                </button>
                <button
                  type="button"
                  className={faTimes}
                  onClick={() => handleBoxClose(index)}
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
