import Image from 'next/image';
import Gradients from './ui/gradients';
import { image } from 'motion/react-client';
import images from '@/assets/images';

const Billing = () => {
  return (
    <section className='padding-inline relative'>
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

          <div className='flex items-center gap-8'>
            <Image src={images.appstore} alt='download on appstore' />
            <Image src={images.playstore} alt='get it on google play' />
          </div>
        </article>

        {/* Left column */}
        <div className='max-w-[32.8rem]'>
          <Image src={images.payment} alt='payment successful' />
        </div>
      </div>

      {/* Colourful gradients */}
      <Gradients className='absolute -left-20 top-0 h-full w-64' />
    </section>
  );
};
export default Billing;
