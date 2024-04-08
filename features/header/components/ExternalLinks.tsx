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
          <Github width="28px" height="28px" fill="#E2E8F0" />
        </Link>
      </li>

      <li>
        <Link
          href="https://velog.io/@pmthk__"
          rel="nonreferrer"
          target="_blank"
        >
          <span className="sr-only">Velog Link</span>
          <Velog width="28px" height="28px" fill="#E2E8F0" />
        </Link>
      </li>

      <li>
        <Link href="/나주엽_프론트엔드_개발자.pdf" download="나주엽_프론트엔드_개발자" target="_blank">
          <span className="sr-only">Download Resume</span>
          <Resume width="28px" height="28px" fill="#E2E8F0" />
        </Link>
      </li>
    </ul>
  );
}
