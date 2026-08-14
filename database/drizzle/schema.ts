import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const progLanguages = sqliteTable("prog_languages", {
	id: integer().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	version: text().notNull(),
});

export const typescriptBlocks = sqliteTable("typescript_blocks", {
	id: integer().primaryKey({ autoIncrement: true }),
	progLanguageId: integer("prog_language_id").notNull().references(() => progLanguages.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	blockName: text("block_name").notNull(),
	blockContent: text("block_content"),
});

