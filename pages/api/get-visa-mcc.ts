import {
    QueryVisaMccs
    //   InsertNewTransactionRequest
  } from "../../macdream.dtos";
  import { client } from "../../lib/client";
  import { NextApiResponse, NextApiRequest } from "next";
  
  export default async function updateVisaMcc(
    _req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
      const body = new QueryVisaMccs()
      const result = await client.get(body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  