import { DragEvent } from 'react';
import Head from 'next/head';
import styles from '../styles/DragandDrop.module.css';

const { mainContainer, fill, empty } = styles;

type ContainerProps = {
  children?: JSX.Element;
};

const Container = ({ children }: ContainerProps) => {
  const drop = (e: DragEvent) => {
    e.preventDefault();
    const divID = e.dataTransfer.getData('divID');
    const card = document.getElementById(divID);
    if (card) {
      e.currentTarget.appendChild(card);
      card.className = styles.fill;
      card.style.display = 'block';
    }
    e.currentTarget.className = styles.empty;
  };

  const dragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const dragEnter = (e: DragEvent) => {
    e.preventDefault();
    const target = e.currentTarget;
    target.classList.add(styles.hovered);
  };

  const dragLeave = (e: DragEvent) => {
    const target = e.currentTarget;
    target.className = styles.empty;
  };

  return (
    <div
      className={empty}
      onDragOver={dragOver}
      onDrop={drop}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
    >
      {children}
    </div>
  );
};

Container.defaultProps = {
  children: null,
};

type CardProps = {
  id: string;
};

const Card = ({ id }: CardProps) => {
  const dragStart = (e: DragEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    e.dataTransfer.setData('divId', target.id);
    target.classList.add(styles.hold);
    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  const dragEnd = (e: DragEvent) => {
    e.currentTarget.className = styles.fill;
  };

  return (
    <div
      id={id}
      className={fill}
      draggable
      onDragStart={dragStart}
      onDragEnd={dragEnd}
    />
  );
};

export default function DragandDrop(): JSX.Element {
  return (
    <>
      <Head>
        <title>Drag and Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <Container>
          <Card id="card_1" />
        </Container>
        <Container />
        <Container />
        <Container />
        <Container />
      </div>
    </>
  );
}
