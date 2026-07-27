import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/autonique";

// Export the node-postgres pool for other direct uses if needed
export const pool = new pg.Pool({
  connectionString: databaseUrl,
});

// Export the drizzle client
export const db = drizzle(pool, { schema });
