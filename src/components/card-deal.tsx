import Image from 'next/image';
import Button from './ui/button';
import Gradients from './ui/gradients';
import images from '@/assets/images/images';
import Link from 'next/link';

const CardDeal = () => {
  return (
    <section className='padding-inline relative pb-32 pt-20'>
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
        <div className='max-w-[32.8rem]'>
          <Image src={images.card_deal} alt='payment methods and card deal' />
        </div>
      </div>

      {/* Colourful gradients */}
      <Gradients className='absolute -left-20 -top-8 h-1/3 w-64' />
    </section>
  );
};
export default CardDeal;
