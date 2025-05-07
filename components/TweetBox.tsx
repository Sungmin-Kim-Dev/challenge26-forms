import { FaRegHeart, FaRetweet } from "react-icons/fa6";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

export default function TweetBox() {
  return (
    <div className="flex py-3">
      <div className="me-2">
        <div className="size-10 rounded-full bg-teal-600" />
      </div>
      <div>
        <div>
          <span className="font-extrabold">Username</span>
          <span className="text-sub"> · </span>
          <span className="text-sub">11h</span>
        </div>
        <div>
          <span>
            Tweet contents Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Magni beatae inventore, placeat itaque vero soluta harum
            aliquam tenetur corrupti autem aut saepe quis quasi, sint sunt eaque
            quos cumque recusandae?
          </span>
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
