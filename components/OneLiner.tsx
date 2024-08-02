const OneLiner = ({ title, content }: { title: string; content?: string }) => {
  return (
    <div className='max-w-[1222px] w-full text-center space-y-[18px]'>
      <h2 className='font-bold uppercase text-[#212529] text-[34px]'>
        {title}
      </h2>
      <p className='font-medium text-lg text-[#21252999]'>{content}</p>
    </div>
  );
};

export default OneLiner;
