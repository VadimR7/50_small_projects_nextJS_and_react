// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import projectFileCreator from '../../helpers/projectFileCreator';

type Data = {
  name: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> => {
  const getProjects = async () => {
    const response = await fetch('http://localhost:3004/projects');
    const projects = await response.json();
    return projects;
  };

  const createNewProject = async (data: JSON) => {
    const response = await fetch('http://localhost:3004/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const newProject = await response.json();
    return newProject;
  };

  if (req.method === 'GET') {
    const allProjects = await getProjects();
    res.status(200).send(allProjects);
  }

  if (req.method === 'POST') {
    if (req.body.title) {
      const newProjectTitle = req.body.title;
      projectFileCreator(newProjectTitle);
    }
    const newProject = await createNewProject(req.body);
    res.status(201).send(newProject);
  }
};
