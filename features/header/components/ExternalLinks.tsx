import Github from "@/icons/Github";
import Resume from "@/icons/Resume";
import Velog from "@/icons/Velog";
import Link from "next/link";

export default function ExternalLinks() {
  return (
    <ul className="flex gap-4 mt-6" aria-label="external links">
      <li>
        <Link href="https://github.com/PMtHk" rel="nonreferrer" target="_blank">
          <span className="sr-only">Github Link</span>
          <Github width="28px" height="28px" fill="#94A4B8" />
        </Link>
      </li>

      <li>
        <Link
          href="https://velog.io/@pmthk__"
          rel="nonreferrer"
          target="_blank"
        >
          <span className="sr-only">Velog Link</span>
          <Velog width="28px" height="28px" fill="#94A4B8" />
        </Link>
      </li>

      <li>
        <Link href="/JooyeobNa_Resume.pdf" download="나주엽_이력서" target="_blank">
          <span className="sr-only">Download Resume</span>
          <Resume width="28px" height="28px" fill="#94A4B8" />
        </Link>
      </li>
    </ul>
  );
}
