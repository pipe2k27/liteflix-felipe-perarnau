import sqlite3 from "sqlite3";

const DATABASE_PATH = "movie.db";

export const db = new sqlite3.Database(DATABASE_PATH, (err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
    process.exit(1);
  }
  console.log(`Connected to SQLite database: ${DATABASE_PATH}`);
});

export const executeQuery = async (query) => db.all(query);
