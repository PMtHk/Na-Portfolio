import ArrowRight from "@/icons/ArrowRight";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "페이지를 찾을 수 없습니다.",
};

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-slate-400">
      <div className="flex items-center">
        <h1 className="text-2xl font-light  py-4 border-r pr-6 border-slate-400 mr-6">
          404
        </h1>
        <h2 className="font-thin"> 존재하지 않는 페이지 입니다.</h2>
      </div>

      <Link href="/" className="group mt-20 font-extralight flex items-center">
        <span className="hidden group-hover:inline-block">
          <ArrowRight width="24" height="24" fill="#94A3B8" className="mr-4" />
        </span>
        홈으로 이동
      </Link>
    </div>
  );
}
