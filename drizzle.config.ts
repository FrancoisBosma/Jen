import { defineConfig } from "drizzle-kit"

export default defineConfig({
  dialect: "sqlite",
  out: "./database/drizzle",
  dbCredentials: {
    url: "/home/moxa/.config/com.moxa.jen/userdata.db",
  },
})
