import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../../lib/utils';
import { Button } from './button';

const WideCard = ({
  icon,
  title,
  content,
  link,
  image,
  order = 'LTR',
}: {
  icon: string;
  title: string;
  content: string;
  link: string;
  image: string;
  order: 'LTR' | 'RTL';
}) => {
  return (
    <div className='bg-[#EDF1FF] py-12 flex items-center justify-center w-full'>
      <div className='max-w-[1222px] w-full flex relative gap-x-[93px]'>
        <div
          className={cn(
            'w-1/2 flex flex-col gap-y-7',
            order === 'LTR' ? 'order-1' : 'order-2',
          )}
        >
          <h4 className='flex gap-x-2 text-[27px] items-center font-bold mt-[14px]'>
            <Image src={icon} width={31.17} height={36.67} alt='book' />
            <span>{title}</span>
          </h4>
          <p className='font-medium text-lg text-[#21252999] max-w-[468px] w-full'>
            {content}
          </p>
        </div>
        <Image
          src={image}
          alt='Info card'
          width={622}
          height={459}
          className={cn(
            'w-1/2 h-auto rounded-[20px]',
            order === 'LTR' ? 'order-2' : 'order-1',
          )}
        />
        <Button
          className='absolute left-1/2 -translate-x-1/2 bottom-[42px] group duration-200'
          variant='circle'
          size='circle'
          asChild
        >
          <Link href={link}>
            <span className='group-hover:hidden'>
              Explore
              <br />
              Products
            </span>
            <Image
              src='/arrow-up-right.svg'
              width={50}
              height={50}
              alt='visit'
              className='hidden group-hover:inline-block delay-200'
            />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default WideCard;
