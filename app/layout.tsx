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
        <div className="mx-auto max-w-[600px]">
          {children}
        </div>
      </body>
    </html>
  );
}
