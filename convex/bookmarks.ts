import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const { db } = ctx;
    return db.query("bookmarks").collect();
  },
});
