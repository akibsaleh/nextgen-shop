'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const SubMenuItem = ({
  link,
  label,
  nestedSubMenu,
}: {
  link: string;
  label: string;
  nestedSubMenu?: { id: string; link: string; label: string }[];
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className='w-full h-fit relative'
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Button variant='subMenuItem' size='subMenuItem'>
        {nestedSubMenu && link ? (
          <span>{label}</span>
        ) : (
          <Link href={link!}>
            <span>{label}</span>
          </Link>
        )}
        {nestedSubMenu && nestedSubMenu?.length > 0 && (
          <div
            className={cn(
              'w-fit absolute top-0 -left-0 translate-x-[140px] pl-3.5 z-50',
              open ? 'block' : 'hidden',
            )}
          >
            <nav className='w-full bg-white border-b-4 border-accent h-full relative flex flex-col p-2 before:content-[""] before:block  before:border-b-transparent before:border-b-[9px] before:border-t-transparent before:border-t-[9px] before:border-r-white before:border-r-[16px] before:absolute before:top-3.5 before:-left-1.5 before:-translate-x-1/2'>
              {nestedSubMenu.map((item) => (
                <Button
                  variant='subMenuItem'
                  size='subMenuItem'
                  key={item.id}
                  asChild
                >
                  <Link href={item.link}>{item.label}</Link>
                </Button>
              ))}
            </nav>
          </div>
        )}
      </Button>
    </div>
  );
};

export default SubMenuItem;
