import BackBtn from "@/components/BackBtn";
import TweetDetailBox from "@/components/TweetDetailBox";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound } from "next/navigation";

async function getIsOwner(userId: number) {
  const session = await getSession();
  if (session.id) {
    return session.id === userId;
  } else {
    return false;
  }
}

async function getTweet(id: number) {
  const tweet = await db.tweet.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
          email: true,
        },
      },
    },
  });
  return tweet;
}

export default async function TweetDetails({
  params,
}: {
  params: { id: string };
}) {
  const id = Number((await params).id);
  if (isNaN(id)) {
    return notFound();
  }
  const tweet = await getTweet(id);
  if (!tweet) {
    return notFound();
  }
  const isOwner = await getIsOwner(tweet.userId);
  return (
    <div>
      <div className="ms-2 flex items-center gap-12 py-2">
        <BackBtn />
        <span className="text-xl font-extrabold">Post</span>
      </div>
      <TweetDetailBox {...tweet} isOwner={isOwner} />
    </div>
  );
}
