import Head from 'next/head';
import { useState } from 'react';
import ComponentStyles from '../styles/MobileTabNavigationStyle';
import { fontAwsome, googleFonts } from '../helpers/externalLinks';

const links = [
  { icon: 'fa-home', text: 'Home' },
  { icon: 'fa-box', text: 'Work' },
  { icon: 'fa-book-open', text: 'Blog' },
  { icon: 'fa-users', text: 'About us' },
];

const images = [
  {
    id: 0,
    src: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
    alt: 'about',
  },
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    alt: 'blog',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
    alt: 'work',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    alt: 'about',
  },
];

export default function MobileTabNavigation(): JSX.Element {
  const [isActive, setIsActive] = useState(0);
  const [imageIsShown, setIsShown] = useState(0);

  const handleLinkClicked = (id: number) => {
    setIsActive(id);
    setIsShown(id);
  };

  return (
    <>
      <Head>
        <title>Mobile Tab Navigation</title>
        <link rel="icon" href="/favicon.ico" />
        {fontAwsome}
        {googleFonts('Open+Sans')}
      </Head>
      <ComponentStyles.Wrapper>
        <div className="phone">
          {images.map((img, idx) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className={imageIsShown === idx ? 'content show' : 'content'}
            />
          ))}
          <nav>
            <ul>
              {links.map((link, idx) => (
                <li
                  className={isActive === idx ? 'active' : undefined}
                  aria-hidden
                  key={link.text}
                  onClick={() => handleLinkClicked(idx)}
                >
                  <i className={`fas ${link.icon}`} />
                  <p>{link.text}</p>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
