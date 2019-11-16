import {
  QueryTransactions,
  InsertNewTransactionRequest
} from "../../macdream.dtos";
import { client } from "../../lib/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createTransaction(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  // throw new Error("not implemented");
  switch (method) {
    case "POST":
      try {
        const body = {
          personId: 1,
          PaymentDt: "2019.11.09",
          Price: 10.0,
          VisaMccId: 1,
          Description: "AAA"
        };

        const transRes = await client.post(
          new InsertNewTransactionRequest(body)
        );
        console.log({ transRes });
        res.status(200).json(transRes);
      } catch (error) {
        console.log({ error });
        res.status(400).json(error.responseStatus.message);
      }
      break;

    case "GET":
      try {
        const { responseStatus, results } = await client.get(
          new QueryTransactions()
        );
        res.status(parseInt(responseStatus.errorCode) || 400).json(results);
      } catch (error) {}
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
