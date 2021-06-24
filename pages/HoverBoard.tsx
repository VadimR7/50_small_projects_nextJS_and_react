/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import Head from 'next/head';
import { ChangeEvent, useState } from 'react';
import ComponentStyles from '../styles/HoverBoardStyle';

const initColors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const SQUARES = 500;

const createSquare = (nummbersOfSquares: number) => {
  const arr = [];
  for (let i = 0; i < nummbersOfSquares; i += 1) {
    arr.push(i);
  }
  return arr;
};

const squares = createSquare(SQUARES);

const getRandomColor = (colorsToChoose: string[]) => {
  const colorIndex = Math.floor(Math.random() * colorsToChoose.length);
  const color = colorsToChoose[colorIndex];
  return color;
};

const setColor = (color: string) => ({
  backgroundColor: color,
  boxShadow: `0 0 2px ${color}, 0 0 10px ${color}`,
});

const initStyle = {
  backgroundColor: '#1d1d1d',
  boxShadow: '0 0 2px #000',
};

type StyleType = {
  backgroundColor: string;
  boxShadow: string;
};

export default function HoverBoard(): JSX.Element {
  const [squareStyle, setSquareStyle] = useState<StyleType>(initStyle);
  const [colorPickers, setColorPickers] = useState(initColors);
  const [activeItem, setActiveItem] = useState<number | undefined>(undefined);

  const handleMouseOver = (idx: number) => {
    const newColor = getRandomColor(colorPickers);
    setActiveItem(idx);
    setSquareStyle(setColor(newColor));
  };

  const handleMouseOut = () => {
    setSquareStyle(initStyle);
    setActiveItem(undefined);
  };

  const handleColorPickerChange = (
    e: ChangeEvent<HTMLInputElement>,
    idx: number,
  ) => {
    const newColors = [...colorPickers];
    newColors[idx] = e.currentTarget.value;
    setColorPickers(newColors);
  };

  return (
    <>
      <Head>
        <title>HoverBoard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComponentStyles.Wrapper>
        <div className="color-picker">
          {colorPickers.map((color, idx) => (
            <input
              type="color"
              key={color}
              value={colorPickers[idx]}
              onChange={(e) => handleColorPickerChange(e, idx)}
            />
          ))}
        </div>
        <div className="container">
          {squares.map((_square, idx) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              onMouseOver={() => handleMouseOver(idx)}
              onMouseOut={handleMouseOut}
              className="square"
              style={activeItem === idx ? squareStyle : undefined}
            />
          ))}
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
