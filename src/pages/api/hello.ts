import { NextApiRequest, NextApiResponse } from "next";

// Acessível na rota "/api/hello".
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ message: 'Hello World' })
}