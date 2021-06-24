import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const url = process.env.MOVIE_DB;

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> => {
  if (req.method === 'POST') {
    const searchQuery = req.body;
    const query = searchQuery;
    const response = await fetch(`${url}&query=${query}`);
    const data = await response.json();
    res.send(data);
  }
};
