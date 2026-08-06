import Database from "@tauri-apps/plugin-sql"
export default async function useTauriDb() {
  const tauriDb = await Database.load("sqlite:userdata.db")
  return { tauriDb }
}
