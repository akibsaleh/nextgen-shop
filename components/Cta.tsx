'use client';
import ShortArrowRight from '@/components/icons/ShortArrowRight';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const Cta = ({
  title,
  content,
  link,
  rounded = false,
}: {
  title: string;
  content: string;
  link: string;
  rounded?: boolean;
}) => {
  const [lineHovered, setLineHovered] = React.useState(false);
  return (
    <section className='w-full bg-[url("/general-banner.jpg")] bg-cover bg-center flex flex-col items-center justify-center text-center gap-y-7 py-12 relative before:content-[""] before:absolute before:z-0 before:w-full before:h-full  before:top-0 before:left-0 before:bg-primary-foreground/90'>
      <div className='max-w-[1260px] w-full flex flex-col justify-center items-center gap-y-7 z-10'>
        <div
          className={cn(
            'bg-[#d9d9d9]',
            rounded ? 'size-[160px] rounded-full' : 'size-[120px]',
          )}
        ></div>
        <h3 className='font-bold text-4xl text-accent uppercase'>{title}</h3>
        <p className='text-left font-medium text-lg text-primary'>{content}</p>
        <Button
          variant='link'
          onMouseEnter={() => setLineHovered(true)}
          onMouseLeave={() => setLineHovered(false)}
          asChild
        >
          <Link href={link}>
            <span className='mr-2'>Learn More</span>
            <ShortArrowRight hover={lineHovered} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Cta;
