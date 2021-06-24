import { useLayoutEffect, useRef, createRef, RefObject } from 'react';
import Head from 'next/head';
import styles from '../styles/ScrollAnimation.module.css';

const numberOfElemets = 8;
const contentArr: Array<number> = Array.from(
  Array(numberOfElemets + 1).keys(),
).slice(1);

const { boxes, show, scrollAnimationBody, mainContainer } = styles;

export default function ScrollAnimation(): JSX.Element {
  const contentRefs = useRef<(RefObject<HTMLDivElement> | null)[]>([]);

  contentRefs.current = contentArr.map(
    // eslint-disable-next-line no-return-assign
    (_ref, index) => (contentRefs.current[index] = createRef<HTMLDivElement>()),
  );

  useLayoutEffect(() => {
    function checkBoxes() {
      const triggerBottom = (window.innerHeight / 5) * 4.5;
      contentRefs.current.forEach((box) => {
        const boxTop = box?.current?.getBoundingClientRect().top;

        if (boxTop) {
          if (boxTop < triggerBottom) {
            box?.current?.classList.add(`${show}`);
          } else {
            box?.current?.classList.remove(`${show}`);
          }
        }
      });
    }

    window.addEventListener('scroll', checkBoxes);
    document.querySelector('body')?.classList.add(`${scrollAnimationBody}`);
    checkBoxes();

    return () => {
      window.removeEventListener('scroll', checkBoxes);
      document
        .querySelector('body')
        ?.classList.remove(`${scrollAnimationBody}`);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Scroll Animation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <h1>Scroll to see the animation</h1>
        {contentArr.map((item, index) => (
          <div className={boxes} key={item} ref={contentRefs.current[index]}>
            <h2>Content #{item}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
