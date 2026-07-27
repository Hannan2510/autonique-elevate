import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db, pool } from "./client";

async function main() {
  console.log("Running PostgreSQL migrations...");
  try {
    await migrate(db, { migrationsFolder: "./drizzle" });
    console.log("Migrations successfully completed!");
  } catch (error) {
    console.error("Migration execution failed:", error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

// Execute migration script if run directly
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith("migrate.ts")) {
  main();
}
