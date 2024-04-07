import Mail from "@/icons/Mail";
import Phone from "@/icons/Phone";
import Link from "next/link";

export default function Title() {
  return (
    <>
      <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl text-white">
        나주엽
      </h1>
      <h2 className="mt-2 text-xl lg:text-2xl xl:text-3xl text-white">
        프론트엔드 개발자
      </h2>

      <div className="mt-6 flex flex-col gap-2">
        <Link href="tel:+821024965168" className="flex items-center">
          <Phone width="24px" height="24px" fill="#94A4B8" />
          <span className="ml-4 text-slate-400">010.2496.5168</span>
        </Link>
        <Link href="mailto:zooby88@gmail.com" className="flex items-center">
          <Mail width="24px" height="24px" fill="#94A4B8" />
          <span className="ml-4 text-slate-400">zooby88@gmail.com</span>
        </Link>
      </div>
    </>
  );
}
