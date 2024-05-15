import Header from "@/components/home/Header";
import UserCard from "@/components/home/UserCard";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full h-screen ">
      <div className="w-full p-3 bg-mainColor h-[30%] rounded-b-2xl">
        <Header />
      </div>
      <div className="absolute top-[100px] md:left-[43%] left-[33%]">
        <UserCard />
      </div>
    </div>
  );
}
