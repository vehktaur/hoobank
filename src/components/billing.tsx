'use client';

import Image from 'next/image';
import Gradients from './ui/gradients';
import images from '@/assets/images';

import { gsap, useGSAP } from '@/lib/gsap';
import { useRef } from 'react';

const Billing = () => {
  const tl = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '#billing',
          scrub: true,
          pin: true,
        },
      });

      tl.current
        .from('#billing h2', {
          x: '100vw',
          opacity: 0,
          duration: 1.25,
        })
        .from('#billing article p', {
          x: '-300',
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          duration: 1,
        })
        .from('#billing .stores', {
          x: '300',
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          stagger: 0.5,
          duration: 1,
        })
        .from('#billing_payment', {
          scale: 0.6,
          opacity: 0,
          duration: 1,
        })
        .from(
          '#billing #gradients',
          {
            scale: 0,
            opacity: 0,
            duration: 1,
          },
          2,
        );
    },
    { dependencies: [] },
  );

  return (
    <section id='billing' className='padding-inline section'>
      <div className='container flex flex-col items-center justify-between gap-10 sm:flex-row-reverse'>
        {/* Right Column */}
        <article className='max-w-[30rem]'>
          <h2 className='section-heading'>
            Easily control your billing & invoicing.
          </h2>

          <p className='~mb-8/12'>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>

          <div className='stores flex items-center gap-8'>
            <Image src={images.appstore} alt='download on appstore' />
            <Image src={images.playstore} alt='get it on google play' />
          </div>
        </article>

        {/* Left column */}
        <div id='billing_payment' className='max-w-[32.8rem]'>
          <Image src={images.payment} alt='payment successful' />
        </div>
      </div>

      {/* Colourful gradients */}
      <Gradients className='absolute -left-20 top-0 h-full w-64' />
    </section>
  );
};
export default Billing;
