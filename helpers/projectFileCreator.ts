/* eslint-disable no-console */
import path from 'path';
import fs from 'fs';

export default function projectFileCreator(
  title: string,
): Record<string, unknown> | void {
  const parentDir = path.resolve(process.cwd());
  const projectTitle = `${title.split(' ').join('')}`;
  const cssModuleTitle = `${projectTitle}Style.tsx`;
  const componentContent = `
    import Head from 'next/head';
    import ComponentStyles from '../styles/${projectTitle}Style';

    export default function ${projectTitle}(): JSX.Element {
        return (
            <>
              <Head>
                <title>${title}</title>
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <ComponentStyles.Wrapper>
                <h1>${title}</h1>
              </ComponentStyles.Wrapper>
            </>
          );
    }
    `;

  const StyledComponentContent = `
  import styled from 'styled-components';

  export const Wrapper = styled.div\`
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

//remove the line above

  :before{
    content: 'Component is imported'
  }
\`;

const styledComponents = {
  Wrapper,
};

export default styledComponents;
`;

  fs.access(
    `${parentDir}/pages/${projectTitle}.tsx`,
    fs.constants.F_OK,
    (accesError) => {
      if (accesError) {
        fs.writeFile(
          `${parentDir}/pages/${projectTitle}.tsx`,
          componentContent,
          { flag: 'w+' },
          (err) => {
            if (err) {
              console.log(err);
            }
          },
        );
      }
    },
  );

  fs.access(
    `${parentDir}/styles/${cssModuleTitle}`,
    fs.constants.F_OK,
    (accesError) => {
      if (accesError) {
        fs.writeFile(
          `${parentDir}/styles/${cssModuleTitle}`,
          StyledComponentContent,
          { flag: 'w+' },
          (err) => {
            if (err) {
              console.log(err);
            }
          },
        );
      }
    },
  );
}

// projectFileCreator('Test Project');
