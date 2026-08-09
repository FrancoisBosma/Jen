// import Database from "@tauri-apps/plugin-sql"
// // TODO: move db data to process.env or smth
// const tauriDbConnector = await Database.load("sqlite:userdata.db")
// export default async function useTauriDbConnector() {
//   return { tauriDbConnector }
// }

// import Database from '@tauri-apps/plugin-sql';
// import { drizzle } from 'drizzle-orm/sqlite-proxy';
// import * as schema from './schema';

// const tauriDbConnectorConnector = await Database.load('sqlite:app.db');
// export const db = drizzle(async (sql, params, method) => {
//   try {
//     if (method === 'all') {
//       const rows = await tauriSql.select<any[]>(sql, params)
//       // Drizzle syntax: cf. https://orm.drizzle.team/docs/sqlite/connect-drizzle-proxy
//       return { rows: rows.map(row => Object.values(row)) }
//     }
//     await tauriSql.execute(sql, params)
//     return { rows: [] }
//   } catch (err) {
//     console.error('Database Error:', err)
//     return { rows: [] }
//   }
// }, { schema });

import Database from "@tauri-apps/plugin-sql"
import { drizzle, type SqliteRemoteDatabase } from "drizzle-orm/sqlite-proxy"
import * as schema from "~/db/schema"

// Shared instance cache (singleton pattern)
let drizzleDbOrm: SqliteRemoteDatabase<typeof schema> | null = null
let localDb: Promise<SqliteRemoteDatabase<typeof schema>> | null = null

export async function useDb() {
  // Ensure this only runs on the client side (in the Tauri webview)
  if (import.meta.server) return null

  // Return existing instance if already initialized
  if (drizzleDbOrm) return drizzleDbOrm

  // Prevent multiple concurrent load calls on app start
  if (!localDb) {
    localDb = (async () => {
      const tauriDbConnector = await Database.load("sqlite:app.db")
      drizzleDbOrm = drizzle(
        // 1. Standard single query callback
        async (sql, params, method) => {
          if (method === "all") {
            const rows = await tauriDbConnector.select<any[]>(sql, params)
            return { rows: rows.map((r) => Object.values(r)) }
          }
          await tauriDbConnector.execute(sql, params)
          return { rows: [] }
        },
        // 2. Batch callback
        /*
         N.B: At the moment of writing, @tauri-apps/plugin-sql doesn't seem to expose a multi-statement
         command, so batching together several queries to be executed at once doesn't seem feasible HERE.
         -> HERE we implement a sequential execution, why? So that db.batch() is made usable nevertheless
         -> If this becomes a problem, we can explore writing a custom command in the Rust Tauri "backend"
         */
        async (queries) => {
          const results: { rows: any[][] }[] = []

          for (const query of queries) {
            if (query.method === "all") {
              const rows = await tauriDbConnector.select<any[]>(query.sql, query.params)
              results.push({ rows: rows.map((r) => Object.values(r)) })
            } else {
              await tauriDbConnector.execute(query.sql, query.params)
              results.push({ rows: [] })
            }
          }

          return results
        },
        // 3. Configuration object
        {
          schema,
        },
      )
      return drizzleDbOrm
    })()
  }

  return localDb
}
