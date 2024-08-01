'use client';
import Link from 'next/link';
import React from 'react';
import { cn } from '../../lib/utils';
import { Button } from './button';

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
              'w-fit min-w-36 absolute top-[55px] left-1/2 -translate-x-1/2 pt-3.5 border-b-4 border-accent z-50',
              open ? 'block' : 'hidden',
            )}
          >
            <nav className='w-full bg-white h-full relative flex flex-col p-2 before:content-[""] before:block  before:border-l-transparent before:border-l-[8px] before:border-r-transparent before:border-r-[8px] before:border-b-white before:border-b-[14px] before:absolute before:-top-3.5 before:left-1/2 before:-translate-x-1/2'>
              {nestedSubMenu.map((item) => (
                <Button key={item.id} asChild>
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
