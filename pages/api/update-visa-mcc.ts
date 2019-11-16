import {
    UpdateVisaMccRequest
  //   InsertNewTransactionRequest
} from "../../macdream.dtos";
import { client } from "../../lib/client";
import { NextApiResponse, NextApiRequest } from "next";

export default async function updateVisaMcc(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { isSaving, visaMccId }
  } = req;
  try {
    const body = new UpdateVisaMccRequest();
    body.isSaving = Boolean(isSaving);
    body.visaMccId = parseInt(visaMccId.toString());
    const result = await client.put(body);
    res.status(200).json(result);
  } catch (error) {
      console.log(error);
    res.status(400).json({ message: error.message });
  }
}
