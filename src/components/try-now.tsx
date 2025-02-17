'use client';

import Link from 'next/link';
import Button from './ui/button';

import { gsap, useGSAP } from '@/lib/gsap';
import { useRef } from 'react';

const TryNow = () => {
  const tl = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '#try_now',
          scrub: true,
          pin: true,
        },
      });

      tl.current
        .from('#try_now .container', {
          scale: 0.7,
          opacity: 0,
          duration: 1.5,
        })
        .from('#try_now h2', {
          y: '500',
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          duration: 1.25,
        })
        .from('#try_now p', {
          x: '-100vw',
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          duration: 1,
        })
        .fromTo(
          '#try_now a',
          {
            scale: 0.6,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
          },
        );
    },
    { dependencies: [] },
  );

  return (
    // Outer section with top and bottom margins
    <section id='try_now' className='padding-inline section'>
      {/* Main container for content*/}
      <div className='container overflow-clip flex flex-col items-start justify-between gap-8 rounded-2.5xl bg-black-gradient ~px-6/24 ~py-12/[4.5rem] sm:flex-row sm:items-center'>
        {/* Heading and description text */}
        <div>
          <h2 className='section-heading'>Let&apos;s try our service now!</h2>
          <p className='max-w-[29rem]'>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>

        {/* Call-to-action button  */}
        <Button className='whitespace-nowrap' asChild>
          <Link href='/'>Get Started</Link>
        </Button>
      </div>
    </section>
  );
};

export default TryNow;
