import Head from 'next/head';
import ComponentStyles from '../styles/RandomImageFeedStyle';

const unsplashURL = 'https://source.unsplash.com/random/';

const numRows = 5;

const createImgArr = (num: number) => {
  const arr = [];
  for (let i = 0; i < num * 3; i += 1) {
    arr.push({ id: i });
  }
  return arr;
};

const imgArr = createImgArr(numRows);

const getRandomNum = () => Math.floor(Math.random() * 10) + 300;

export default function RandomImageFeed(): JSX.Element {
  return (
    <>
      <Head>
        <title>Random Image Feed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComponentStyles.Wrapper>
        <h1>Random Image Feed</h1>
        <div className="container">
          {imgArr.map((img) => (
            <img
              key={img.id}
              src={`${unsplashURL}${getRandomNum()}x${getRandomNum()}`}
              alt=""
            />
          ))}
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
