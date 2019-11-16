import { QueryGoals } from "../../macdream.dtos";
import { client } from "../../lib/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function queryGoals(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await client.get(new QueryGoals());
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
