import { defineConfig } from "prisma/config";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL!, // ini koneksi ke database
  authToken: process.env.DB_AUTH_TOKEN, // kalau ada
});

export default defineConfig({
  generator: {
    client: {
      provider: "prisma-client-js",
      output: "src/generated/prisma",
    },
  },
  migrations: {
    path: "prisma/migrations",
    seed: "bun ./prisma/seed.ts",
  },
  datasource: {
    adapter, 
  },
});