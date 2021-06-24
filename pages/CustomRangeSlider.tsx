/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import { ChangeEvent, useRef, useState } from 'react';
import scaleNum from '../helpers/scaleFunc';
import { googleFonts } from '../helpers/externalLinks';
import ComponentStyles from '../styles/CustomRangeSliderStyle';

export default function CustomRangeSlider(): JSX.Element {
  const [rangeValue, setRangeValue] = useState('50');
  const [labelLeftPosition, setLabelLeftPosition] =
    useState<number | undefined>(undefined);

  const inputRangeRef = useRef<HTMLInputElement>(null);
  const labelRangeRef = useRef<HTMLLabelElement>(null);

  const hanldeInputChanched = (e: ChangeEvent<HTMLInputElement>) => {
    const inputRef = inputRangeRef.current;
    const labelRef = labelRangeRef.current;
    setRangeValue(e.currentTarget.value);
    if (inputRef && labelRef) {
      const inputRangeWidth =
        getComputedStyle(inputRef).getPropertyValue('width');
      const labelRangeWidth =
        getComputedStyle(labelRef).getPropertyValue('width');

      const inputWidth = Number(
        inputRangeWidth.substring(0, inputRangeWidth.length - 2),
      );
      const labelWidth = Number(
        labelRangeWidth.substring(0, labelRangeWidth.length - 2),
      );

      const inputMax = Number(inputRef.max);
      const inputMin = Number(inputRef.min);

      const leftValue =
        Number(rangeValue) * (inputWidth / inputMax) -
        labelWidth / 2 +
        scaleNum(Number(rangeValue), inputMin, inputMax, 10, -10);

      setLabelLeftPosition(leftValue);
    }
  };

  return (
    <>
      <Head>
        <title>Custom Range Slider</title>
        <link rel="icon" href="/favicon.ico" />
        {googleFonts('Lato')}
      </Head>

      <ComponentStyles.Wrapper>
        <h2>Custom Range slider</h2>
        <div className="range-container">
          <input
            ref={inputRangeRef}
            type="range"
            name="range"
            min="0"
            max="100"
            id=""
            value={rangeValue}
            onChange={(e) => hanldeInputChanched(e)}
          />
          <label
            ref={labelRangeRef}
            htmlFor="range"
            style={{ left: `${labelLeftPosition}px` }}
          >
            {rangeValue}
          </label>
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}
