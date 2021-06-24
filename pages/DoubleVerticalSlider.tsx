import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/DoubleVerticalSlider.module.css';

const {
  mainContainer,
  sliderContainer,
  leftSlide,
  rightSlide,
  downBtn,
  upBtn,
  actionButtons,
} = styles;

const slidesWithBGImage = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80',
  },
];

const slidesWithText = [
  {
    id: '4',
    bgColor: '#FD3555',
    h1Text: 'Nature flower',
    pText: 'all in pink',
  },
  {
    id: '3',
    bgColor: '#2A86BA',
    h1Text: 'Bluuue Sky',
    pText: 'with it&apos;s mountains',
  },
  {
    id: '2',
    bgColor: '#252E33',
    h1Text: 'Lonely castle',
    pText: 'in the wilderness',
  },
  {
    id: '1',
    bgColor: '#FFB866',
    h1Text: 'Flying eagle',
    pText: 'in the sunset',
  },
];

const slidesLength = slidesWithText.length;
const leftSlideTopPosition = { top: `-${(slidesLength - 1) * 100}vh` };

export default function DoubleVerticalSlider(): JSX.Element {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const sliderContainerRef = useRef<HTMLDivElement | null>(null);
  const leftSlideRef = useRef<HTMLDivElement | null>(null);
  const rightSlideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function changeSlideDirection() {
      const sliderContainerHeight = sliderContainerRef.current?.clientHeight;
      const leftSlideDiv = leftSlideRef.current;
      const rightSlideDiv = rightSlideRef.current;

      if (rightSlideDiv && sliderContainerHeight && leftSlideDiv) {
        rightSlideDiv.style.transform = `translateY(-${
          activeSlideIndex * sliderContainerHeight
        }px)`;
        leftSlideDiv.style.transform = `translateY(${
          activeSlideIndex * sliderContainerHeight
        }px)`;
      }
    }
    changeSlideDirection();
  }, [activeSlideIndex]);

  const handleUpClick = () => {
    let newActiveSlide = activeSlideIndex + 1;
    if (newActiveSlide > slidesLength - 1) {
      newActiveSlide = 0;
    }
    setActiveSlideIndex(newActiveSlide);
  };

  const handleDownClick = () => {
    let newActiveSlide = activeSlideIndex - 1;
    if (newActiveSlide < 0) {
      newActiveSlide = slidesLength - 1;
    }
    setActiveSlideIndex(newActiveSlide);
  };

  return (
    <>
      <Head>
        <title>Double Vertical Slider</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>
      <div className={mainContainer}>
        <div className={sliderContainer} ref={sliderContainerRef}>
          <div
            className={leftSlide}
            style={leftSlideTopPosition}
            ref={leftSlideRef}
          >
            {slidesWithText.map((slide) => (
              <div
                key={slide.id}
                style={{ backgroundColor: `${slide.bgColor}` }}
              >
                <h1>{slide.h1Text}</h1>
                <p>{slide.pText}</p>
              </div>
            ))}
          </div>
          <div className={rightSlide} ref={rightSlideRef}>
            {slidesWithBGImage.map((slide) => (
              <div
                key={slide.id}
                style={{
                  backgroundImage: `url(${slide.url})`,
                }}
              />
            ))}
          </div>
          <div className={actionButtons}>
            <button type="button" className={downBtn} onClick={handleDownClick}>
              <i className="fas fa-arrow-down" />
            </button>
            <button type="button" className={upBtn} onClick={handleUpClick}>
              <i className="fas fa-arrow-up" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
