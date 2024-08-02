import OneLiner from './OneLiner';
import { Button } from './ui/button';
import WideCard from './ui/WideCard';

const Showcase = () => {
  return (
    <section className='w-full flex flex-col py-[90px] items-center justify-center gap-y-10'>
      <OneLiner
        title='h2 title one liner'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum
          augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue
          ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in
          ante. Nullam egestas, nunc at rutrum tincid'
      />

      <WideCard
        icon='/book.svg'
        title='Title H4'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
              ornare congue ante a facilisis. Vestibulum sed magna in ligula
              aliquam luctus non in ante. Nullam egestas, nunc at rutrum
              tincidunt, purus metus malesuada ante, at cursus massa turpis sit
              amet'
        link='random-3'
        image='/general-banner.jpg'
        order='LTR'
      />
      <WideCard
        icon='/gun.svg'
        title='Title H4'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
              ornare congue ante a facilisis. Vestibulum sed magna in ligula
              aliquam luctus non in ante. Nullam egestas, nunc at rutrum
              tincidunt, purus metus malesuada ante, at cursus massa turpis sit
              amet'
        link='random-3'
        image='/general-banner.jpg'
        order='RTL'
      />
      <WideCard
        icon='/hexagon.svg'
        title='Title H4'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
              ornare congue ante a facilisis. Vestibulum sed magna in ligula
              aliquam luctus non in ante. Nullam egestas, nunc at rutrum
              tincidunt, purus metus malesuada ante, at cursus massa turpis sit
              amet'
        link='random-3'
        image='/general-banner.jpg'
        order='LTR'
      />
      <WideCard
        icon='/users.svg'
        title='Title H4'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
              ornare congue ante a facilisis. Vestibulum sed magna in ligula
              aliquam luctus non in ante. Nullam egestas, nunc at rutrum
              tincidunt, purus metus malesuada ante, at cursus massa turpis sit
              amet'
        link='random-3'
        image='/general-banner.jpg'
        order='RTL'
      />
      <Button className='w-[237px]'>Learn More</Button>
    </section>
  );
};

export default Showcase;
