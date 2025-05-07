import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-7xl">
          <FaTwitter className="text-t-blue" />
        </span>
        <h1 className="text-4xl">Welcome!</h1>
      </div>
    </div>
  );
}
