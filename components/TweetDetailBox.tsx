import { formatToDateTime, formatToTimeAgo } from "@/lib/utils";
import Link from "next/link";
import { FaRegHeart, FaRetweet } from "react-icons/fa6";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

interface TweetProps {
  tweet: string;
  id: number;
  created_at: Date;
  updated_at: Date;
  userId: number;
  user: {
    username: string;
    email: string;
  };
  isOwner: boolean;
}

export default function TweetDetailBox({
  tweet,
  id,
  created_at,
  updated_at,
  userId,
  user,
  isOwner,
}: TweetProps) {
  return (
    <div className="dark:border-x-border-dark border-x-border-light border-b px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="size-10 rounded-full bg-teal-600" />
        <div className="flex flex-auto items-center justify-between">
          <div className="flex flex-col">
            <span className="font-extrabold">{user.username}</span>
            <span className="text-sub">{user.email}</span>
          </div>
          {isOwner ? (
            <button className="hover:bg-text-main/10 hover:dark:bg-x-border-light/10 cursor-pointer rounded-full p-2 text-2xl">
              <PiDotsThreeOutlineFill />
            </button>
          ) : null}
        </div>
      </div>
      <div>
        <div className="py-3">
          <span className="text-lg">{tweet}</span>
        </div>
        <div className="dark:border-x-border-dark border-x-border-light border-b py-4">
          <span className="text-sub">{formatToDateTime(created_at)}</span>
          <span className="text-sub"> · </span>
          <span className="text-sub">
            <strong>571</strong> Views
          </span>
        </div>
        <div className="text-sub mt-3 flex gap-20 text-xl">
          <div className="flex items-center gap-1">
            <HiOutlineChatBubbleOvalLeft />
            <span className="text-lg">2</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRetweet />
            <span className="text-lg">5</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRegHeart />
            <span className="text-lg">3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
