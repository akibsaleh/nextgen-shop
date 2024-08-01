import { cn } from '@/lib/utils';

const LongChevronRight = ({ hover }: { hover?: boolean }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={hover ? 57 : 37}
      className={cn(
        'duration-300 max-w-[57px]',
        hover ? 'w-[57px]' : 'w-[37px]',
      )}
      height='18'
      fill='none'
      viewBox={`0 0 auto 18`}
    >
      <path
        className='group-hover:stroke-accent-foreground duration-300 delay-50'
        stroke='#003080'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2.8'
        d='M2.212 9h32.576m0 0l-7-7m7 7l-7 7'
      >
        {hover ? (
          <animate
            attributeName='d'
            from='M2.212 9h32.576m0 0l-7-7m7 7l-7 7'
            to='M2.212 9h52.576m0 0l-7-7m7 7l-7 7'
            dur='0.3s'
            begin={hover ? 0 : 'indefinite'}
            fill='freeze'
          />
        ) : (
          <animate
            attributeName='d'
            from='M2.212 9h52.576m0 0l-7-7m7 7l-7 7'
            to='M2.212 9h32.576m0 0l-7-7m7 7l-7 7'
            dur='0.3s'
            end={hover ? 'indefinite' : 0}
            fill='freeze'
          />
        )}
      </path>
    </svg>
  );
};

export default LongChevronRight;
