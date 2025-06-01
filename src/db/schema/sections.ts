import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const sectionsTable = pgTable("sections", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  prompt: text(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type Section = typeof sectionsTable.$inferSelect;
