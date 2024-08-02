'use client';
import MenuItem from '@/components/ui/MenuItem';

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
  {
    id: '4',
    link: '/2-sub-divs',
    label: 'Sub divs',
    submenu: [
      {
        id: '4a',
        link: '/sub-section-14',
        label: 'Sub Section 14',
        nestedSubmenu: [
          {
            id: '4aa',
            link: '/nested-sub-section-1',
            label: 'Sub section under 1',
          },
          {
            id: '4ab',
            link: '/nested-sub-section-2',
            label: 'Sub section under 2',
          },
          {
            id: '4ac',
            link: '/nested-sub-section-3',
            label: 'Sub section under 3',
          },
          {
            id: '4ad',
            link: '/nested-sub-section-4',
            label: 'Sub section under 4',
          },
          {
            id: '4ae',
            link: '/nested-sub-section-5',
            label: 'Sub section under 5',
          },
        ],
      },
      {
        id: '4b',
        link: '/sub-section-15',
        label: 'Sub Section 15',
        nestedSubmenu: [
          {
            id: '4ba',
            link: '/nested-sub-section-6',
            label: 'Sub section under 6 wider',
          },
          {
            id: '4bb',
            link: '/nested-sub-section-7',
            label: 'Sub section under 7 wider',
          },
          {
            id: '4bc',
            link: '/nested-sub-section-8',
            label: 'Sub section under 8 wider',
          },
          {
            id: '4bd',
            link: '/nested-sub-section-9',
            label: 'Sub section under 9 wider',
          },
          {
            id: '4ae',
            link: '/nested-sub-section-10',
            label: 'Sub section under 10 wider',
          },
        ],
      },
    ],
  },
  {
    id: '5',
    link: '/section-4',
    label: 'Section 4',
    submenu: [
      { id: '5a', link: '/sub-section-10', label: 'Sub Section' },
      { id: '5b', link: '/sub-section-11', label: 'Sub Section' },
      { id: '5c', link: '/sub-section-12', label: 'Sub Section' },
      { id: '5d', link: '/sub-section-13', label: 'Sub Section' },
    ],
  },
  {
    id: '6',
    link: '/two-liner-1',
    label: 'Two Liner 1',
    submenu: [
      { id: '6a', link: '/sub-section-10', label: 'Sub Section' },
      { id: '6b', link: '/sub-section-11', label: 'Sub Section' },
      { id: '6c', link: '/sub-section-12', label: 'Sub Section' },
      { id: '6d', link: '/sub-section-13', label: 'Sub Section' },
    ],
  },
  {
    id: '7',
    link: '/two-liner-2',
    label: 'Two Liner 2',
    submenu: [
      { id: '7a', link: '/sub-section-10', label: 'Sub Section' },
      { id: '7b', link: '/sub-section-11', label: 'Sub Section' },
      { id: '7c', link: '/sub-section-12', label: 'Sub Section' },
      { id: '7d', link: '/sub-section-13', label: 'Sub Section' },
    ],
  },
  {
    id: '8',
    link: '/section-5',
    label: 'Section 5',
    submenu: [
      { id: '8a', link: '/sub-section-10', label: 'Sub Section' },
      { id: '8b', link: '/sub-section-11', label: 'Sub Section' },
      { id: '8c', link: '/sub-section-12', label: 'Sub Section' },
      { id: '8d', link: '/sub-section-13', label: 'Sub Section' },
    ],
  },
  {
    id: '9',
    link: '/two-liner-3',
    label: 'Two Liner 3',
    submenu: [
      { id: '9a', link: '/sub-section-10', label: 'Sub Section Right Aligned' },
      { id: '9b', link: '/sub-section-11', label: 'Sub Section' },
    ],
  },
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
