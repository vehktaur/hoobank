'use client';

import Button from './ui/button';
import { PaperPlaneIcon, ShieldIcon, StarIcon } from '@/assets/svgs';
import Gradients from './ui/gradients';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const MoneyBusiness = () => {
  return (
    <section className='padding-inline section'>
      <div className='container flex flex-col items-center justify-between gap-10 sm:flex-row'>
        {/* Left Column */}
        <article>
          <h2 className='section-heading max-w-[38rem]'>
            You do the business, we&apos;ll handle the money.
          </h2>

          <p className='mb-4 max-w-[35.625rem]'>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>

          <Button asChild>
            <Link href='/'>Get Started </Link>
          </Button>
        </article>

        {/* Right column */}
        <div className='max-w-[30rem]'>
          <ul className='group flex flex-col gap-1'>
            <Benefit Icon={<StarIcon />} title='Rewards'>
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </Benefit>
            <Benefit Icon={<ShieldIcon />} title='100% Secured'>
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </Benefit>
            <Benefit Icon={<PaperPlaneIcon />} title='Balance Transfer'>
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </Benefit>
          </ul>
        </div>
      </div>

      {/* Colourful gradients */}
      <Gradients className='absolute -left-20 bottom-0 h-1/2 w-64' />
    </section>
  );
};
export default MoneyBusiness;

const Benefit = ({
  className,
  Icon,
  title,
  children,
}: {
  className?: string;
  Icon: React.ReactElement;
  title: string;
  children: React.ReactNode;
}) => (
  <li
    className={cn(
      'flex w-full items-center gap-5 rounded-2.5xl shadow-shade transition-colors duration-300 ~px-4/5 ~pt-3.5/5 ~pb-3/4 hover:bg-black-gradient',
      className,
    )}
  >
    <div className='*:w-7/8 grid flex-shrink-0 place-items-center rounded-full bg-[rgba(9,151,124,0.10)] ~size-12/16 ~p-3/[0.8rem]'>
      {Icon}
    </div>

    <div>
      <h3 className='mb-2 font-semibold capitalize text-white ~text-base/lg'>
        {title}
      </h3>
      <p className='~text-sm/base'>{children}</p>
    </div>
  </li>
);
