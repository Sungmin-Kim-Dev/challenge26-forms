import TweetList from "@/components/TweetList";
import db from "@/lib/db";
import { Prisma } from "@prisma/client";
import { FaTwitter } from "react-icons/fa";

async function getAllTweets() {
  const tweets = await db.tweet.findMany({
    // select: {
    //   id: true,
    //   tweet: true,
    //   created_at: true,
    //   updated_at: true,
    //   userId: true,
    // },
    orderBy: {
      created_at: "desc",
    },
  });
  return tweets;
}

export type AllTweetsProps = Prisma.PromiseReturnType<typeof getAllTweets>;

export default async function Home() {
  const allTweets = await getAllTweets();

  return (
    <div className="dark:border-x-border-dark border-x-border-light flex min-h-screen flex-col border-x">
      <div className="dark:border-x-border-dark border-x-border-light border-b py-4">
        <FaTwitter className="text-t-blue mx-auto text-5xl" />
      </div>
      <div className="dark:border-x-border-dark border-x-border-light flex border-b px-4 pt-2">
        <div className="me-2 mt-3">
          <div className="bg-t-dark-gray size-10 rounded-full" />
        </div>
        <div className="w-full py-2">
          <span className="block h-32 py-2 text-xl font-semibold">
            What's happening?
          </span>
          <div className="flex justify-end">
            <button className="bg-text-main dark:bg-x-border-light dark:text-text-main rounded-full px-4 py-2 text-sm font-extrabold text-white opacity-50">
              Post
            </button>
          </div>
        </div>
      </div>
      <TweetList allTweets={allTweets} />
    </div>
  );
}
