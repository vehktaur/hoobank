import Logo from './ui/logo';
import Link from 'next/link';
import { CopyrightIcon, SocialIcons } from '@/assets/svgs';
import { Abel } from 'next/font/google';
import { cn } from '@/lib/utils';

// Interface defining the shape of each link item
interface Link {
  id: string;
  name: string;
  path: string;
}

// Load the Abel font with specified subsets and weight
const abel = Abel({
  subsets: ['latin'],
  weight: ['400'],
});

// Arrays containing links for each footer section
const usefulLinks: Link[] = [
  { id: 'a1b2', name: 'Content', path: '/' },
  { id: 'c3d4', name: 'How it Works', path: '/' },
  { id: 'e5f6', name: 'Create', path: '/' },
  { id: 'g7h8', name: 'Explore', path: '/' },
  { id: 'i9j0', name: 'Terms & Services', path: '/' },
];

const communityLinks: Link[] = [
  { id: 'k1l2', name: 'Help Center', path: '/' },
  { id: 'm3n4', name: 'Partners', path: '/' },
  { id: 'o5p6', name: 'Suggestions', path: '/' },
  { id: 'q7r8', name: 'Blog', path: '/' },
  { id: 's9t0', name: 'Newsletters', path: '/' },
];

const partnerLinks: Link[] = [
  { id: 'u1v2', name: 'Our Partner', path: '/' },
  { id: 'w3x4', name: 'Become a Partner', path: '/' },
];

// Renders a titled list of links
const LinksList = ({ title, links }: { title: string; links: Link[] }) => (
  <div className='text-center sm:text-left'>
    <h2 className='font-medium text-white ~text-base/lg ~mb-2/4'>{title}</h2>
    <ul className='flex flex-col ~text-sm/base ~gap-1.5/3'>
      {links.map((link) => (
        <li
          className='transition-colors duration-300 hover:text-white'
          key={link.id}
        >
          <Link className='block' href={link.path}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Main Footer component
const Footer = () => {
  return (
    <footer className='padding-inline bg-[rgba(11,10,12,0.60)] ~pt-12/[4.5rem]'>
      <div className='container'>
        {/* Top section with logo, description, and multiple link lists */}
        <section className='grid justify-items-center gap-6 ~pb-8/10 sm:grid-cols-2 sm:gap-20 md:justify-between md:[grid-template-columns:repeat(4,_minmax(0,_auto))]'>
          {/* Logo and a short descriptive text */}
          <div>
            <Logo className='justify-center ~text-2xl/[2.54rem] ~mb-7/[2.14rem] sm:justify-start' />
            <p className='max-w-80 text-center ~text-sm/lg sm:text-left'>
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>

          {/* Render each section of links */}
          <LinksList title='Useful Links' links={usefulLinks} />
          <LinksList title='Community' links={communityLinks} />
          <LinksList title='Partner' links={partnerLinks} />
        </section>

        {/* Horizontal divider */}
        <hr className='border-[#3F3E45]' />

        {/* Bottom section for copyright and social icons */}
        <section className='flex flex-col items-center justify-between gap-4 ~py-6/[1.87rem] sm:flex-row'>
          <div className='flex flex-wrap items-center ~text-sm/lg ~gap-3/[0.94rem]'>
            <span className={cn(abel.className, '~text-base/[1.3rem]')}>
              Copyright
            </span>
            <CopyrightIcon />
            <span>2021 HooBank. All Rights Reserved.</span>
          </div>
          <SocialIcons className='cursor-pointer' />
        </section>
      </div>
    </footer>
  );
};

export default Footer;
