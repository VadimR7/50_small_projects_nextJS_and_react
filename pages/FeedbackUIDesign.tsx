import Head from 'next/head';
import { useState } from 'react';
import { fontAwsome, googleFonts } from '../helpers/externalLinks';
import ComponentStyles from '../styles/FeedbackUIDesignStyle';

const ratings = [
  {
    id: '0',
    src: 'https://image.flaticon.com/icons/svg/187/187150.svg',
    text: 'Unhappy',
  },
  {
    id: '1',
    src: 'https://image.flaticon.com/icons/svg/187/187136.svg',
    text: 'Neutral',
  },
  {
    id: '2',
    src: 'https://image.flaticon.com/icons/svg/187/187133.svg',
    text: 'Satisfied',
  },
];

export default function FeedbackUIDesign(): JSX.Element {
  const [isActive, setIsActive] = useState('2');
  const [activeText, setActiveText] = useState(ratings[2].text);
  const [reviewPanelIsActive, setReviewPanelIsActive] = useState(true);

  return (
    <>
      <Head>
        <title>Feedback UI Design</title>
        <link rel="icon" href="/favicon.ico" />
        {fontAwsome}
        {googleFonts('Montserrat')}
      </Head>
      <ComponentStyles.Wrapper>
        <div className="panel-container">
          {reviewPanelIsActive ? (
            <>
              <strong>
                How satisfied are you with our <br /> customer support
                performance?
              </strong>
              <div className="ratings-container">
                {ratings.map((rating) => (
                  <div
                    aria-hidden
                    onClick={() => {
                      setIsActive(rating.id);
                      setActiveText(rating.text);
                    }}
                    className={
                      isActive === rating.id ? 'rating active' : 'rating'
                    }
                    key={rating.id}
                  >
                    <img src={rating.src} alt="" />
                    <small>{rating.text}</small>
                  </div>
                ))}
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => setReviewPanelIsActive(false)}
              >
                Send Review
              </button>
            </>
          ) : (
            <>
              <i className="fas fa-heart" />
              <strong>Thank You!</strong>
              <br />
              <strong>{`Feedback: ${activeText}`}</strong>
              <p>
                We&apos;ll use your feedback to improve our customer support
              </p>
            </>
          )}
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
