import { redirect } from "next/navigation";

export default function NotFound() {
 
  return <div className="h-[1000px] 2xl:h-[1500px] w-full mx-10 flex flex-col items-center rounded-2xl">{redirect("/")}</div>;
}