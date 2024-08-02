import OneLiner from '@/components/OneLiner';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center pb-[90px] gap-y-8'>
      <OneLiner title='h2 title one liner' />
      <div className='max-w-screen-xl w-full flex justify-center items-start gap-x-10'>
        <div className='w-[562px] rounded-[9px] overflow-hidden shrink-0 h-fit'>
          <Image
            src='/general-banner.jpg'
            width={562}
            height={469}
            className='w-full h-full'
            alt='post image'
          />
          <div className='bg-[#003FA9] w-full flex justify-center items-center'>
            <div className='bg-primary-foreground size-[110px] flex flex-col items-center justify-center text-center gap-y-0.5 shrink-0'>
              <p className='text-xl text-primary'>Oct</p>
              <p className='text-[26px] font-bold text-primary'>31</p>
            </div>
            <div className='w-full space-y-1 ml-5'>
              <h4 className='text-primary text-[23px] font-bold'>
                Lorem ipsum us
              </h4>
              <p className='text-primary'>Oct 31, 2024</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full gap-y-5'>
          <div className='w-full grow flex flex-col pt-2 pb-6 border-b-2 border-primary-foreground/15'>
            <div className='w-full flex gap-x-5'>
              <div className='bg-primary-foreground size-[100px] rounded-[14px] flex flex-col items-center justify-center text-center gap-y-0.5 shrink-0'>
                <p className='text-xl text-primary'>Oct</p>
                <p className='text-[26px] font-bold text-primary'>12</p>
              </div>
              <div className='w-full grow space-y-1'>
                <h4 className='text-[22px] text-[#333333] font-bold mt-1'>
                  Lorem ipsum dolor sit amet, consectetur
                </h4>
                <p className='text-sm font-medium text-[#21252999]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  interdum augue sed tellus accumsan, nec congue quam lacinia.
                  Duis ornare congue ante a.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full grow flex flex-col pb-6 border-b-2 border-primary-foreground/15'>
            <div className='w-full flex gap-x-5'>
              <div className='bg-primary-foreground size-[100px] rounded-[14px] flex flex-col items-center justify-center text-center gap-y-0.5 shrink-0'>
                <p className='text-xl text-primary'>Oct</p>
                <p className='text-[26px] font-bold text-primary'>12</p>
              </div>
              <div className='w-full grow space-y-1'>
                <h4 className='text-[22px] text-[#333333] font-bold mt-1'>
                  Lorem ipsum dolor sit amet, consectetur
                </h4>
                <p className='text-sm font-medium text-[#21252999]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  interdum augue sed tellus accumsan, nec congue quam lacinia.
                  Duis ornare congue ante a.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full grow flex flex-col pb-6 border-b-2 border-primary-foreground/15'>
            <div className='w-full flex gap-x-5'>
              <div className='bg-primary-foreground size-[100px] rounded-[14px] flex flex-col items-center justify-center text-center gap-y-0.5 shrink-0'>
                <p className='text-xl text-primary'>Oct</p>
                <p className='text-[26px] font-bold text-primary'>12</p>
              </div>
              <div className='w-full grow space-y-1'>
                <h4 className='text-[22px] text-[#333333] font-bold mt-1'>
                  Lorem ipsum dolor sit amet, consectetur
                </h4>
                <p className='text-sm font-medium text-[#21252999]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  interdum augue sed tellus accumsan, nec congue quam lacinia.
                  Duis ornare congue ante a.
                </p>
              </div>
            </div>
          </div>
          <Button className='mt-2' asChild>
            <Link href='/news'>View all Notice & Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
