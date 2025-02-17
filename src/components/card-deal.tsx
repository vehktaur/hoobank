'use client';

import Image from 'next/image';
import Button from './ui/button';
import Gradients from './ui/gradients';
import images from '@/assets/images';
import Link from 'next/link';

import { gsap, useGSAP } from '@/lib/gsap';
import { useRef } from 'react';

const CardDeal = () => {
  const tl = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '#card_deal',
          scrub: true,
          pin: true,
        },
      });

      tl.current
        .from('#card_deal h2', {
          y: 500,
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          duration: 1,
        })
        .from('#card_deal article p', {
          x: '-300',
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          duration: 1,
        })
        .fromTo(
          '#card_deal a',
          {
            scale: 0.6,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
          },
          2,
        )
        .from('#card_deal_img', {
          scale: 0.6,
          opacity: 0,
          duration: 1,
        })
        .from(
          '#card_deal #gradients',
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
    <section id='card_deal' className='padding-inline section'>
      <div className='container flex flex-col items-center justify-between ~gap-6/10 sm:flex-row'>
        {/* Left Column */}
        <article>
          <h2 className='section-heading max-w-[35.625rem]'>
            Find a better card deal in few easy steps.
          </h2>

          <p className='mb-4 max-w-[31.25rem]'>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>

          <Button asChild>
            <Link href='/'>Get Started</Link>
          </Button>
        </article>

        {/* Right column */}
        <div id='card_deal_img' className='max-w-[32.8rem]'>
          <Image src={images.card_deal} alt='payment methods and card deal' />
        </div>
      </div>

      {/* Colourful gradients */}
      <Gradients className='absolute -left-20 -top-8 h-1/3 w-64' />
    </section>
  );
};
export default CardDeal;
