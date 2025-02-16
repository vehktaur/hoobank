import images from '@/assets/images/images';
import { ArrowUpIcon, DiscountIcon, EllipseGradient } from '@/assets/svgs';
import Image from 'next/image';
import Gradients from './ui/gradients';

const Hero = () => {
  return (
    <section className='mb-20'>
      <div className='flex flex-col ~text-sm/lg md:flex-row md:items-center'>
        {/* Left Column on Desktop */}
        <article className='relative shrink-0 pt-12 ~pl-5/[8.5rem] md:pt-0'>
          {/* Discount */}
          <div className='mb-6 flex w-fit items-center rounded-sxl bg-[linear-gradient(125deg,_#272727_0%,_#11101D_100%)] px-[0.63rem] uppercase ~gap-1/[0.81rem]'>
            <DiscountIcon />
            <p className='~text-xs/lg'>
              <span className='text-white'>20%</span> discount for{' '}
              <span className='text-white'>1 month</span> account
            </p>
          </div>

          {/* Hero Heading */}
          <h1 className='relative w-fit max-w-[41.9rem] pe-12 font-semibold text-white ~text-4xl/[4.5rem] ~mb-7/10 ~leading-[3.5rem]/[6.3rem] md:pe-0'>
            The Next <br />{' '}
            <span className='text-turq-radial-gradient'>Generation</span> <br />{' '}
            Payment Method.
            {/* Get Started  */}
            <button className='group absolute grid place-items-center rounded-full ~text-sm/lg ~top-0/3 ~right-4/[3rem] ~size-[5.5rem]/[8.75rem]'>
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
            </button>
          </h1>

          {/* Hero Paragraph */}
          <p>
            Our team of experts uses a methodology to identify <br /> the credit
            cards most likely to fit your needs. <br /> We examine annual
            percentage rates, annual fees.
          </p>

          {/* Colourful bg gradients */}
          <Gradients className='absolute -left-[10%] top-0 h-full w-[35%]' />
        </article>

        <div className='relative ml-auto max-w-[40rem] pl-5 ~pt-8/16'>
          <Image
            className='relative z-[3] w-full object-contain'
            src={images.robot_palm}
            alt='robot palm'
            priority
          />

          {/* Colourful bg gradients */}
          <Gradients />
        </div>
      </div>
    </section>
  );
};
export default Hero;
