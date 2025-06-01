import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const profileTable = pgTable("profiles", {
  id: uuid().primaryKey().notNull().defaultRandom(),
  email: varchar({ length: 255 }).notNull().unique(),
  firstName: varchar({ length: 255 }),
  lastName: varchar({ length: 255 }),
  avatar: varchar({ length: 255 }),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp()
    .defaultNow()
    .$onUpdate(() => new Date()),

  userId: uuid().notNull().unique(),
});

// export const usersTable = pgTable("users", {
//   id: uuid().primaryKey().notNull().defaultRandom(),
//   email: varchar({ length: 255 }).notNull().unique(),
//   role: varchar({ length: 255 }),
//   encryptedPassword: varchar({ length: 255 }),
//   emailConfirmedAt: timestamp(),
//   invitedAt: timestamp(),
//   confirmationToken: varchar({ length: 255 }),
//   confirmationSentAt: timestamp(),
//   recoveryToken: varchar({ length: 255 }),
//   recoverySentAt: timestamp(),
//   emailChangeTokenNew: varchar({ length: 255 }),
//   emailChange: varchar({ length: 255 }),
//   emailChangeSentAt: timestamp(),
//   lastSignInAt: timestamp(),
//   rawAppMetaData: jsonb(),
//   rawUserMetaData: jsonb(),
//   isSuperAdmin: boolean(),
//   createdAt: timestamp().defaultNow(),
//   updatedAt: timestamp().defaultNow(),
//   phone: varchar({ length: 255 }),
//   phoneConfirmedAt: timestamp(),
//   phoneChange: varchar({ length: 255 }),
//   phoneChangeToken: varchar({ length: 255 }),
//   phoneChangeSentAt: timestamp(),
//   confirmedAt: timestamp(),
//   emailChangeTokenCurrent: varchar({ length: 255 }),
//   emailChangeConfirmStatus: integer().default(0),
//   bannedUntil: timestamp(),
//   reauthenticationToken: varchar({ length: 255 }),
//   reauthenticationSentAt: timestamp(),
//   isSsoUser: boolean().default(false),
//   deletedAt: timestamp(),
//   isAnonymous: boolean().default(false),
//   providers: text().array().default([]),
// });

// export type User = typeof usersTable.$inferSelect;
export type Profile = typeof profileTable.$inferSelect;