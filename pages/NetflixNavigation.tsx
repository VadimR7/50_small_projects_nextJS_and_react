/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import { useState } from 'react';
import { fontAwsome, googleFonts } from '../helpers/externalLinks';
import ComponentStyles from '../styles/NetflixNavigationStyle';

export default function NetflixNavigation(): JSX.Element {
  const [navIsShown, setNavIsShown] = useState(false);

  return (
    <>
      <Head>
        <title>Netflix Navigation</title>
        {fontAwsome}
        {googleFonts('Muli')}
      </Head>
      <ComponentStyles.Wrapper>
        <button
          type="button"
          className="nav-btn open-btn"
          onClick={() => setNavIsShown(true)}
        >
          <i className="fas fa-bars" />
        </button>

        <img
          src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014.png"
          alt=""
          className="logo"
        />
        <p className="text">Mobile Navigation</p>

        <div className={navIsShown ? 'nav visible nav-black' : 'nav nav-black'}>
          <div className={navIsShown ? 'nav visible nav-red' : 'nav nav-red'}>
            <div
              className={navIsShown ? 'nav visible nav-white' : 'nav nav-white'}
            >
              <button
                type="button"
                className="nav-btn close-btn"
                onClick={() => setNavIsShown(false)}
              >
                <i className="fas fa-times" />
              </button>

              <img
                src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014.png"
                alt=""
                className="logo"
              />

              <ul className="list">
                <li>
                  <a href="#">Teams</a>
                </li>
                <li>
                  <a href="#">Locations</a>
                </li>
                <li>
                  <a href="#">Lifet at Netflix</a>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="#">Netflix Culture memo</a>
                    </li>
                    <li>
                      <a href="#">Work life balance</a>
                    </li>
                    <li>
                      <a href="#">Inclusion & diversity</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
