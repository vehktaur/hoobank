import { cn } from '@/lib/utils';

const Gradients = ({ className }: { className?: string }) => (
  <div id='gradients' className={cn('*:absolute *:z-0', className)}>
    <div className='pink-gradient top-0 h-[35%] w-[40%]' />

    <div className='white-gradient bottom-0 size-[80%]' />

    <div className='blue-gradient bottom-20 right-20 size-[50%]' />
  </div>
);

export default Gradients;
