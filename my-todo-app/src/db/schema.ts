import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";
export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  task: text("task").notNull(),
  title: text("title").notNull(),
  done: boolean("done").default(false).notNull(),
});