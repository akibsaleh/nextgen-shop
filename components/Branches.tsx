import OneLiner from '@/components/OneLiner';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Branches = () => {
  return (
    <section className='w-full flex flex-col py-[90px] items-center justify-center gap-y-9'>
      <OneLiner
        title='h2 title one liner'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum
          augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue
          ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in
          ante. Nullam egestas, nunc at rutrum tincid'
      />
      <div className='w-full overflow-hidden flex justify-center items-center gap-x-6'>
        {/* card 1 */}
        <div
          id='1card'
          className='w-[301.85px] h-[428.46px] overflow-hidden flex flex-col justify-end items-center relative rounded-[40px] shrink-0 opacity-50'
        >
          <Image
            src='/general-banner.jpg'
            width={446.62}
            height={685.3}
            alt='branch'
            className='absolute top-0 left-0 h-full w-full object-cover z-0'
          />
          <Button
            variant='cta'
            className='mb-[34.5px] z-10 w-[160.2px] h-[50.2px] bg-accent text-accent-foreground hover:bg-primary hover:accent-foreground text-[22px]'
            asChild
          >
            <Link href='/branch'>
              <span>Branch</span>
            </Link>
          </Button>
        </div>
        {/* card 2 */}
        <div
          id='2card'
          className='w-[388.48px] h-[566.29px] overflow-hidden flex flex-col justify-end items-center relative rounded-[40px] shrink-0'
        >
          <Image
            src='/general-banner.jpg'
            width={446.62}
            height={685.3}
            alt='branch'
            className='absolute top-0 left-0 h-full w-full object-cover z-0'
          />
          <Button
            variant='cta'
            className='mb-[34.5px] z-10 w-[160.2px] h-[50.2px] bg-accent text-accent-foreground hover:bg-primary hover:accent-foreground text-[22px]'
            asChild
          >
            <Link href='/branch'>
              <span>Branch</span>
            </Link>
          </Button>
        </div>
        {/* card 3 */}
        <div
          id='3card'
          className='w-[446.62px] h-[685.3px] overflow-hidden flex flex-col justify-end items-center relative rounded-[40px] shrink-0'
        >
          <Image
            src='/general-banner.jpg'
            width={446.62}
            height={685.3}
            alt='branch'
            className='absolute top-0 left-0 h-full w-full object-cover z-0'
          />
          <Button
            variant='cta'
            className='mb-[34.5px] z-10 w-[160.2px] h-[50.2px] bg-accent text-accent-foreground hover:bg-primary hover:accent-foreground text-[22px]'
            asChild
          >
            <Link href='/branch'>
              <span>Branch</span>
            </Link>
          </Button>
        </div>
        {/* card 4 */}
        <div
          id='4card'
          className='w-[388.48px] h-[566.29px] overflow-hidden flex flex-col justify-end items-center relative rounded-[40px] shrink-0'
        >
          <Image
            src='/general-banner.jpg'
            width={446.62}
            height={685.3}
            alt='branch'
            className='absolute top-0 left-0 h-full w-full object-cover z-0'
          />
          <Button
            variant='cta'
            className='mb-[34.5px] z-10 w-[160.2px] h-[50.2px] bg-accent text-accent-foreground hover:bg-primary hover:accent-foreground text-[22px]'
            asChild
          >
            <Link href='/branch'>
              <span>Branch</span>
            </Link>
          </Button>
        </div>
        {/* card 5 */}
        <div
          id='5card'
          className='w-[301.85px] h-[428.46px] overflow-hidden flex flex-col justify-end items-center relative rounded-[40px] shrink-0 opacity-50'
        >
          <Image
            src='/general-banner.jpg'
            width={446.62}
            height={685.3}
            alt='branch'
            className='absolute top-0 left-0 h-full w-full object-cover z-0'
          />
          <Button
            variant='cta'
            className='mb-[34.5px] z-10 w-[160.2px] h-[50.2px] bg-accent text-accent-foreground hover:bg-primary hover:accent-foreground text-[22px]'
            asChild
          >
            <Link href='/branch'>
              <span>Branch</span>
            </Link>
          </Button>
        </div>
      </div>
      <Button className='w-[237px]'>See More</Button>
    </section>
  );
};

export default Branches;
