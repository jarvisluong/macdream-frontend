import {
  QueryTransactions,
//   InsertNewTransactionRequest
} from "../macdream.dtos";
import { client } from "./client";

export async function queryTransactions() {
  return await client.get(new QueryTransactions());
}

// Not working atm
export async function createTransaction(body) {
  throw new Error("not implemented");
  // return await client.post(new InsertNewTransactionRequest, body)
}
