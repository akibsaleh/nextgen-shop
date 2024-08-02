import OneLiner from '@/components/OneLiner';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const NoticeBoard = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center pb-[90px] gap-y-8'>
      <OneLiner title='h2 title one liner' />
      <div className='max-w-screen-xl w-full flex justify-center gap-x-10'>
        <div className='w-1/2 text-left space-y-4'>
          <Image
            src='/general-banner.jpg'
            alt='post image'
            width={630}
            height={315}
            className='w-full h-full max-h-[315px] rounded-[18px] object-cover'
          />
          <p className='font-medium text-[#95969A]'>January 06, 2024</p>
          <h4 className='text-2xl font-semibold text-[#212529]'>
            Lorem ipsum dolor sit amet, consectetur
          </h4>
          <p className='text-sm font-medium text-[#21252999]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
            ornare congue ante a facilisis. Vestibulum sed magna in ligula
            aliquam luctus non in ante. Nullam egestas, nunc.
          </p>
        </div>
        <div className='w-1/2 space-y-9'>
          <div className='w-full flex flex-1 gap-x-4'>
            <Image
              src='/general-banner.jpg'
              alt='post image'
              width={300}
              height={150}
              className='w-full max-w-[300px] h-full max-h-[150px] rounded-[18px] object-cover'
            />
            <div className='w-full grow mt-2'>
              <p className='font-semibold text-[#7e7e7e]'>January 05, 2024</p>
              <h4 className='text-[#212529] font-semibold text-[22px]'>
                Lorem ipsum dolor sit amet, consectetur
              </h4>
            </div>
          </div>
          <div className='w-full flex flex-1 gap-x-4'>
            <Image
              src='/general-banner.jpg'
              alt='post image'
              width={300}
              height={150}
              className='w-full max-w-[300px] h-full max-h-[150px] rounded-[18px] object-cover'
            />
            <div className='w-full grow mt-2'>
              <p className='font-semibold text-[#7e7e7e]'>January 05, 2024</p>
              <h4 className='text-[#212529] font-semibold text-[22px]'>
                Lorem ipsum dolor sit amet, consectetur
              </h4>
            </div>
          </div>
          <div className='w-full flex flex-1 gap-x-4'>
            <Image
              src='/general-banner.jpg'
              alt='post image'
              width={300}
              height={150}
              className='w-full max-w-[300px] h-full max-h-[150px] rounded-[18px] object-cover'
            />
            <div className='w-full grow mt-2'>
              <p className='font-semibold text-[#7e7e7e]'>January 05, 2024</p>
              <h4 className='text-[#212529] font-semibold text-[22px]'>
                Lorem ipsum dolor sit amet, consectetur
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Button asChild>
        <Link href='/news'>
          <span>View all Notice & Events</span>
        </Link>
      </Button>
    </section>
  );
};

export default NoticeBoard;
