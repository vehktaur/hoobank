import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      ref={ref}
      className={cn(
        'rounded-sxl inline-block bg-turq-linear-gradient font-medium text-[#00040E] transition-all duration-300 ~text-sm/lg ~px-6/8 ~py-3/4 hover:rounded-2xl hover:bg-turq-radial-gradient hover:opacity-90',
        className,
      )}
      {...props}
    />
  );
});

Button.displayName = 'Button';
export default Button;
