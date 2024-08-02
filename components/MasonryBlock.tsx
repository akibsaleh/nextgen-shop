import Link from 'next/link';
import OneLiner from './OneLiner';
import { Button } from './ui/button';

const gallery = [
  { link: '#', caption: 'Caption but a really long three liners caption' },
  { link: '#', caption: 'Caption but long two liners caption' },
  { link: '#', caption: 'Caption but a really long three liners caption' },
  {
    link: '#',
    caption:
      'Caption but a really long three liners caption. this time it is 4 liner',
  },
  { link: '#', caption: 'Caption but a really long three liners caption' },
  { link: '#', caption: 'Caption but long two liners caption' },
  { link: '#', caption: 'Caption but a really long three liners caption' },
  {
    link: '#',
    caption:
      'Caption but a really long three liners caption. this time it is 4 liner',
  },
  { link: '#', caption: 'Caption but a really long three liners caption' },
  { link: '#', caption: 'Caption but long two liners caption' },
  { link: '#', caption: 'Caption but a really long three liners caption' },
  {
    link: '#',
    caption:
      'Caption but a really long three liners caption. this time it is 4 liner',
  },
];

const firstColumn = gallery.filter((_, index) => index % 4 === 0);
const secondColumn = gallery.filter((_, index) => index % 4 === 1);
const thirdColumn = gallery.filter((_, index) => index % 4 === 2);
const fourthColumn = gallery.filter((_, index) => index % 4 === 3);

const MasonryBlock = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center pb-[90px] gap-y-8 relative'>
      <OneLiner
        title='h2 title one liner'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor'
      />

      {/* Masonry */}

      <div className='mt-[54px] grid grid-cols-4 max-w-[1373px] gap-[31px]'>
        <div className='grid gap-[31px]'>
          {firstColumn.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className='w-80 h-[422px] bg-[#a0a0a0] transition-all duration-150 border-none hover:border-solid focus-visible:outline-none hover:border-2 hover:border-white rounded-[37px] hover:drop-shadow-[0_11px_55.8px_#adb9e052] overflow-hidden flex flex-col justify-end group'
            >
              <div className='text-center w-full py-5 px-14 bg-white border-none outline-none ring-0 translate-y-full group-hover:translate-y-0 transition-all duration-200'>
                <strong>{item.caption}</strong>
              </div>
            </Link>
          ))}
        </div>
        <div className='grid gap-[31px] mt-[92px]'>
          {secondColumn.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className='w-80 h-[422px] bg-[#a0a0a0] transition-all duration-150 border-none hover:border-solid focus-visible:outline-none hover:border-2 hover:border-white rounded-[37px] hover:drop-shadow-[0_11px_55.8px_#adb9e052] overflow-hidden flex flex-col justify-end group'
            >
              <div className='text-center w-full py-5 px-14 bg-white border-none outline-none ring-0 translate-y-full group-hover:translate-y-0 transition-all duration-200'>
                <strong>{item.caption}</strong>
              </div>
            </Link>
          ))}
        </div>
        <div className='grid gap-[31px]'>
          {thirdColumn.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className='w-80 h-[422px] bg-[#a0a0a0] transition-all duration-150 border-none hover:border-solid focus-visible:outline-none hover:border-2 hover:border-white rounded-[37px] hover:drop-shadow-[0_11px_55.8px_#adb9e052] overflow-hidden flex flex-col justify-end group'
            >
              <div className='text-center w-full py-5 px-14 bg-white border-none outline-none ring-0 translate-y-full group-hover:translate-y-0 transition-all duration-200'>
                <strong>{item.caption}</strong>
              </div>
            </Link>
          ))}
        </div>
        <div className='grid gap-[31px] mt-[92px]'>
          {fourthColumn.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className='w-80 h-[422px] bg-[#a0a0a0] transition-all duration-150 border-none hover:border-solid focus-visible:outline-none hover:border-2 hover:border-white rounded-[37px] hover:drop-shadow-[0_11px_55.8px_#adb9e052] overflow-hidden flex flex-col justify-end group'
            >
              <div className='text-center w-full py-5 px-14 bg-white border-none outline-none ring-0 translate-y-full group-hover:translate-y-0 transition-all duration-200'>
                <strong>{item.caption}</strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='bg-gradient-to-b from-primary/0 to-primary/100 w-full h-[410px] bg flex justify-center items-end absolute bottom-0 left-0 right-0'>
        <Button className='max-w-[237px] w-full'>Learn More</Button>
      </div>
    </section>
  );
};

export default MasonryBlock;
