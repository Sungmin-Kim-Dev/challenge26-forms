import { AllTweetsProps } from "@/app/(home)/page";
import TweetBox from "@/components/TweetBox";

interface TweetListProps {
  allTweets: AllTweetsProps;
}

export default function TweetList({ allTweets }: TweetListProps) {
  console.log(allTweets);

  return (
    <div>
      {allTweets.map((tweet) => (
        <TweetBox key={tweet.id} {...tweet} />
      ))}
    </div>
  );
}
