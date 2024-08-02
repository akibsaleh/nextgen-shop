import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='w-full flex flex-col justify-center items-center bg-primary-foreground mt-[90px]'>
      <section className='text-primary py-[60px] max-w-screen-xl w-full flex justify-between'>
        <div className='w-max flex flex-col items-start gap-y-5'>
          <Image
            src='/logo-white.png'
            width={118}
            height={118}
            alt='footer logo'
            className='mb-2.5'
          />
          <h5 className='text-accent text-[28px] uppercase font-bold'>
            Shop Name
          </h5>
          <ul className='list-none [&>li]:flex [&>li]:gap-x-2.5 gap-y-1.5'>
            <li>
              <Image src='/pointer.png' width={22} height={22} alt='pointer' />
              <span className='font-semibold'>Shop Location</span>
            </li>
            <li>
              <Image src='/pointer.png' width={22} height={22} alt='pointer' />
              <span className='font-semibold'>
                 +XX XXX XXX XXXX (Shop Admin)
              </span>
            </li>
            <li>
              <Image src='/pointer.png' width={22} height={22} alt='pointer' />
              <span className='font-semibold'>info@shop.com</span>
            </li>
          </ul>
        </div>
        <Image
          src='/map-location.png'
          width={491.46}
          height={280.54}
          alt='Location on map'
        />
      </section>
      <section className='bg-[#001029] text-primary text-center w-full py-3.5'>
        <p className='text-[13px] font-bold uppercase tracking-widest'>
          © 2024 Shop. All rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
