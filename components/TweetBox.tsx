import db from "@/lib/db";
import { formatToTimeAgo } from "@/lib/utils";
import { FaRegHeart, FaRetweet } from "react-icons/fa6";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

interface TweetProps {
  tweet: string;
  id: number;
  created_at: Date;
  updated_at: Date;
  userId: number;
  user: {
    username: string;
  };
}

export default function TweetBox({
  tweet,
  id,
  created_at,
  updated_at,
  userId,
  user,
}: TweetProps) {
  return (
    <div className="dark:border-x-border-dark border-x-border-light flex border-b px-4 py-3">
      <div className="me-2">
        <div className="size-10 rounded-full bg-teal-600" />
      </div>
      <div>
        <div>
          <span className="font-extrabold">{user.username}</span>
          <span className="text-sub"> · </span>
          <span className="text-sub">
            {formatToTimeAgo(created_at.toString())}
          </span>
          <span className="text-sub">{/* {created_at.toTimeString()} */}</span>
        </div>
        <div>
          <span>{tweet}</span>
        </div>
        <div className="text-sub mt-3 flex gap-20 text-lg">
          <div className="flex items-center gap-1">
            <HiOutlineChatBubbleOvalLeft />
            <span className="text-sm">2</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRetweet />
            <span className="text-sm">5</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRegHeart />
            <span className="text-sm">3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
