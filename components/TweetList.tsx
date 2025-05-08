"use client";

import { getMoreTweets } from "@/app/(home)/actions";
import { InitialTweetsProps } from "@/app/(home)/page";
import TweetBox from "@/components/TweetBox";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface TweetListProps {
  initialTweets: InitialTweetsProps;
}

export default function TweetList({
  initialTweets: initialTweets,
}: TweetListProps) {
  const [tweets, setTweets] = useState(initialTweets);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  useEffect(() => {
    const fetchTweets = async () => {
      setIsLoading(true);
      const newTweets = await getMoreTweets(page);
      if (newTweets.length !== 0) {
        setTweets(newTweets);
      } else {
        setIsLastPage(true);
      }
      setIsLoading(false);
    };
    fetchTweets();
  }, [page]);

  return (
    <>
      <div>
        {tweets.map((tweet) => (
          <TweetBox key={tweet.id} {...tweet} />
        ))}
      </div>
      <div className="mx-auto mt-5">
        <button
          className="pagination-btn"
          disabled={page === 0}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <FaAngleLeft />
        </button>
        <button
          className="pagination-btn"
          disabled={isLastPage}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <FaAngleRight />
        </button>
      </div>
    </>
  );
}
