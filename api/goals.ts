import { QueryGoals } from "../macdream.dtos";
import { client } from "./client";

export async function queryGoals() {
  return await client.get(new QueryGoals());
}
