import Menu from '@/components/Menu';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='w-full py-4 px-9 bg-[rgba(0,5,34,0.63)]'>
      <div className='max-w-screen-2xl w-full mx-auto flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.png' width={90} height={90} alt='logo' />
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
