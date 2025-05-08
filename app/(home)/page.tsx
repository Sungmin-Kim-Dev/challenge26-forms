import TweetBox from "@/components/TweetBox";
import { FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="dark:border-x-border-dark border-x-border-light *:dark:border-x-border-dark *:border-x-border-light flex min-h-screen flex-col border-x *:border-b *:px-4">
      <div className="py-4">
        <FaTwitter className="text-t-blue mx-auto text-5xl" />
      </div>
      <div className="flex pt-2">
        <div className="me-2 mt-3">
          <div className="bg-t-dark-gray size-10 rounded-full" />
        </div>
        <div className="w-full py-2">
          <span className="block h-32 py-2 text-xl font-semibold">
            What's happening?
          </span>
          <div className="flex justify-end">
            <button className="bg-text-main text-white dark:bg-x-border-light dark:text-text-main rounded-full px-4 py-2 text-sm font-extrabold opacity-50">
              Post
            </button>
          </div>
        </div>
      </div>
      <TweetBox />
    </div>
  );
}
