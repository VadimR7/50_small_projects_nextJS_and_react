/* eslint-disable jsx-a11y/no-static-element-interactions */
import Head from 'next/head';
import { ChangeEvent, MouseEvent, useRef, useState } from 'react';
import styles from '../styles/DrawingApp.module.css';

const { mainContainer, toolbox } = styles;

type InitialPosition = {
  x: number;
  y: number;
};

const getOfsetPosition = (e: MouseEvent) => {
  const x = e.clientX - e.currentTarget.getBoundingClientRect().left;
  const y = e.clientY - e.currentTarget.getBoundingClientRect().top;
  return {
    x,
    y,
  };
};

const drawCircle = (
  element: HTMLCanvasElement,
  x: number,
  y: number,
  size: number,
  color: string,
) => {
  const ctx = element.getContext('2d');
  if (ctx) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
};

const drawLine = (
  element: HTMLCanvasElement,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  size: number,
  color: string,
) => {
  const ctx = element.getContext('2d');
  if (ctx) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx?.stroke();
  }
};

export default function DrawingApp(): JSX.Element {
  const [isMousePressed, setIsMousePressed] = useState(false);
  const [drawSize, setDrawSize] = useState(10);
  const [drawColor, setDrawColor] = useState('black');
  const [initialPosition, setInitialPosition] =
    useState<InitialPosition | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleMouseUpOutsideCanvas = () => {
    if (isMousePressed) {
      setIsMousePressed(false);
    }
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDrawColor(e.currentTarget.value);
  };

  const handleDrawSizeIncrease = () => {
    const newDrawSize = drawSize + 5;
    if (drawSize >= 50) {
      setDrawSize(50);
      return;
    }
    setDrawSize(newDrawSize);
  };

  const handleDrawSizeDecrease = () => {
    const newDrawSize = drawSize - 5;
    if (drawSize <= 5) {
      setDrawSize(5);
      return;
    }
    setDrawSize(newDrawSize);
  };

  const handleClickReset = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas) ctx?.clearRect(0, 0, canvas?.width, canvas?.height);
  };

  const handleMouseDown = (e: MouseEvent) => {
    const { x, y } = getOfsetPosition(e);
    setInitialPosition({ x, y });
    setIsMousePressed(true);
  };

  const handleMouseUp = () => {
    setIsMousePressed(false);
    setInitialPosition(null);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const canvas = e.currentTarget as HTMLCanvasElement;
    if (isMousePressed && initialPosition) {
      const { x, y } = getOfsetPosition(e);
      drawCircle(canvas, x, y, drawSize, drawColor);
      drawLine(
        canvas,
        initialPosition?.x,
        initialPosition?.y,
        x,
        y,
        drawSize,
        drawColor,
      );
      setInitialPosition({ x, y });
    }
  };

  return (
    <>
      <Head>
        <title>Drawing App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer} onMouseUp={handleMouseUpOutsideCanvas}>
        <canvas
          id="canvas"
          width="800"
          height="800"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          ref={canvasRef}
        />
        <div className={toolbox}>
          <button type="button" id="decrease" onClick={handleDrawSizeDecrease}>
            -
          </button>
          <span id="size">{drawSize}</span>
          <button type="button" id="increase" onClick={handleDrawSizeIncrease}>
            +
          </button>
          <input type="color" onChange={handleColorChange} />
          <button type="button" id="clear" onClick={handleClickReset}>
            X
          </button>
        </div>
      </div>
    </>
  );
}
