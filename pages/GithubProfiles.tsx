/* eslint-disable camelcase */
import Head from 'next/head';
import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import ComponentStyles from '../styles/GithubProfilesStyle';

type UserData = {
  avatar_url: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
};

type RepoData = {
  name: string;
  html_url: string;
}[];

export default function GithubProfiles(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [userName, setUserName] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [repoData, setRepoData] = useState<RepoData | null>(null);
  const [erroMsg, setErrorMsg] = useState(false);

  const handleOnSumbmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedSearchQuery = searchQuery.toLowerCase().split(' ').join('');
    setUserName(trimmedSearchQuery);
    setSearchQuery('');
  };

  useEffect(() => {
    const getData = async (username: string) => {
      try {
        const { data } = await axios(
          `http://localhost:3000/api/github/${username}`,
        );

        if (data.error) {
          setErrorMsg(true);
          return;
        }

        if (erroMsg) setErrorMsg(false);

        const {
          avatar_url,
          login,
          bio,
          followers,
          following,
          public_repos,
          html_url,
        } = data.userData;

        setUserData({
          avatar_url,
          login,
          bio,
          followers,
          following,
          public_repos,
          html_url,
        });

        setRepoData(data.repoData);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    if (userName) getData(userName);
  }, [userName, erroMsg]);

  return (
    <>
      <Head>
        <title>Github Profiles</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ComponentStyles.Wrapper>
        <h1>Github Profiles</h1>
        <ComponentStyles.Form onSubmit={handleOnSumbmit}>
          <input
            type="text"
            id="search"
            placeholder="Search a Github User"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
          />
        </ComponentStyles.Form>

        <main id="main">
          {erroMsg
            ? 'No such profile'
            : userData && (
                <ComponentStyles.Card>
                  <div>
                    <img src={userData?.avatar_url} alt="" className="avatar" />
                  </div>
                  <div className="user-info">
                    <h2>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={userData.html_url}
                      >
                        {userData?.login}
                      </a>
                    </h2>
                    <p>{userData?.bio}</p>
                    <ul>
                      <li>
                        {userData?.followers} <strong>Followers</strong>
                      </li>
                      <li>
                        {userData?.following} <strong>Following</strong>
                      </li>
                      <li>
                        {userData?.public_repos} <strong>Repos</strong>
                      </li>
                    </ul>

                    <div id="repos">
                      {repoData &&
                        repoData.map((repo) => (
                          <a
                            key={repo.name}
                            href={repo.html_url}
                            className="repo"
                            rel="noreferrer"
                            target="_blank"
                          >
                            {repo.name}
                          </a>
                        ))}
                    </div>
                  </div>
                </ComponentStyles.Card>
              )}
        </main>
      </ComponentStyles.Wrapper>
    </>
  );
}
