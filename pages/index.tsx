import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ModalWindow from '../components/ModalWindow';
import staticData from '../data.js';
import {
  Nav,
  Main,
  Wrapper,
  Button,
  StyledCard,
} from '../styles/HomePageStyle';

interface Props {
  projects: {
    id: number;
    title: string;
    path: string;
  }[];
}

const env = process.env.NODE_ENV;

const setMode = () => {
  if (env === 'development') {
    return true;
  }
  return false;
};

const initMode = setMode();

export default function Home({ projects }: Props): JSX.Element {
  const [developmentMode, setDevelopmentMode] = useState(initMode);
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);
  const [errorMsgIsDisplayed, setErrorMsgIsDisplayed] = useState(false);

  useEffect(() => {
    setDevelopmentMode(false);
  }, []);

  const handleShowModal = () => setModalIsDisplayed(true);
  const handleHideModal = () => setModalIsDisplayed(false);

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleFormSubmit = async (titleValue: string) => {
    let includes = false;

    projects.forEach((project) => {
      if (project.title === titleValue) {
        includes = true;
      }
    });

    if (includes) {
      setErrorMsgIsDisplayed(true);
      return;
    }

    if (errorMsgIsDisplayed) {
      setErrorMsgIsDisplayed(false);
    }

    const data = {
      title: titleValue,
      path: titleValue.split(' ').join(''),
    };

    await fetch('http://localhost:3000/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    refreshData();
    handleHideModal();
  };

  return (
    <>
      <Head>
        <title>50 small projects in ReactJS</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
        <>
          <Nav>
            {developmentMode && (
              <>
                <Link href="/">
                  <Button type="button" onClick={() => handleShowModal()}>
                    Add new
                  </Button>
                </Link>
                {modalIsDisplayed && (
                  <ModalWindow
                    handleHideModal={handleHideModal}
                    handleFormSubmit={handleFormSubmit}
                    errorMsgIsDisplayed={errorMsgIsDisplayed}
                  />
                )}
              </>
            )}
          </Nav>
          <Main>
            {projects.length > 0 ? (
              <>
                {projects.map((project) => (
                  <StyledCard key={project.id}>
                    <img
                      className="active"
                      alt=""
                      src={`images/projects/${project.title}.gif`}
                    />
                    <img
                      className="static"
                      alt=""
                      src={`images/projects/${project.title}.png`}
                    />
                    <div className="info">
                      <h1>{project.title}</h1>
                      <Link href={`/${project.path}`}>
                        <button type="button">Click to view</button>
                      </Link>
                    </div>
                  </StyledCard>
                ))}
              </>
            ) : (
              <h2>No projects to display</h2>
            )}
          </Main>
        </>
      </Wrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  if (env === 'development') {
    const getProjects = async () => {
      const response = await fetch('http://localhost:3004/projects');
      const projects = await response.json();
      return projects;
    };
    const projects = await getProjects();
    return {
      props: { projects },
    };
  }

  const staticProjects = staticData.projects;

  return {
    props: { staticProjects },
  };
};
