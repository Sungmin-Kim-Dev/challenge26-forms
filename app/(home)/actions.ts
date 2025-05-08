"use server";

import db from "@/lib/db";

export async function getMoreTweets(page: number) {
  const tweets = await db.tweet.findMany({
    // select: {
    //   id: true,
    //   tweet: true,
    //   created_at: true,
    //   updated_at: true,
    //   userId: true,
    // },
    skip: page * 2,
    take: 2,
    orderBy: {
      created_at: "desc",
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
  return tweets;
}
