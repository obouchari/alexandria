import { sql } from "drizzle-orm";
import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const bookmarks = pgTable("bookmarks", {
  id: uuid().defaultRandom(),

  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, {
      onDelete: "cascade",
    }),

  categoryId: uuid("category_id")
    .notNull()
    .references(() => categories.id, {
      onDelete: "restrict",
    }),

  url: text().notNull().unique(),

  title: text().notNull(),

  description: text(),

  image: text(),

  keywords: text(),

  createdAt: timestamp("created_at", { mode: "string" })
    .default(sql`LOCALTIMESTAMP`)
    .notNull(),

  updatedAt: timestamp("updated_at", { mode: "string" })
    .default(sql`LOCALTIMESTAMP`)
    .notNull(),

  deletedAt: timestamp("deleted_at", { mode: "string" }),
});

export const categories = pgTable("categories", {
  id: uuid().defaultRandom().primaryKey(),

  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, {
      onDelete: "cascade",
    }),

  name: text().notNull().unique(),

  createdAt: timestamp("created_at", { mode: "string" })
    .default(sql`LOCALTIMESTAMP`)
    .notNull(),

  updatedAt: timestamp("updated_at", { mode: "string" })
    .default(sql`LOCALTIMESTAMP`)
    .notNull(),

  deletedAt: timestamp("deleted_at", { mode: "string" }),
});

// Better-Auth tables

export const users = pgTable("users", {
  id: uuid().defaultRandom().primaryKey(),

  name: text("name").notNull(),

  email: text("email").notNull().unique(),

  emailVerified: boolean("email_verified").notNull(),

  image: text("image"),

  createdAt: timestamp("created_at")
    .default(sql`LOCALTIMESTAMP`)
    .notNull(),

  updatedAt: timestamp("updated_at")
    .default(sql`LOCALTIMESTAMP`)
    .notNull(),
});

export const sessions = pgTable("sessions", {
  id: uuid().defaultRandom(),

  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),

  token: text("token").notNull().unique(),

  expiresAt: timestamp("expires_at").notNull(),

  ipAddress: text("ip_address"),

  userAgent: text("user_agent"),

  createdAt: timestamp("created_at")
    .default(sql`LOCALTIMESTAMP`)
    .notNull(),

  updatedAt: timestamp("updated_at")
    .default(sql`LOCALTIMESTAMP`)
    .notNull(),
});

export const accounts = pgTable("accounts", {
  id: uuid().defaultRandom(),

  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),

  accountId: text("account_id").notNull(),

  providerId: text("provider_id").notNull(),

  accessToken: text("access_token"),

  refreshToken: text("refresh_token"),

  accessTokenExpiresAt: timestamp("access_token_expires_at"),

  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),

  scope: text("scope"),

  idToken: text("id_token"),

  password: text("password"),

  createdAt: timestamp("created_at")
    .default(sql`LOCALTIMESTAMP`)
    .notNull(),

  updatedAt: timestamp("updated_at")
    .default(sql`LOCALTIMESTAMP`)
    .notNull(),
});

export const verifications = pgTable("verifications", {
  id: uuid().defaultRandom(),

  identifier: text("identifier").notNull(),

  value: text("value").notNull(),

  expiresAt: timestamp("expires_at").notNull(),

  createdAt: timestamp("created_at")
    .default(sql`LOCALTIMESTAMP`)
    .notNull(),

  updatedAt: timestamp("updated_at")
    .default(sql`LOCALTIMESTAMP`)
    .notNull(),
});
