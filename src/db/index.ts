import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle, NeonHttpDatabase } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

let sql: NeonQueryFunction<boolean, boolean> | null = null;
let db: NeonHttpDatabase<typeof schema> | null = null;

if (connectionString) {
  sql = neon(connectionString);
  db = drizzle(sql, { schema });
}

export function getDb() {
  if (!db) {
    throw new Error("DATABASE_URL is not set. Database operations are unavailable.");
  }
  return db;
}

export { db };
