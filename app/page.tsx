"use client";

import Header from "@/features/header/Header";
import { Fragment, useEffect, useState } from "react";
import { Main } from "@/components/Main";
import useThrottle from "@/utils/useThrottle";
import LastUpdated from "./LastUpdated";

export default function Home(this: any) {
  // for scroll event -----------------------------------
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = (e: any) => {
    setScrollY(e.target.scrollTop);
  };

  const throttleScroll = useThrottle(handleScroll, 300);

  // active link ----------------------------------------
  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    if (!document) return;

    // about me
    const aboutSection = document.getElementById("about");
    const aboutSectionBottom = aboutSection?.getBoundingClientRect()?.bottom;
    const aboutSectionTop = aboutSection?.getBoundingClientRect()?.top;

    // work experience
    const experienceSection = document.getElementById("experience");
    const experienceSectionBottom =
      experienceSection?.getBoundingClientRect().bottom;

    // individual or group projects
    const projectsSectionTop = document.getElementById("projects");
    const projectsSectionBottom =
      projectsSectionTop?.getBoundingClientRect().bottom;

    // educations
    const educationsSection = document.getElementById("educations");
    const educationsSectionBottom =
      educationsSection?.getBoundingClientRect().bottom;

    // others
    const othersSection = document.getElementById("others");
    const othersSectionBottom = othersSection?.getBoundingClientRect().bottom;

    if (
      aboutSectionTop !== undefined &&
      aboutSectionBottom !== undefined &&
      scrollY + aboutSectionTop <= aboutSectionBottom
    ) {
      setActiveLink("about");
    } else if (
      aboutSectionTop !== undefined &&
      experienceSectionBottom !== undefined &&
      scrollY + aboutSectionTop <= experienceSectionBottom
    ) {
      setActiveLink("experience");
    } else if (
      aboutSectionTop !== undefined &&
      projectsSectionBottom !== undefined &&
      scrollY + aboutSectionTop <= projectsSectionBottom
    ) {
      setActiveLink("projects");
    } else if (
      aboutSectionTop !== undefined &&
      othersSectionBottom !== undefined &&
      scrollY + aboutSectionTop <= othersSectionBottom
    ) {
      setActiveLink("others");
    } else {
      setActiveLink("");
    }
  }, [scrollY]);

  return (
    <Fragment>
      <LastUpdated />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 lg:h-screen">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4">
          <Header activeLink={activeLink} />
          <Main handleScroll={throttleScroll} />
        </div>
      </div>
    </Fragment>
  );
}
