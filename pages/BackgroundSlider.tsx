/* eslint-disable react/no-array-index-key */
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/BackgroundSlider.module.css';

const {
  mainContainer,
  sliderContainer,
  slide,
  active,
  rightArrow,
  leftArrow,
  arrow,
} = styles;

const activeBackgroundImage = [
  {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)',
  },
  {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80)',
  },
  {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)',
  },
  {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80)',
  },
  {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)',
  },
];

export default function BackgroundSlider(): JSX.Element {
  const [activeImage, setActiveImage] = useState(0);
  const conainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = conainerRef.current;
    if (container) {
      container.style.backgroundImage =
        activeBackgroundImage[activeImage].backgroundImage;
    }
  }, [activeImage]);

  const handleRightArrow = () => {
    if (activeImage >= activeBackgroundImage.length - 1) {
      setActiveImage(0);
      return;
    }

    setActiveImage((prevImage) => prevImage + 1);
  };

  const handleLeftArrow = () => {
    if (activeImage === 0) {
      setActiveImage(activeBackgroundImage.length - 1);
      return;
    }

    setActiveImage((prevImage) => prevImage - 1);
  };

  return (
    <>
      <Head>
        <title>Background Slider</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossOrigin="anonymous"
        />
      </Head>
      <div className={mainContainer} ref={conainerRef}>
        <div className={sliderContainer}>
          {activeBackgroundImage.map((image, index) => (
            <span key={index}>
              <div
                className={`${slide} ${index === activeImage && active}`}
                style={image}
              />
              <button
                type="button"
                className={`${arrow} ${leftArrow}`}
                onClick={() => handleLeftArrow()}
              >
                <i className="fas fa-arrow-left" />
              </button>
              <button
                type="button"
                className={`${arrow} ${rightArrow}`}
                onClick={() => handleRightArrow()}
              >
                <i className="fas fa-arrow-right" />
              </button>
            </span>
          ))}

          <div
            className={`${slide}`}
            style={activeBackgroundImage[activeImage]}
          />
          <button
            type="button"
            className={`${arrow} ${leftArrow}`}
            onClick={() => handleLeftArrow()}
          >
            <i className="fas fa-arrow-left" />
          </button>
          <button
            type="button"
            className={`${arrow} ${rightArrow}`}
            onClick={() => handleRightArrow()}
          >
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </>
  );
}
