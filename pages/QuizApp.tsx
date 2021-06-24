/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import { useState } from 'react';
import { googleFonts } from '../helpers/externalLinks';
import ComponentStyles from '../styles/QuizAppStyle';

const quizData = [
  {
    question: 'Which language runs in a web browser?',
    variants: [
      {
        variant: 'Java',
        correct: false,
      },
      {
        variant: 'C',
        correct: false,
      },
      {
        variant: 'Python',
        correct: false,
      },
      {
        variant: 'JavaScript',
        correct: true,
      },
    ],
  },
  {
    question: 'What does CSS stand for?',
    variants: [
      {
        variant: 'Central Style Sheets',
        correct: false,
      },
      {
        variant: 'Cascading Style Sheets',
        correct: true,
      },
      {
        variant: 'Cascading Simple Sheets',
        correct: false,
      },
      {
        variant: 'Cars SUVs Sailboats',
        correct: false,
      },
    ],
  },
  {
    question: 'What does HTML stand for?',
    variants: [
      {
        variant: 'Hypertext Markup Language',
        correct: true,
      },
      {
        variant: 'Hypertext Markdown Language',
        correct: false,
      },
      {
        variant: 'Hyperloop Machine Language',
        correct: false,
      },
      {
        variant: 'Helicopters Terminals Motorboats Lamborginis',
        correct: false,
      },
    ],
  },
  {
    question: 'What year was JavaScript launched?',
    variants: [
      {
        variant: '1996',
        correct: false,
      },
      {
        variant: '1995',
        correct: true,
      },
      {
        variant: '1994',
        correct: false,
      },
      {
        variant: 'none of the above',
        correct: false,
      },
    ],
  },
];

const inputCheckInitState = { checked: false, index: 0 };

const initState = {
  activeQuestionBlock: 0,
  isChecked: inputCheckInitState,
  finalScore: 0,
  showFinalScore: false,
};

export default function QuizApp(): JSX.Element {
  const [activeQuestionBlock, setActiveQuestionBlock] = useState(0);
  const [isChecked, setIsChecked] = useState(inputCheckInitState);
  const [finalScore, setFinalScore] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const activeQuiz = quizData[activeQuestionBlock];

  const handleSubmitClicked = () => {
    if (isChecked.checked) {
      if (activeQuestionBlock < quizData.length - 1) {
        setActiveQuestionBlock((prevState) => prevState + 1);
        if (activeQuiz.variants[isChecked.index].correct) {
          setFinalScore((prevScore) => prevScore + 1);
        }
        setIsChecked(inputCheckInitState);
      } else {
        if (activeQuiz.variants[isChecked.index].correct) {
          setFinalScore((prevScore) => prevScore + 1);
        }
        setShowFinalScore(true);
      }
    }
  };

  const handleInputChanged = (id: number) => {
    setIsChecked({ checked: true, index: id });
  };

  const handleReloadButtonClicked = () => {
    setActiveQuestionBlock(initState.activeQuestionBlock);
    setIsChecked(initState.isChecked);
    setFinalScore(initState.finalScore);
    setShowFinalScore(initState.showFinalScore);
  };

  return (
    <>
      <Head>
        <title>Quiz App</title>
        <link rel="icon" href="/favicon.ico" />
        {googleFonts('Poppins', 200, 400)}
      </Head>
      <ComponentStyles.Wrapper>
        {showFinalScore ? (
          <div className="quiz-container">
            <h2>{`You answered ${finalScore}/${quizData.length} questions correctly`}</h2>
            <button type="button" onClick={handleReloadButtonClicked}>
              Reload
            </button>
          </div>
        ) : (
          <div className="quiz-container">
            <div className="quiz-header">
              <h2>{activeQuiz.question}</h2>
              <ul>
                {activeQuiz.variants.map((variant, idx) => (
                  <li key={variant.variant}>
                    <input
                      checked={isChecked.index === idx && isChecked.checked}
                      type="radio"
                      name="answer"
                      id={variant.variant}
                      className="answer"
                      onChange={() => handleInputChanged(idx)}
                    />
                    <label htmlFor={variant.variant}>{variant.variant}</label>
                  </li>
                ))}
              </ul>
            </div>
            <button type="button" onClick={handleSubmitClicked}>
              Submit
            </button>
          </div>
        )}
      </ComponentStyles.Wrapper>
    </>
  );
}
