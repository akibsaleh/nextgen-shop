'use client';
import LongChevronRight from '@/components/icons/LongChevronRight';
import { Button } from '@/components/ui/button';
import React from 'react';
import ShortArrowRight from '../components/icons/ShortArrowRight';
import Header from '../components/header';

export default function Home() {
  const [hovered, setHovered] = React.useState(false);
  const [lineHovered, setLineHovered] = React.useState(false);
  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-y-5 rounded-x'>
      <Header />
      <Button>Learn More About Shop</Button>
      <Button
        variant='cta'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className='mr-3'>Main CTA 1</span>
        <LongChevronRight hover={hovered} />
      </Button>
      <div className='w-full p-10 bg-primary-foreground'>
        <Button
          variant='link'
          onMouseEnter={() => setLineHovered(true)}
          onMouseLeave={() => setLineHovered(false)}
        >
          <span className='mr-2'>Learn More</span>
          <ShortArrowRight hover={lineHovered} />
        </Button>
      </div>
    </main>
  );
}
