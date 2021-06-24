import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/ContentPlaceholder.module.css';

const {
  mainContainer,
  card,
  cardHeader,
  animatedBg,
  animatedBgText,
  cardContent,
  cardExcept,
  author,
  authorInfo,
  cardTitle,
  profileImg,
} = styles;

type AppProps = {
  userName: string;
  userImage: string;
  cardImage: string;
  cardTitleText: string;
  cardExceptText: string;
  month: number;
  date: number;
  year: number;
};

const getAppProps = async () => {
  const userInfo = fetch('https://randomuser.me/api/');
  const cardInfo = fetch('https://jsonplaceholder.typicode.com/posts/1');
  const res = await Promise.all([userInfo, cardInfo]);
  const data = await Promise.all(res.map((item) => item.json()));
  const userName = `${data[0].results[0].name.first} ${data[0].results[0].name.last}`;
  const userImage = data[0].results[0].picture.thumbnail;
  const cardImage =
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80';
  const cardTitleText = data[1].title;
  const cardExceptText = data[1].body;
  const dateData = new Date();
  const month = dateData.getMonth() + 1;
  const date = dateData.getDate();
  const year = dateData.getFullYear();

  return {
    userName,
    userImage,
    cardImage,
    cardTitleText,
    cardExceptText,
    month,
    date,
    year,
  };
};

export default function ContentPlaceholder(): JSX.Element {
  const [data, setData] = useState<AppProps | null>(null);

  useEffect(() => {
    setTimeout(() => {
      getAppProps().then((newData) => setData(newData));
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>Content Placeholder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <div className={card}>
          <div className={`${cardHeader} ${!data && animatedBg}`}>
            {data && <img src={`${data.cardImage}`} alt="" />}
          </div>
          <div className={cardContent}>
            <h3
              className={`${cardTitle} ${!data && animatedBg} ${
                !data && animatedBgText
              }`}
            >
              {data && data.cardTitleText}
            </h3>
            <p className={cardExcept}>
              {data && data.cardExceptText}
              <span
                className={`${!data && animatedBg} ${!data && animatedBgText}`}
              >
                &nbsp;
              </span>
              <span
                className={`${!data && animatedBg} ${!data && animatedBgText}`}
              >
                &nbsp;
              </span>
              <span
                className={`${!data && animatedBg} ${!data && animatedBgText}`}
              >
                &nbsp;
              </span>
            </p>
            <div className={author}>
              <div className={profileImg}>
                {data && <img src={`${data.userImage}`} alt="" />}
              </div>
              <div className={authorInfo}>
                <strong
                  className={`${!data && animatedBg} ${
                    !data && animatedBgText
                  }`}
                >
                  {data && data.userName}
                </strong>
                <small
                  className={`${!data && animatedBg} ${
                    !data && animatedBgText
                  }`}
                >
                  {data &&
                    `${data.date} - ${
                      data.month < 10 ? `0${data.month}` : data.month
                    } - ${data.year}`}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
