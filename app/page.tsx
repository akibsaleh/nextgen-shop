'use client';
import About from '@/components/About';
import Cta from '@/components/Cta';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfoCta from '@/components/InfoCta';
import Showcase from '@/components/Showcase';
import Blog from '../components/Blog';
import Branches from '../components/Branches';
import Footer from '../components/Footer';
import MasonryBlock from '../components/MasonryBlock';
import NoticeBoard from '../components/NoticeBoard';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start rounded-x relative'>
      <Header />
      <Hero />
      <About />
      <Cta
        title='Title Line h2'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum
          augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue
          ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in
          ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada
          ante, at cursus massa turpis sit amet nulla. Quisque non ante quis
          lorem fermentum auctor sed sed ligula. Aenean turpis sapien, efficitur
          quis placerat at, facilisis bibendum erat. Aliquam quis mattis leo,
          sed egestas augue. Phasellus vitae vulputate nisi, vitae eleifend
          enim. Aenean rutrum tristique purus.'
        link={'/random'}
      />
      <InfoCta />
      <Cta
        title='yellow title h2'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor sed sed ligula. Aenean turpis sapien, efficitur quis placerat at, facilisis bibendum erat. Aliquam quis mattis leo, sed egestas augue. Phasellus vitae vulp'
        link={'/random-again'}
        rounded={true}
      />
      <Showcase />
      <Branches />
      <NoticeBoard />
      <Blog />
      <MasonryBlock />
      <Footer />
    </main>
  );
}
