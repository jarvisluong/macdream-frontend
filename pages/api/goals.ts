import { QueryGoals } from "../../macdream.dtos";
import { client } from "../../lib/client";

export async function queryGoals() {
  return await client.get(new QueryGoals());
}
