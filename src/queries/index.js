import { Pool } from "pg";
import database from "./database";
const pool = new Pool({
  connectionString: database,

  ssl: {
    rejectUnauthorized: false,
  },
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export default pool;
