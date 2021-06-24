import Head from 'next/head';
import { useState } from 'react';
import ComponentStyles from '../styles/Background3DBoxStyle';
import { googleFonts } from '../helpers/externalLinks';

const boxes = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

export default function Background3DBox(): JSX.Element {
  const [isBig, setIsBig] = useState(false);

  return (
    <>
      <Head>
        <title>Background 3D Box</title>
        <link rel="icon" href="/favicon.ico" />
        {googleFonts('Poppins')}
      </Head>
      <ComponentStyles.Wrapper>
        <button
          type="button"
          className="magic"
          onClick={() => setIsBig((prevState) => !prevState)}
        >
          Magic
        </button>
        <div className={isBig ? 'boxes big' : 'boxes'}>
          {boxes.map((_box, idx) =>
            boxes.map((_box2, idx2) => (
              <div
                key={`${idx + idx2}`}
                className="box"
                style={{
                  backgroundPosition: `${-idx2 * 125}px ${-idx * 125}px`,
                }}
              />
            )),
          )}
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
