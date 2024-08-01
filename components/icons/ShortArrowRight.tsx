'use client';
import { cn } from '@/lib/utils';
import React from 'react';

const ShortArrowRight = ({ hover }: { hover?: boolean }) => {
  const pathRef = React.useRef<SVGPathElement>(null);
  React.useEffect(() => {
    if (pathRef.current) {
      if (hover) {
        pathRef.current.setAttribute(
          'from',
          'M1.16663 6.99996H12.8333M12.8333 6.99996L6.99996 1.16663M12.8333 6.99996L6.99996 12.8333',
        );
        pathRef.current.setAttribute(
          'to',
          'M4 7.00008H21.8334M21.8334 7.00008L16.0001 1.16675M21.8334 7.00008L16.0001 12.8334M21.8334 7.00008H1',
        );
      } else {
        pathRef.current.setAttribute(
          'from',
          'M1.16663 6.99996H12.8333M12.8333 6.99996L6.99996 1.16663M12.8333 6.99996L6.99996 12.8333',
        );
        pathRef.current.setAttribute(
          'to',
          'M1.16663 6.99996H12.8333M12.8333 6.99996L6.99996 1.16663M12.8333 6.99996L6.99996 12.8333',
        );
      }
    }
  }, [hover]);
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={hover ? 23 : 14}
      className={cn(
        'max-w-[23px] duration-300 overflow-visible',
        hover ? 'w-[23px] ' : 'w-[14px]',
      )}
      height={14}
      fill='none'
      viewBox={`0 0 ${hover ? 23 : 14} 14`}
    >
      <path
        className='stroke-white group-hover:stroke-accent'
        stroke=''
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        d={
          hover
            ? 'M4 7.00008H21.8334M21.8334 7.00008L16.0001 1.16675M21.8334 7.00008L16.0001 12.8334M21.8334 7.00008H1'
            : 'M1.16663 6.99996H12.8333M12.8333 6.99996L6.99996 1.16663M12.8333 6.99996L6.99996 12.8333'
        }
      >
        <animate
          ref={pathRef}
          attributeName='d'
          dur='0.3s'
          begin={hover ? '0.6s' : 'indefinite'}
          fill='freeze'
        />
      </path>
    </svg>
  );
};

export default ShortArrowRight;
