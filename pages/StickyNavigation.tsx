/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/StickyNavigation.module.css';

const { mainContainer, container, active, nav, logo, hero, content, current } =
  styles;

export default function StickyNavigation(): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  const navBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const navBar = navBarRef.current;
    const fixNav = () => {
      if (navBar)
        if (window.scrollY > navBar.offsetHeight + 150) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
    };
    window.addEventListener('scroll', fixNav);

    return () => window.removeEventListener('scroll', fixNav);
  }, []);

  return (
    <>
      <Head>
        <title>Sticky Navigation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <div className={`${nav} ${isActive && active}`} ref={navBarRef}>
          <div className={container}>
            <h1 className={logo}>
              <a href="/StickyNavigation">My website</a>
            </h1>

            <ul>
              <li>
                <a href="#" className={current}>
                  Home
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={hero}>
          <div className={container}>
            <h1>Welcome to my website</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
              mollitia!
            </p>
          </div>
        </div>
        <div className={`${container} ${content}`}>
          <h2>Content1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsa,
            qui maxime ratione soluta fugiat porro, dignissimos sint a magnam
            nulla doloribus sapiente. Dolor excepturi ut saepe ad consequuntur
            distinctio sequi perferendis maxime, nam sed iure quam possimus
            accusamus eligendi blanditiis, tenetur adipisci praesentium ipsa,
            odio eos? Quibusdam, ipsum enim veritatis recusandae voluptatem
            iusto magnam quo corrupti? Doloremque, excepturi non similique
            recusandae expedita eveniet iure veniam consequuntur a ut itaque
            officia obcaecati dicta ipsam id provident architecto sunt? Quam
            culpa deserunt modi voluptate consequuntur iure voluptas dicta
            exercitationem, sit ratione? Iure quidem, quasi labore odio quisquam
            commodi voluptatum in tenetur!
          </p>

          <h4>Content 2</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            molestias fugiat vero facere laudantium at magnam quibusdam
            explicabo dolorem praesentium ab reprehenderit voluptas ex saepe,
            qui nam iste provident nisi necessitatibus aperiam ratione quidem
            consequatur reiciendis. Molestias, nisi ipsa veniam dolorem autem
            totam non hic pariatur. Dignissimos aspernatur quis similique?
          </p>
        </div>
      </div>
    </>
  );
}
