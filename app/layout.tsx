import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twitter Clone Project",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-bg-dark bg-bg-light text-text-main dark:text-text-main-dark">
        <div className="dark:border-x-border-dark border-x-border-light mx-auto flex min-h-screen max-w-[600px] flex-col border-x">
          {children}
        </div>
      </body>
    </html>
  );
}
