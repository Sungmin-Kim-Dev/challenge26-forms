// 위에는 사용자 이름 표시
// bio 표시, 없으면 작성해보라는 문구
// bio 편집 버튼
// 편집 버튼 누르면 기존의 소개에서 편집해야 함
// 나의 트윗 목록
// 좋아요 목록

import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
      include: {
        tweets: {
          orderBy: {
            created_at: "desc",
          },
        },
        likes: {
          orderBy: {
            added_at: "desc",
          },
          include: {
            tweet: true,
          },
        },
      },
    });
    if (user) {
      return user;
    }
  }
  notFound();
}

export default async function Profile() {
  const user = await getUser();
  console.log(user);
  console.log(user.likes);
  const logOut = async () => {
    "use server";
    const session = await getSession();
    session.destroy();
    redirect("/");
  };

  return (
    <div className="mt-6 px-4">
      <h1>Welcome! {user?.username}</h1>
      <form action={logOut}>
        <button className="bg-t-blue rounded-xl p-2">Log Out</button>
      </form>
      <p>{user?.bio ?? "Why don't you tell about yourself?"}</p>
      <button className="bg-t-blue rounded-xl p-2">Edit Profile</button>
      <h3>My tweets</h3>
      <ul>{user?.tweets.map((tweet, i) => <li key={i}>{tweet.tweet}</li>)}</ul>
      <h3>Likes</h3>
      <ul>
        {user?.likes.map((like, i)=> (
          <li key={i}>{like.tweet.tweet}</li>
        ) )}
      </ul>
    </div>
  );
}
