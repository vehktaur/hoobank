'use client';

import images from '@/assets/images';
import { ArrowUpIcon, DiscountIcon, EllipseGradient } from '@/assets/svgs';
import Image from 'next/image';
import Gradients from './ui/gradients';
import Link from 'next/link';

import { gsap, useGSAP } from '@/lib/gsap';
import { useRef } from 'react';

const Hero = () => {
  const tl = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top center',
          end: '75% center',
          toggleActions: 'play reverse restart reverse',
        },
      });

      tl.current
        .from('h1', {
          y: '-100vh',
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          duration: 1.25,
        })
        .from('#hero p', {
          y: '200',
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          duration: 0.75,
        })
        .from(
          '#robot_hand',
          {
            x: '100vw',
            opacity: 0,
            ease: 'power1.inOut',
            duration: 1.5,
          },
          1,
        )
        .from('#gradients', {
          scale: 0,
          opacity: 0,
          duration: 1,
        });
    },
    { dependencies: [] },
  );

  return (
    <section id='hero' className='nav-gap section'>
      <div className='flex flex-col ~text-sm/lg md:flex-row md:items-center'>
        {/* Left Column on Desktop */}
        <article className='relative shrink-0 pt-12 ~pl-5/[8.5rem] md:pt-0'>
          {/* Discount */}
          <div className='mb-6 flex w-fit items-center overflow-y-clip rounded-sxl bg-[linear-gradient(125deg,_#272727_0%,_#11101D_100%)] px-[0.63rem] uppercase ~gap-1/[0.81rem]'>
            <DiscountIcon />
            <p className='~text-xs/lg'>
              <span className='text-white'>20%</span> discount for{' '}
              <span className='text-white'>1 month</span> account
            </p>
          </div>

          {/* Hero Heading */}
          <div className='overflow-y-clip'>
            <h1 className='relative w-fit max-w-[41.9rem] pe-12 font-semibold text-white ~text-4xl/[4.5rem] ~mb-7/10 ~leading-[3.5rem]/[6.3rem] md:pe-0'>
              The Next <br />{' '}
              <span className='text-turq-radial-gradient'>Generation</span>{' '}
              <br /> Payment Method.
              {/* Get Started  */}
              <Link
                href='/'
                className='group absolute grid place-items-center overflow-hidden rounded-full ~text-sm/lg ~top-0/3 ~right-4/[3rem] ~size-[5.5rem]/[8.75rem]'
              >
                <EllipseGradient className='absolute inset-0 size-full' />
                <p className='text-turq-linear-gradient font-medium'>
                  <span className='flex items-center gap-1'>
                    Get{' '}
                    <span className='relative overflow-clip ~size-5/6'>
                      {/* Arrow 1: visible by default, slides out on hover */}
                      <ArrowUpIcon className='absolute size-full transition-transform duration-300 group-hover:-translate-y-10 group-hover:translate-x-10' />
                      {/* Arrow 2: hidden by default, slides in on hover */}
                      <ArrowUpIcon className='absolute size-full -translate-x-10 translate-y-10 transform transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0' />
                    </span>
                  </span>{' '}
                  Started
                </p>
              </Link>
            </h1>
          </div>

          {/* Hero Paragraph */}
          <p>
            Our team of experts uses a methodology to identify <br /> the credit
            cards most likely to fit your needs. <br /> We examine annual
            percentage rates, annual fees.
          </p>

          {/* Colourful bg gradients */}
          <Gradients className='absolute -left-[10%] top-0 h-full w-[35%]' />
        </article>

        <div
          id='robot_hand'
          className='relative ml-auto max-w-[40rem] pl-5 ~pt-8/16'
        >
          <Image
            className='relative z-[3] w-full object-contain'
            src={images.robot_palm}
            alt='robot palm'
            priority
          />

          {/* Colourful bg gradients */}
          <Gradients className='absolute left-1/2 top-1/2 h-3/4 w-1/2 [transform:translate(-50%,-50%)]' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
