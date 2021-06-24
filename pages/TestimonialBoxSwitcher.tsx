import Head from 'next/head';
import { useEffect, useState } from 'react';
import { fontAwsome, googleFonts } from '../helpers/externalLinks';
import ComponentStyles from '../styles/TestimonialBoxSwitcherStyle';
import testimonialData from '../helpers/testimonialData';

// Set Testimonial Switch delay in ms
const testimonialDelay = 10000;

export default function TestimonialBoxSwitcher(): JSX.Element {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const activeTestimonialData = testimonialData[activeTestimonial];

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeTestimonial >= testimonialData.length - 1) {
        setActiveTestimonial(0);
      } else {
        setActiveTestimonial((prevState) => prevState + 1);
      }
    }, testimonialDelay);

    return () => clearInterval(interval);
  }, [activeTestimonial]);

  return (
    <>
      <Head>
        <title>Testimonial Box Switcher</title>
        <link rel="icon" href="/favicon.ico" />
        {fontAwsome}
        {googleFonts('Montserrat')}
      </Head>
      <ComponentStyles.Wrapper>
        <div className="testimonial-container">
          <div
            className="progress-bar"
            style={{
              animation: `grow ${testimonialDelay / 1000}s linear infinite`,
            }}
          />
          <div className="fas fa-quote-right fa-quote" />
          <div className="fas fa-quote-left fa-quote" />
          <p className="testimonial">{activeTestimonialData.text}</p>
          <div className="user">
            <img
              className="user-image"
              src={activeTestimonialData.photo}
              alt=""
            />
            <div className="user-details">
              <h4 className="username">{activeTestimonialData.name}</h4>
              <p className="role">{activeTestimonialData.position}</p>
            </div>
          </div>
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
