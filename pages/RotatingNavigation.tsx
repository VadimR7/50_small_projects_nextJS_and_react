import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/RotatingNavigation.module.css';

const {
  container,
  showNav,
  circleContainer,
  circle,
  content,
  rotatingNavigationgBody,
  rotatingNavigationgNextDiv,
  open,
  close,
  navigation,
} = styles;

export default function RotatingNavigation(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    document.querySelector('body')?.classList.add(`${rotatingNavigationgBody}`);
    document
      .querySelector('#__next')
      ?.classList.add(`${rotatingNavigationgNextDiv}`);
  }, []);

  return (
    <>
      <Head>
        <title>Rotating Navigation</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossOrigin="anonymous"
        />
      </Head>
      <div className={isOpened ? `${container} ${showNav}` : `${container}`}>
        <div className={circleContainer}>
          <div className={circle}>
            <button type="button" id={close} onClick={() => setIsOpened(false)}>
              <i className="fas fa-times">{null}</i>
            </button>
            <button id={open} type="button" onClick={() => setIsOpened(true)}>
              <i className="fas fa-bars">{null}</i>
            </button>
          </div>
        </div>
        <div className={content}>
          <h1>Amazing Article</h1>
          <small>Florin Pop</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quia in ratione dolores cupiditate, maxime aliquid impedit dolorem
            nam dolor omnis atque fuga labore modi veritatis porro laborum
            minus, illo, maiores recusandae cumque ipsa quos. Tenetur,
            consequuntur mollitia labore pariatur sunt quia harum aut. Eum
            maxime dolorem provident natus veritatis molestiae cumque quod
            voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa.
            Corrupti, laudantium iure aliquam rerum sint nam quas dolor
            dignissimos in error placeat quae temporibus minus optio eum soluta
            cupiditate! Cupiditate saepe voluptates laudantium. Ducimus
            consequuntur perferendis consequatur nobis exercitationem molestias
            fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
          </p>

          <h3>My Dog</h3>
          <img
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt="doggy"
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
            deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
            facere earum unde harum. Ea culpa veritatis magnam at aliquid.
            Perferendis totam placeat molestias illo laudantium? Minus id minima
            doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
            temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
            explicabo provident. Voluptates sint, neque fuga cum illum, tempore
            autem maxime similique laborum odio, magnam esse. Aperiam?
          </p>
        </div>
      </div>
      <div className={navigation}>
        <ul>
          <li>
            <i className="fas fa-home"> </i>
            Home
          </li>
          <li>
            <i className="fas fa-user-alt"> </i>
            About
          </li>
          <li>
            <i className="fas fa-envelope"> </i>
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}
