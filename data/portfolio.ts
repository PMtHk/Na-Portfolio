import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    project: "ChatGPT를 활용한 CS용어 가로세로 낱말퍼즐",
    project_url: "https://github.com/orgs/CrosS-Puzzle/repositories",
    description: [
      "React-query를 활용해 Suspense 적용 및 Redux-toolkit을 이용한 사용자 문제 풀이 상태 관리",
      "OpenAI API를 활용한 CS 관련 단어 및 설명 생성 프롬프트 작성",
      "낱말퍼즐 생성 알고리즘 구현 (기여도 80%)",
      "CodeDeploy와 Github-Actions를 활용한 스케일링 가능한 Blue/Green 배포 구현",
    ],
    date_start: "2024-01",
    date_end: "개발 중",
    img_src: "/cross-online.png",
    img_link: "https://gaoncare.kr",
    skills: [
      "React.js",
      "React-Query",
      "Redux-toolkit",
      "TypeScript",
      "TailwindCSS",
      "Express.js",
      "MongoDB",
      "AWS",
    ],
    live: false,
  },
  {
    project: "가온방문요양센터 홈페이지 제작",
    project_url: "https://github.com/PMtHk/gaon",
    description: [
      "SEO 최적화 (SEO 100점 달성, Lighthouse, PageSpeed Insights)",
      "Next/Image 컴포넌트를 활용한 이미지 최적화_블로그 (LCP 시간 모바일 28s → 1.7s, 데스크톱 7.3s → 0.5s, Lighthouse)",
      "Slack API를 활용한 신규 상담등록 알림 구현",
      "Amplify를 활용한 Serverless 배포",
    ],
    date_start: "2024-01",
    date_end: "2024-03",
    img_src: "/gaoncare.png",
    img_link: "https://gaoncare.kr",
    skills: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "MongoDB",
      "Amplify",
      "Slack API",
    ],
    live: true,
  },
  {
    project: "MatchGG - 게이머를 위한 매칭 플랫폼",
    project_url: "https://github.com/PMtHk/MATCH_FE_TS",
    description: [
      "Suspense 및 ErrorBoundary를 활용한 data-fetching 단일 책임 컴포넌트 구현",
      "CloudFront, Lambda@Edge, Sharp 라이브러리를 활용한 이미지 리사이징이 가능한 이미지 CDN 구현",
      "Firebase Realtime DB와 Cloud Messaging를 활용한 실시간 채팅 및 인앱 및 웹 푸시 알림 구현",
      "Github-actions와 Firebase Hosting를 활용한 배포 자동화",
    ],
    date_start: "2023-01",
    date_end: "2023-09",
    img_src: "/matchgg.png",
    img_link: "https://github.com/PMtHk/MATCH_FE_TS",
    skills: [
      "React.js",
      "Redux-toolkit",
      "TypeScript",
      "Styled-components",
      "Firebase",
      "AWS",
      "Github-Actions",
    ],
    live: false,
  },
  {
    project: "Ozzang - 의류 관리 서비스",
    project_url: "https://github.com/PMtHk/Ozzang_SE2022",
    description: [
      "JWT을 이용한 사용자 인증 구현",
      "S3, MongoDB를 이용한 이미지 업로드 및 관리",
    ],
    date_start: "2022-03",
    date_end: "2022-06",
    img_src: "/ozzang.png",
    img_link: "https://github.com/PMtHk/Ozzang_SE2022",
    skills: [
      "React",
      "React-redux",
      "JavaScript",
      "emotion/styled",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
    ],
    live: false,
  },
];
