import {
  QueryTransactions,
//   InsertNewTransactionRequest
} from "../../macdream.dtos";
import { client } from "../../lib/client";
import { NextApiResponse, NextApiRequest } from "next";

export default async function queryTransactions(req: NextApiRequest, res: NextApiResponse) {
  try {
    const request = new QueryTransactions();
    request.orderBy = '-paymentDt'
    const result = await client.get(request);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Not working atm
export async function createTransaction() {
  throw new Error("not implemented");
  // return await client.post(new InsertNewTransactionRequest, body)
}
