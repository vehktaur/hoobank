'use client';

import images from '@/assets/images';
import { QuoteIcon } from '@/assets/svgs';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import Gradients from './ui/gradients';

import { gsap, useGSAP } from '@/lib/gsap';
import { useRef } from 'react';

// Main section displaying testimonials
const Testimonials = () => {
  const tl = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '#testimonials',
          start: '20% center',
          scrub: true,
          pin: true,
        },
      });

      tl.current
        .from('#testimonials h2', {
          y: -500,
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          duration: 1.25,
        })
        .from('#testimonials .first_p', {
          x: '100vw',
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          duration: 1,
        })
        .from('#testimonials #gradients', { scale: 0, opacity: 0, duration: 1 })
        .fromTo(
          '#testimonials .quote_card',
          {
            backgroundImage:
              'linear-gradient(144.39deg,#ffffff -278.56%,#6d6d6d -78.47%,#11101d 91.61%)',
            opacity: 0,
            scaleX: 0.5,
            x: '-100vw',
          },
          {
            backgroundImage: 'none',
            opacity: 1,
            scaleX: 1,
            x: 0,
            stagger: 1,
            duration: 1.5,
          },
        );
    },
    { dependencies: [] },
  );

  return (
    <section id='testimonials' className='padding-inline section'>
      <div className='container'>
        <section className='mb-20 flex flex-col items-center justify-between ~gap-0/6 sm:flex-row'>
          <h2 className='section-heading max-w-[29.375rem]'>
            What people are saying about us
          </h2>
          <p className='first_p mx-auto max-w-[28rem]'>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </section>

        <section className='grid justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3'>
          <QuoteCard
            name='Herman Jensen'
            image={images.herman}
            position='Founder & Leader'
          >
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </QuoteCard>
          <QuoteCard
            name='Steve Mark'
            image={images.steve}
            position='Founder & Leader'
          >
            Money makes your life easier. If you&apos;re lucky to have it,
            you&apos;re lucky.
          </QuoteCard>
          <QuoteCard
            name='Kenn Gallagher'
            image={images.kenn}
            position='Founder & Leader'
          >
            It is usually people in the money business, finance, and
            international trade that are really rich.
          </QuoteCard>
        </section>
      </div>
      <Gradients className='absolute -right-20 top-0 h-full w-72' />
    </section>
  );
};

export default Testimonials;

// Card component for an individual testimonial
const QuoteCard = ({
  className,
  children,
  name,
  image,
  position,
}: {
  className?: string;
  children: React.ReactNode;
  name: string;
  image: string | StaticImageData;
  position: string;
}) => {
  return (
    <article
      className={cn(
        'quote_card flex max-w-[23rem] flex-col rounded-2.5xl px-10 py-[3.75rem] transition-all duration-300 hover:bg-black-gradient md:h-[24.7rem]',
        className,
      )}
    >
      <div />
      <QuoteIcon className='mb-10 flex-shrink-0 ~h-6/[1.73rem] ~w-8/[2.66rem]' />
      <p className='mb-6 text-white ~text-base/lg'>{children}</p>
      <div className='mt-auto flex items-center gap-4'>
        <Image className='size-12 rounded-full' src={image} alt={name} />
        <div>
          <h3 className='capitalize text-white ~text-base/lg'>{name}</h3>
          <p className='~text-sm/base'>{position}</p>
        </div>
      </div>
    </article>
  );
};
