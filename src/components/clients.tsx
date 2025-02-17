'use client';

import images from '@/assets/images';
import Image from 'next/image';

import { gsap, useGSAP } from '@/lib/gsap';
import { useRef } from 'react';

// Clients component displays a row of client logos
const Clients = () => {
  // Create a timeline reference
  const tl = useRef<GSAPTimeline>(null);

  useGSAP(() => {
    // Create a timeline for the Metrics section.
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: '#clients',
        scrub: true,
        pin: true,
      },
    });

    // Animate each Metric component.
    tl.current.from('#clients .container div', {
      opacity: 0,
      x: '-360',
      scale: 0.6,
      stagger: 0.25,
      duration: 0.75,
    });
  }, []);

  return (
    <section id='clients' className='padding-inline section'>
      <div className='container flex items-center justify-between gap-5'>
        {/* Airbnb logo */}
        <div>
          <Image src={images.airbnb} alt='airbnb' />
        </div>
        {/* Binance logo */}
        <div>
          <Image className='max-w-full' src={images.binance} alt='binance' />
        </div>
        {/* Coinbase logo */}
        <div>
          <Image className='max-w-full' src={images.coinbase} alt='coinbase' />
        </div>
        {/* Dropbox logo */}
        <div>
          <Image className='max-w-full' src={images.dropbox} alt='dropbox' />
        </div>
      </div>
    </section>
  );
};

export default Clients;
