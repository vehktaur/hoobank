import { cn } from '@/lib/utils';

const Gradients = ({
  className,
  pink = true,
  white = true,
  blue = true,
}: {
  className?: string;
  pink?: boolean;
  white?: boolean;
  blue?: boolean;
}) => (
  <div className={cn('*:absolute *:z-0', className)}>
    {pink && (
      <div className='pink-gradient top-0 h-[35%] w-[40%]' />
    )}
    {white && (
      <div className='white-gradient bottom-0 size-[80%]' />
    )}
    {blue && (
      <div className='blue-gradient bottom-20 right-20 size-[50%]' />
    )}
  </div>
);

export default Gradients;
