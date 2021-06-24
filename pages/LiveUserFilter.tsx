import { GetStaticProps } from 'next';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import Head from 'next/head';
import ComponentStyles from '../styles/LiveUserFilterStyle';

const numOfResults = 55;

type AppProps = {
  users: {
    id: string;
    location: string;
    name: string;
    picture: string;
  }[];
};

export default function LiveUserFilter({ users }: AppProps): JSX.Element {
  const [usersData, setUsersData] = useState(users);
  const [searchQuery, setSearchQuery] = useState('');

  const handleUserSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
    if (e.currentTarget.value.length > 0) {
      const filteredUserData = users.filter(
        (user) =>
          user.name
            .toLowerCase()
            .includes(e.currentTarget.value.toLowerCase()) ||
          user.location
            .toLowerCase()
            .includes(e.currentTarget.value.toLowerCase()),
      );
      setUsersData(filteredUserData);
    } else setUsersData(users);
  };

  return (
    <>
      <Head>
        <title>Live User Filter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComponentStyles.Wrapper>
        <div className="container">
          <div className="header">
            <h4 className="title">Live User Filter</h4>
            <small className="subtitle">Search by name and/or location</small>
            <input
              value={searchQuery}
              onChange={(e) => handleUserSearch(e)}
              type="text"
              placeholder="Search..."
            />
          </div>
          <ul className="user-list">
            {users ? (
              usersData.map((user) => (
                <li key={user.id}>
                  <img src={user.picture} alt={user.name} />
                  <div className="user-info">
                    <h4>{user.name}</h4>
                    <p>{user.location}</p>
                  </div>
                </li>
              ))
            ) : (
              <li>
                <h2>Loading...</h2>
              </li>
            )}
          </ul>
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}

type User = {
  login: { uuid: string };
  location: { city: string; state: string; country: string };
  name: { first: string; last: string };
  picture: { large: string };
}[];

export const getStaticProps: GetStaticProps = async () => {
  const RANDOM_USER_API_URL = `https://randomuser.me/api?results=${numOfResults}`;

  const getData = async () => {
    const { data } = await axios(RANDOM_USER_API_URL);
    return data.results;
  };
  const users: User = await getData();
  const filteredUsers = users.map((user) => ({
    id: user.login.uuid,
    location: `${user.location.city}, ${user.location.state}`,
    name: `${user.name.first} ${user.name.last}`,
    picture: user.picture.large,
  }));

  return {
    props: { users: filteredUsers },
  };
};
