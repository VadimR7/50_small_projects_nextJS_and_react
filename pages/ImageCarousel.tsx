import Head from 'next/head';
import { useEffect, useState } from 'react';
import ComponentStyles from '../styles/ImageCarouselStyle';

type AppState = {
  transform: string;
};

const images = [
  'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80',
  'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80',
];

export default function ImageCarousel(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIntervalTransfrom, setImageIntervalTransfrom] =
    useState<AppState>({
      transform: `translateX(${activeIndex * -500}px)`,
    });

  useEffect(() => {
    const changeImage = () => {
      if (activeIndex >= images.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prevState) => prevState + 1);
      }
    };

    setImageIntervalTransfrom({
      transform: `translateX(${activeIndex * -500}px)`,
    });

    const interval = setInterval(() => {
      changeImage();
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrevClick = () => {
    if (activeIndex <= 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex((prevState) => prevState - 1);
    }
  };

  const handleNextClick = () => {
    if (activeIndex >= images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prevState) => prevState + 1);
    }
  };

  return (
    <>
      <Head>
        <title>Image Carousel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComponentStyles.Wrapper>
        <div className="carousel">
          <div
            className="image-container"
            id="imgs"
            style={imageIntervalTransfrom}
          >
            {images.map((image, idx) => (
              <img
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                src={image}
                alt="first"
              />
            ))}
          </div>

          <div className="buttons-container">
            <button type="button" className="btn" onClick={handlePrevClick}>
              Prev
            </button>
            <button type="button" className="btn" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
