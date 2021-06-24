import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  userData?: {
    data: string;
  };
  repoData?: {
    data: string;
  };
  error?: boolean;
};

const GITHUB_API_URL = 'https://api.github.com/users/';

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> => {
  if (req.method === 'GET') {
    const { username } = req.query;
    try {
      const userData = await axios(`${GITHUB_API_URL}${username}`);
      if (!userData.data || !userData.data?.public_repos) {
        res.send({ userData: userData.data });
        return;
      }
      const repoData = await axios(
        `${GITHUB_API_URL}${userData.data.login}/repos?sort=created?page=1&per_page=10`,
      );
      res.send({ userData: userData.data, repoData: repoData.data });
    } catch (err) {
      if (err.response.status === 404) {
        res.send({ error: true });
      }
    }
  }
};
