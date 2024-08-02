import { Button } from '@/components/ui/button';
import Image from 'next/image';

const About = () => {
  return (
    <section className='w-full bg-primary py-[90px] flex justify-center items-center'>
      <div className='w-full max-w-[1216px] relative'>
        <div className='max-w-[706px] w-full bg-primary rounded-[30px] border-[#D9D9D9] border my-[63px] p-[90px] space-y-8 relative z-20'>
          <h2 className='text-[40px] font-bold leading-tight'>
            About The Quick <br />
            Shop this is H2
          </h2>
          <p className='font-medium text-lg text-[#21252999]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
            ornare congue ante a facilisis. Vestibulum sed magna in ligula
            aliquam luctus non in ante. Nullam egestas, nunc at rutrum
            tincidunt, purus metus malesuada ante, at cursus massa turpis sit
            amet
          </p>
          <Button>Learn More About Shop</Button>
        </div>
        <Image
          src='/about-banner.jpg'
          width={949}
          height={678}
          alt='About'
          className='rounded-[37px] absolute top-0 right-0 z-10'
        />
      </div>
    </section>
  );
};

export default About;
