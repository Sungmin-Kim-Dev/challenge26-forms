import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session";

interface Routes {
  [key: string]: boolean;
}

// 로그인 유저는 로그인 페이지, 계정 만들기 페이지 접근 시 메인 페이지("/")로 이동
// 로그인 안 한 유저는 profile 페이지 등 보호된 페이지 접근 시 로그인 페이지("/login")로 이동
// 로그인 페이지로 자동 이동
// 오브젝트가 어레이보다 값을 찾기가 빠름.
// array는 값을 찾으려면 하나씩 다 비교해야 함
// publicOnlyUrls: 로그인하지 않은 사용자만 접근해야 하는 경로

const publicOnlyUrls: Routes = {
  "/log-in": true,
  "/create-account": true,
};

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const pathname = request.nextUrl.pathname;
  const isPublicOnlyPath = publicOnlyUrls[pathname];

  if (!session.id) {
    if (pathname === "/profile") {
      return NextResponse.redirect(new URL("/log-in", request.url));
    }
  } else {
    if (isPublicOnlyPath) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
