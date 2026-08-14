import { relations } from "drizzle-orm/relations";
import { progLanguages, typescriptBlocks } from "./schema";

export const typescriptBlocksRelations = relations(typescriptBlocks, ({one}) => ({
	progLanguage: one(progLanguages, {
		fields: [typescriptBlocks.progLanguageId],
		references: [progLanguages.id]
	}),
}));

export const progLanguagesRelations = relations(progLanguages, ({many}) => ({
	typescriptBlocks: many(typescriptBlocks),
}));