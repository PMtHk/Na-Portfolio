'use client';

import { Header } from '@/components/Header';
import { useEffect, useState } from 'react';
import { Main } from '@/components/Main';
import useThrottle from '@/utils/useThrottle';

export default function Home(this: any) {
  const [xy, setXY] = useState({ x: 0, y: 0 });

  // active link
  const [activeLink, setActiveLink] = useState('about');

  const handleMouseMove = (e: any) => {
    setXY({ x: e.clientX, y: e.clientY });
  };

  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = (e: any) => {
    setScrollY(e.target.scrollTop);
  };

  const throttleScroll = useThrottle(handleScroll, 300);

  useEffect(() => {
    if (!document) return;

    const aboutSection = document.getElementById('about');
    const experienceSection = document.getElementById('experience');
    const projectsSectionTop = document.getElementById('projects');

    const aboutSectionBottom = aboutSection?.getBoundingClientRect()?.bottom;
    const aboutSectionTop = aboutSection?.getBoundingClientRect()?.top;
    const experienceSectionBottom =
      experienceSection?.getBoundingClientRect().bottom;
    const projectsSectionBottom =
      projectsSectionTop?.getBoundingClientRect().bottom;
    if (
      aboutSectionTop !== undefined &&
      aboutSectionBottom !== undefined &&
      scrollY + aboutSectionTop <= aboutSectionBottom
    ) {
      setActiveLink('about');
    } else if (
      aboutSectionTop !== undefined &&
      experienceSectionBottom !== undefined &&
      scrollY + aboutSectionTop <= experienceSectionBottom
    ) {
      setActiveLink('experience');
    } else if (
      aboutSectionTop !== undefined &&
      projectsSectionBottom !== undefined &&
      scrollY + aboutSectionTop <= projectsSectionBottom
    ) {
      setActiveLink('projects');
    } else {
      setActiveLink('');
    }
  }, [scrollY]);

  return (
    <div onMouseMove={(e) => handleMouseMove(e)}>
      <div
        style={{
          background: `radial-gradient(500px at ${xy.x}px ${xy.y}px, #d5a45a1c, transparent 95%)`,
        }}
        className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'
      ></div>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 lg:h-screen'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <Header activeLink={activeLink} />
          <Main handleScroll={throttleScroll} />
        </div>
      </div>
    </div>
  );
}
