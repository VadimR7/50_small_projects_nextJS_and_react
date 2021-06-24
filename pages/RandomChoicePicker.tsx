import Head from 'next/head';
import {
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
  RefObject,
  createRef,
} from 'react';
import styles from '../styles/RandomChoicePicker.module.css';

const { mainContainer, container, textarea, tag, tags, highlight } = styles;

export default function RandomChoicePicker(): JSX.Element {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [tagsToDisplay, setTagsTodisplay] =
    useState<JSX.Element[] | null>(null);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const spanTagRefs = useRef<(RefObject<HTMLSpanElement> | null)[]>([]);

  const handleKeyUp = (e: KeyboardEvent) => {
    const getRandomIndex = (array: Array<JSX.Element>) => {
      const tagIndex = Math.floor(Math.random() * array.length);
      return tagIndex;
    };
    const textArea = textAreaRef.current;
    const spanTag = spanTagRefs.current;
    if (e.key === 'Enter') {
      if (textArea) {
        textArea.value = '';
      }
      if (spanTag && tagsToDisplay) {
        const interval = setInterval(() => {
          const tagIndex = getRandomIndex(tagsToDisplay);
          spanTag.forEach((item, index) => {
            if (index === tagIndex) {
              item?.current?.classList.add(`${highlight}`);

              setTimeout(() => {
                item?.current?.classList.remove(`${highlight}`);
              }, 100);
            }
          });
        }, 100);
        setTimeout(() => {
          clearInterval(interval);
          setTimeout(() => {
            const randomIndex = getRandomIndex(tagsToDisplay);
            spanTag.forEach((item, index) => {
              if (index === randomIndex) {
                item?.current?.classList.add(`${highlight}`);
              }
            });
          }, 100);
        }, 3000);
      }
    }
  };

  useEffect(() => {
    const areaValues = textAreaValue
      .split(',')
      .filter((value) => value.trim() !== '')
      .map((value) => value.trim());

    spanTagRefs.current = areaValues.map(
      // eslint-disable-next-line no-return-assign
      (_ref, index) =>
        (spanTagRefs.current[index] = createRef<HTMLSpanElement>()),
    );

    const spanTags = areaValues.map((value, index) => (
      <span
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        className={tag}
        ref={spanTagRefs.current[index]}
      >
        {value}
      </span>
    ));

    if (spanTags.length > 0) {
      setTagsTodisplay(spanTags);
    } else {
      setTagsTodisplay(null);
    }
  }, [textAreaValue]);

  return (
    <>
      <Head>
        <title>Random Choice Picker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <div className={container}>
          <h3>
            Enter all of the choices divided by a comma (&apos; , &apos;)
            <br /> Press enter when you are done
          </h3>
          <textarea
            placeholder="Enter choices here..."
            name=""
            id={textarea}
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.currentTarget.value)}
            onKeyUp={(e) => handleKeyUp(e)}
            ref={textAreaRef}
          />
          <div id={tags}>{tagsToDisplay && tagsToDisplay}</div>
        </div>
      </div>
    </>
  );
}
