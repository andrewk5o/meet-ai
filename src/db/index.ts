import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
    throw new Error("DATABASE_URL is not set");
}

const sqlClient = neon(dbUrl);
export const db = drizzle({ client: sqlClient });