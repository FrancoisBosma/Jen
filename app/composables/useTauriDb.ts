import Database from "@tauri-apps/plugin-sql"
export default async function useTauriDb() {
  // TODO: move db data to process.env or smth
  const tauriDb = await Database.load("sqlite:userdata.db")
  return { tauriDb }
}
