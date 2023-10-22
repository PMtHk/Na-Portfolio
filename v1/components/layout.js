// 페이지에 적용할 모든 레이아웃 요소를 넣는 곳.

import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  // 컨테이너 처럼 사용된다.
  return (
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
