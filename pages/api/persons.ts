import { QueryPersons } from "../../macdream.dtos";
import { client } from "../../lib/client";
import { NextApiResponse, NextApiRequest } from "next";

export default async  function queryPersons(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await client.get(new QueryPersons());
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}