import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  price: integer("price").notNull(),
  description: text("description"),
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  customerName: varchar("customer_name", { length: 255 }).notNull(),
  total: integer("total").notNull(),
  status: varchar("status", { length: 50 }).notNull().default("pending"),
});
