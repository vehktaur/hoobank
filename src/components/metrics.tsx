import { cn } from '@/lib/utils';

// The main Metrics component
const Metrics = () => {
  return (
    <section className='padding-inline mt-16 ~mb-20/32 md:mt-10'>
      <div className='container flex flex-col items-center md:flex-row md:gap-5'>
        <Metric className='mr-auto md:mr-0' stat='3800+' metric='User Active' />

        {/* Divider visually separates the Metric components. */}
        <Divider />

        <Metric stat='230+' metric='Trusted by Company' />

        {/* Divider visually separates the Metric components. */}
        <Divider />

        <Metric
          className='ml-auto md:ml-0'
          stat='$230M+'
          metric='Transaction'
        />
      </div>
    </section>
  );
};

export default Metrics;

// The Metric component: displays a stat and a label (metric) side by side.
const Metric = ({
  className,
  stat,
  metric,
}: {
  className?: string;
  stat: string;
  metric: string;
}) => (
  <p
    className={cn(
      'flex items-center font-semibold uppercase text-white ~text-3xl/[2.56rem] ~gap-4/6',
      className,
    )}
  >
    {/* Display the numeric or textual statistic. */}
    {stat} {/* Display the metric label with different styling. */}
    <span className='text-turq-radial-gradient text-base font-normal xl:text-[1.28rem]'>
      {metric}
    </span>
  </p>
);

// Divider component: a small vertical line (hidden on mobile, visible on larger screens).
const Divider = () => (
  <div className='mx-auto w-10 flex-shrink-0 rounded-3xl border-t bg-white/60 md:h-[0.86rem] md:w-[0.11rem] md:border-none' />
);
