import { LogoIcon } from '@/assets/svgs';

const Logo = () => {
  return (
    <div className='flex select-none items-center gap-1 font-semibold ~text-base/lg'>
      <LogoIcon />
      <span className='text-white'>
        Hoo<span className='text-turq'>Bank</span>
      </span>
    </div>
  );
};
export default Logo;
