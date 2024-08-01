import Image from 'next/image';

const Hero = () => {
  return (
    <section className='w-full min-h-[740px] h-full flex flex-col items-center justify-center'>
      <Image src='/logo-white.png' width={90} height={90} alt='logo white' />
    </section>
  );
};

export default Hero;
