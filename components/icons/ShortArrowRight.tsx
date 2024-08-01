import { cn } from '@/lib/utils';

const ShortArrowRight = ({ hover }: { hover?: boolean }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={cn(
        'duration-300 max-w-[57px]',
        hover ? 'w-[57px]' : 'w-[37px]',
      )}
      height='20'
      fill='none'
    >
      <path
        className='group-hover:stroke-accent duration-300 delay-50'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4.167 10h11.666m0 0L10 4.167M15.833 10L10 15.833'
      >
        {hover ? (
          <animate
            attributeName='d'
            from='M4.167 10h11.666m0 0L10 4.167M15.833 10L10 15.833'
            to='M4.167 10h17.666m0 0L10 4.167M15.833 10L10 15.833'
            dur='0.3s'
            begin={hover ? 0 : 'indefinite'}
            fill='freeze'
          />
        ) : (
          <animate
            attributeName='d'
            from='M4.167 10h17.666m0 0L10 4.167M15.833 10L10 15.833'
            to='M4.167 10h11.666m0 0L10 4.167M15.833 10L10 15.833'
            dur='0.3s'
            end={hover ? 'indefinite' : 0}
            fill='freeze'
          />
        )}
      </path>
    </svg>
  );
};

export default ShortArrowRight;
