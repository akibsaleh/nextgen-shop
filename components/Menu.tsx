'use client';
import MenuItem from './ui/MenuItem';

type MenuItem = {
  id: string;
  link: string;
  label: string;
  submenu?: {
    id: string;
    link: string;
    label: string;
    nestedSubmenu?: { id: string; link: string; label: string }[];
  }[];
}[];

const primaryMenu: MenuItem = [
  {
    id: '1',
    link: '/section-1',
    label: 'Section 1',
    submenu: [
      { id: '1a', link: '/sub-section-1', label: 'Sub Section' },
      { id: '1b', link: '/sub-section-2', label: 'Sub Section 2' },
      { id: '1c', link: '/sub-section-3', label: 'Sub Section 3' },
      { id: '1d', link: '/sub-section-4', label: 'Sub Section 4' },
    ],
  },
  {
    id: '2',
    link: '/section-2',
    label: 'Section 2',
    submenu: [
      { id: '2a', link: '/sub-section-5', label: 'Sub Section 5' },
      { id: '2b', link: '/sub-section-6', label: 'Sub Section 6' },
      { id: '2c', link: '/sub-section-7', label: 'Sub Section 7' },
      { id: '2d', link: '/sub-section-8', label: 'Sub Section 8' },
    ],
  },
  {
    id: '3',
    link: '/section-3',
    label: 'Section 3',
    submenu: [
      { id: '3a', link: '/sub-section-10', label: 'Sub Section 10' },
      { id: '3b', link: '/sub-section-11', label: 'Sub Section 11' },
      { id: '3c', link: '/sub-section-12', label: 'Sub Section 12' },
      { id: '3d', link: '/sub-section-13', label: 'Sub Section 13' },
    ],
  },
  { id: '4', link: '/2-sub-divs', label: 'Sub divs' },
  { id: '5', link: '/section-4', label: 'Section 4' },
  { id: '6', link: '/two-liner-1', label: 'Two Liner 1' },
  { id: '7', link: '/two-liner-2', label: 'Two Liner 2' },
  { id: '8', link: '/section-5', label: 'Section 5' },
  { id: '9', link: '/two-liner-3', label: 'Two Liner 3' },
];

const Menu = () => {
  return (
    <nav className='w-full flex gap-x-3 justify-end'>
      {primaryMenu.length > 0 &&
        primaryMenu.map((item) => (
          <MenuItem
            key={item.id}
            link={item.link}
            label={item.label}
            subMenu={item.submenu}
          />
        ))}
    </nav>
  );
};

export default Menu;
