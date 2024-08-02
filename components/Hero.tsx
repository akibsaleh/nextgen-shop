'use client';
import LongChevronRight from '@/components/icons/LongChevronRight';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <section className='w-full min-h-[740px] h-full bg-[url("/hero-banner.png")] bg-cover bg-center flex flex-col items-center justify-center gap-y-7 relative before:content-[""] before:absolute before:z-0 before:w-full before:h-full before:min-h-[740px] before:top-0 before:left-0 before:bg-primary-foreground/55'>
      <Image
        src='/logo-white.png'
        width={90}
        height={90}
        alt='logo white'
        className='z-[1]'
      />
      <div className='w-fit text-center z-[1]'>
        <h1 className='font-extrabold text-5xl text-accent uppercase mb-2'>
          Welcome to Grand Shop
        </h1>
        <h2 className='font-semibold text-2xl text-primary'>
          A Single Line of Motto Text
        </h2>
      </div>
      <Button
        variant='cta'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className='mr-3'>Main CTA 1</span>
        <LongChevronRight hover={hovered} />
      </Button>
    </section>
  );
};

export default Hero;
