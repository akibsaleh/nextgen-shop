import { Button } from '@/components/ui/button';
import Image from 'next/image';

const InfoCta = () => {
  return (
    <section className='w-full py-[90px] relative'>
      <div className='w-full max-w-[1300px] space-y-[185px] mx-auto relative z-20 flex flex-col justify-center'>
        <div className='max-w-[706px] w-full bg-primary rounded-[30px] border-[#D9D9D9] border p-[50px] space-y-6 self-end mr-10'>
          <h2 className='text-[32px] font-bold leading-tight'>
            Title of the section
            <br />
            text h2
          </h2>
          <p className='font-medium text-lg text-[#21252999]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
            ornare congue ante a facilisis. Vestibulum sed magna in ligula
            aliquam luctus non in ante. Nullam egestas, nunc at rutrum
            tincidunt, purus metus malesuada ante, at cursus massa turpis sit
            amet nulla. Quisque non ante quis lorem fermentum auctor sed sed
            ligula. Aenean turpis sapien, efficitur quis placerat
          </p>
          <Button className='max-w-[167px]'>Learn More</Button>
        </div>
        <div className='max-w-[706px] w-full bg-primary rounded-[30px] border-[#D9D9D9] border p-[50px] space-y-6 self-start ml-10'>
          <h2 className='text-[32px] font-bold leading-tight'>
            Title of the section
            <br />
            text h2
          </h2>
          <p className='font-medium text-lg text-[#21252999]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
            ornare congue ante a facilisis. Vestibulum sed magna in ligula
            aliquam luctus non in ante. Nullam egestas, nunc at rutrum
            tincidunt, purus metus malesuada ante, at cursus massa turpis sit
            amet nulla. Quisque non ante quis lorem fermentum auctor sed sed
            ligula. Aenean turpis sapien, efficitur quis placerat
          </p>
          <Button className='max-w-[167px]'>Learn More</Button>
        </div>
      </div>
      <Image
        src='/general-banner.jpg'
        width={1300}
        height={860}
        alt='info CTA'
        className='rounded-[28px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[1300px] h-auto'
      />
    </section>
  );
};

export default InfoCta;
