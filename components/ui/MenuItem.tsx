'use client';
import { Button } from '@/components/ui/button';
import SubMenuItem from '@/components/ui/SubMenuItem';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type Submenu = {
  id: string;
  link: string;
  label: string;
  nestedSubmenu?: { id: string; link: string; label: string }[];
}[];

const MenuItem = ({
  link,
  label,
  subMenu,
}: {
  link?: string;
  label: string;
  subMenu?: Submenu;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className='w-full max-w-[102px] h-fit relative group'
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Button variant='menuItem' size='menuItem'>
        {subMenu && link ? (
          <span>{label}</span>
        ) : (
          <Link href={link!}>
            <span>{label}</span>
          </Link>
        )}
      </Button>
      {subMenu && subMenu?.length > 0 && (
        <div
          className={cn(
            'w-fit min-w-36 absolute top-[55px] left-1/2 group-last:left-full -translate-x-1/2 group-last:-translate-x-full pt-3.5 border-b-4 border-accent z-50',
            open ? 'block' : 'hidden',
          )}
        >
          <nav className='w-full bg-white h-full relative flex flex-col p-2 before:content-[""] before:block before:border-l-transparent before:border-l-[8px] before:border-r-transparent before:border-r-[8px] before:border-b-white before:border-b-[14px] before:absolute before:-top-3.5 before:left-1/2 group-last:before:left-full before:-translate-x-1/2 group-last:before:-translate-x-[60px]'>
            {subMenu.map((item) => (
              <SubMenuItem
                key={item.id}
                link={item.link}
                label={item.label}
                nestedSubMenu={item.nestedSubmenu}
              />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
