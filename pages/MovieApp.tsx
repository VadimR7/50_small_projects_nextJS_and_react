/* eslint-disable camelcase */
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { FormEvent, useState } from 'react';
import removeExtraSpace from '../helpers/removeExtraSpace';
import styles from '../styles/MovieApp.module.css';

const {
  mainContainer,
  search,
  searchRed,
  movie,
  movieInfo,
  green,
  red,
  orange,
  _overview,
  firstPageTitle,
  container,
} = styles;

type Movie = {
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  id: number;
};

const getClassByRate = (vote: number) => {
  if (vote >= 8) {
    return `${green}`;
  }
  if (vote >= 5) {
    return `${orange}`;
  }
  return `${red}`;
};

const getTrendingMovies = (data: Movie) => {
  const { title, poster_path, vote_average, overview, id } = data;

  let img = `https://image.tmdb.org/t/p/w1280${poster_path}`;

  if (poster_path === null) {
    img =
      'https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80';
  }

  return (
    <div className={movie} key={id}>
      <img src={img} alt={title} />
      <div className={movieInfo}>
        <h3>{title}</h3>
        <span className={getClassByRate(vote_average)}>{vote_average}</span>
      </div>
      <div className={_overview}>
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  );
};

const mainTitleInitState = 'Trending Movies of the Week';

type AppProps = {
  trendingMovies: {
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    id: number;
  }[];
};

export default function MovieApp({ trendingMovies }: AppProps): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchError, setSearchError] = useState(false);
  const [mainTitle, setMainTitle] = useState(mainTitleInitState);
  const [searchMoviesData, setSearchMovieData] = useState<Movie[] | null>(null);

  const handleSearchQuery = (e: FormEvent<HTMLInputElement>) => {
    if (searchError) {
      setSearchError(false);
    }
    const query = e.currentTarget.value;
    setSearchQuery(query);
  };

  const handleSearchSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const getMovieData = async (query: string) => {
      const res = await fetch('http://localhost:3000/api/movieData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      });

      const data = await res.json();
      return data.results;
    };

    if (searchQuery) {
      const trimmedSeachtQuery = removeExtraSpace(searchQuery);
      if (trimmedSeachtQuery !== '') {
        const moviesData = await getMovieData(searchQuery);
        setSearchMovieData(moviesData);
        setMainTitle(`Found this for "${searchQuery}":`);
      } else {
        setSearchError(true);
      }
    } else {
      setSearchError(true);
    }
    setSearchQuery('');
  };

  return (
    <>
      <Head>
        <title>Movie App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainContainer}>
        <header>
          <form action="" id="form" onSubmit={(e) => handleSearchSubmit(e)}>
            <input
              value={searchQuery}
              type="text"
              id="search"
              className={`${search} ${searchError && searchRed}`}
              placeholder="Search"
              onChange={(e) => handleSearchQuery(e)}
            />
          </form>
        </header>
        <div className={firstPageTitle}>
          <h1>{mainTitle}</h1>
        </div>
        <div className={container}>
          <main id="main">
            {searchMoviesData
              ? searchMoviesData.map((singleMovie) =>
                  getTrendingMovies(singleMovie),
                )
              : trendingMovies.map((singleMovie) =>
                  getTrendingMovies(singleMovie),
                )}
          </main>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const key = process.env.MOVIE_DB_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
    {
      method: 'GET',
    },
  );
  const data = await response.json();
  const { results } = data;

  return {
    props: { trendingMovies: results },
  };
};
