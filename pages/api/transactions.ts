import {
  QueryTransactions,
  InsertNewTransactionRequest
} from "../../macdream.dtos";
import { client } from "../../lib/client";
import { NextApiRequest, NextApiResponse } from "next";

const FoodDescriptions = ["Burger", "Pizza"];
const AlcoholDescriptions = ["Beer", "Alko", "Wine"];
const CoffeeDescriptiosn = ["Starbuck", "EspressoHouse"];

const mccMap = {
  1: AlcoholDescriptions,
  2: CoffeeDescriptiosn,
  5: FoodDescriptions
};

export default async function createTransaction(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  // throw new Error("not implemented");
  switch (method) {
    case "POST":
      try {
        const visaMccids = [1, 2, 5];
        const ramdomChosenVisaMccId =
          visaMccids[Math.floor(Math.random() * visaMccids.length)];
        const descriptions = mccMap[ramdomChosenVisaMccId];
        const randomChosenDescription =
        descriptions[
            Math.floor(Math.random() * descriptions.length)
          ];
        const body = {
          personId: 1,
          PaymentDt: "2019.11.09",
          Price: 10.0,
          VisaMccId: ramdomChosenVisaMccId,
          Description: randomChosenDescription
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
        const body = new QueryTransactions();
        body.orderBy = "-paymentDt";
        const results = await client.get(body);
        res.status(200).json(results);
      } catch (error) {
        res.status(400).json(error.message);
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
