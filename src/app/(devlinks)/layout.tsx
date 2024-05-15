import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "devlinks",
  description: "share your links and details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen overflow-hidden scrollbar-hide ">
      <Navbar />
      {children}
    </div>
  );
}
