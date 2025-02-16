import { LogoIcon } from '@/assets/svgs';
import { cn } from '@/lib/utils';

const Logo = ({ className, ...props }: { className?: string }) => {
  return (
    <div
      className={cn(
        'flex select-none items-center gap-1 font-semibold leading-none',
        className,
      )}
      {...props}
    >
      <LogoIcon className='size-[2em]' />
      <span className='text-white'>
        Hoo<span className='text-turq'>Bank</span>
      </span>
    </div>
  );
};
export default Logo;
