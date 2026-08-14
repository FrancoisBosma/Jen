import { defineConfig } from "drizzle-kit"

export default defineConfig({
  dialect: "sqlite",
  out: "./database/drizzle",
  dbCredentials: {
    url: "./database/userdata.db",
  },
})
