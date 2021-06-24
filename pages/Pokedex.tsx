import Head from 'next/head';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { googleFonts } from '../helpers/externalLinks';
import ComponentStyles from '../styles/PokedexStyle';

const pokemonCount = 30;
const colors: { [key: string]: string } = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

const mainTypes = Object.keys(colors);

type PokeData = {
  id: number;
  name: string;
  types: { slot: string; type: { name: string; url: string } }[];
};

type AppProp = {
  pokemonsData: PokeData[];
};

export default function Pokedex({ pokemonsData }: AppProp): JSX.Element {
  const [pokemons, setPokemons] = useState<PokeData[]>(pokemonsData);

  useEffect(() => {
    setPokemons(pokemonsData);
    return () => setPokemons([]);
  }, [pokemonsData]);

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
        {googleFonts('Lato', 300, 400)}
      </Head>
      <ComponentStyles.Wrapper>
        <h1>Pokedex</h1>
        <div className="poke-container">
          {pokemons ? (
            pokemons.map((pokemon) => {
              const pokeName =
                pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
              const pokeType = pokemon.types.map((type) => type.type.name);
              const type = mainTypes.find(
                (type2) => pokeType.indexOf(type2) > -1,
              );
              return (
                <div
                  key={pokemon.id}
                  className="pokemon"
                  style={{
                    backgroundColor: `${
                      type ? colors[type] : 'rgba(222, 253, 224)'
                    }`,
                  }}
                >
                  <div className="img-container">
                    <img
                      src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                      alt={pokemon.name}
                    />
                  </div>
                  <div className="info">
                    <span className="number">{`#${pokemon.id}`}</span>
                    <h3 className="name">{pokeName}</h3>
                    <small className="type">
                      Type: <span>{type}</span>
                    </small>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </ComponentStyles.Wrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const POKEDEX_API = 'https://pokeapi.co/api/v2/';

  const fetchPokemons = async () => {
    const pokeArr = [];
    for (let i = 1; i <= pokemonCount; i += 1) {
      const data = axios(`${POKEDEX_API}/pokemon/${i}`);
      pokeArr.push(data);
    }
    const pokeData = await Promise.all(pokeArr);
    return pokeData;
  };

  const pokemonsData: PokeData[] = [];

  const responseData = await fetchPokemons();
  responseData.forEach((item) => pokemonsData.push(item.data));

  return {
    props: {
      pokemonsData,
    },
  };
};
