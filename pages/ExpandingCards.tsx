import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/ExpandingCards.module.css';

type ImagePanel = Array<{
  title: string;
  backgroundImage: {
    backgroundImage: string;
  };
}>;

const imagePanels: ImagePanel = [
  {
    title: 'Explore The World',
    backgroundImage: {
      backgroundImage:
        'url("https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
    },
  },
  {
    title: 'Wild Forest',
    backgroundImage: {
      backgroundImage:
        'url("https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
    },
  },
  {
    title: 'Sunny Beach',
    backgroundImage: {
      backgroundImage:
        'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80")',
    },
  },
  {
    title: 'City on Winter',
    backgroundImage: {
      backgroundImage:
        'url("https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80")',
    },
  },
  {
    title: 'Mountains - Clouds',
    backgroundImage: {
      backgroundImage:
        'url("https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
    },
  },
];

const { panel, active, container, mainContainer } = styles;

export default function ExpandingCards(): JSX.Element {
  const [activeDiv, setActiveDiv] = useState(0);

  const toggleClass = (index: number) => {
    setActiveDiv(index);
  };

  return (
    <>
      <Head>
        <title>Expanding Cards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <div className={container}>
          {imagePanels.map((item, i) => (
            <div
              aria-hidden="true"
              className={activeDiv === i ? `${active} ${panel}` : `${panel}`}
              style={item.backgroundImage}
              key={item.title}
              onClick={() => toggleClass(i)}
            >
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
