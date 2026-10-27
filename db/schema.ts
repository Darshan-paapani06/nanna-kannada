import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const contributions=sqliteTable("contributions",{
  id:integer("id").primaryKey({autoIncrement:true}),
  userId:text("user_id").notNull(),region:text("region").notNull(),expression:text("expression").notNull(),
  context:text("context").notNull(),source:text("source").notNull(),status:text("status").notNull().default("pending"),
  createdAt:text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const progress=sqliteTable("progress",{
  id:integer("id").primaryKey({autoIncrement:true}),userId:text("user_id").notNull(),activity:text("activity").notNull(),
  value:integer("value").notNull().default(0),updatedAt:text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
