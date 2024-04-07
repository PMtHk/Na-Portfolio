import Certificates from "@/features/landing/components/Certificates";
import Educations from "@/features/landing/components/Educations";

export default function Others() {
  return (
    <>
      <h2 className="mt-2 mb-6 font-bold uppercase tracking-widest text-sm lg:text-2xl lg:normal-case lg:tracking-normal text-slate-200">
        Others
      </h2>
      <Educations />
      <Certificates />
    </>
  );
}
