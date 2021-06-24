import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const POKEDEX_API = 'https://pokeapi.co/api/v2/';

type PokeData = { id: number; name: string; types: string[] };

export default async (
  req: NextApiRequest,
  res: NextApiResponse<PokeData>,
): Promise<void> => {
  const getPokemon = async (id: string | string[]) => {
    const { data } = await axios(`${POKEDEX_API}/pokemon/${id}`);
    const pokeData = {
      id: data.id,
      name: data.name,
      types: data.types,
    };
    return pokeData;
  };

  if (req.method === 'GET') {
    const { id } = req.query;
    try {
      const data = await getPokemon(id);
      res.status(200).send(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
};
