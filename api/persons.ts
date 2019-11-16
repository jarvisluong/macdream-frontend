import { QueryPersons } from "../macdream.dtos";
import { client } from "./client";

export async function queryPersons() {
  return await client.get(new QueryPersons());
}