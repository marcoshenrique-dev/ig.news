import {NextApiRequest, NextApiResponse} from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
const users = [
  {
    id: 1,
    name: 'Murilo',
  },
  {
    id: 2,
    name: 'Marcos Henrique',
  },
  {
    id: 3,
    name: 'Cecília',
  },
];

  return response.json(users);
}