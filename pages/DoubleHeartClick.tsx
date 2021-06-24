import Head from 'next/head';
import { useState } from 'react';
import ComponentStyles from '../styles/DoubleHeartClickStyle';

type HeartProps = {
  style:
    | {
        top: string;
        left: string;
      }
    | undefined;
  show: boolean;
};

export default function DoubleHeartClick(): JSX.Element {
  const [showHeart, setShowHeart] = useState<HeartProps>({
    style: undefined,
    show: false,
  });
  const [clickedTime, setClickedTime] = useState(0);
  const [likedTimes, setLikedTimes] = useState(0);

  const handleLikeClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (clickedTime === 0) {
      setClickedTime(() => new Date().getTime());
    } else {
      if (new Date().getTime() - clickedTime < 400) {
        const leftPosition = `${
          e.clientX - e.currentTarget.getBoundingClientRect().left
        }px`;
        const topPosition = `${
          e.clientY - e.currentTarget.getBoundingClientRect().top
        }px`;
        const newHeartShow = {
          style: {
            top: topPosition,
            left: leftPosition,
          },
          show: true,
        };
        setShowHeart(() => newHeartShow);
        setTimeout(() => {
          const newHeartHide = { style: undefined, show: false };
          setShowHeart(() => newHeartHide);
        }, 600);
        setLikedTimes((prev) => prev + 1);
      }
      setClickedTime(() => new Date().getTime());
    }
  };

  return (
    <>
      <Head>
        <title>Double Heart Click</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald"
          rel="stylesheet"
        />
      </Head>
      <ComponentStyles.Wrapper>
        <h3>
          Double click on the image to <i className="fas fa-heart" /> it
        </h3>
        <small>
          You liked it <span id="times">{likedTimes}</span> times
        </small>
        <div className="loveMe" onClick={handleLikeClick} aria-hidden="true">
          {showHeart.show && (
            <i
              className="fas fa-heart"
              style={showHeart.style && showHeart.style}
            />
          )}
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
