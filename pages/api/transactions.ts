import {
  QueryTransactions,
//   InsertNewTransactionRequest
} from "../../macdream.dtos";
import { client } from "../../lib/client";

export async function queryTransactions() {
  return await client.get(new QueryTransactions());
}

// Not working atm
export async function createTransaction() {
  throw new Error("not implemented");
  // return await client.post(new InsertNewTransactionRequest, body)
}
