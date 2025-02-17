import Link from 'next/link';
import Button from './ui/button';

const TryNow = () => {
  return (
    // Outer section with top and bottom margins
    <section className='padding-inline section'>
      {/* Main container for content*/}
      <div className='container flex flex-col items-start justify-between gap-8 rounded-2.5xl bg-black-gradient ~px-6/24 ~py-12/[4.5rem] sm:flex-row sm:items-center'>
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
