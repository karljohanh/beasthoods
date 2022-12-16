'use client';

const CustomCard = ({ imgUrl, title, beasthood, subtitle }) => (
  <div className="flex sm:flex-row flex-col mx-auto w-[80%] justify-center items-center sm:h-auto">
    <img
      src={imgUrl}
      alt={title}
      className="h-[19rem] w-auto sm:h-[25rem] md:h-[27rem] md:w-auto lg:h-[33rem] lg:w-auto 2xl:h-[40rem] 2xl:w-auto sm:portrait:h-[30rem] sm:mb-0"
    />

    <div className="text-off-white lg:ml-6 flex flex-col sm:text-start text-center tracking-[0.2em] uppercase sm:mb-0 mb-[1rem] self-center lg:w-[40vw]">
      <p className="sm:self-start self-center border rounded-full py-[4px] pl-[12px] pr-[10px] text-[10px] mb-[1.5rem]">
        {title}
      </p>
      <h2 className="sm:text-[24px] text-[16px] leading-7">{beasthood}</h2>
      <p className="mt-[1.5rem] sm:text-[12px] text-[10px]">
        <span className="font-extrabold">Strengths</span> <br />{' '}
        {subtitle.strengths}
      </p>
      <p className="mt-[1.5rem] sm:text-[12px] text-[10px]">
        <span className="font-extrabold">Personality Traits</span> <br />{' '}
        {subtitle.traits}
      </p>
      <div className="flex gap-[8px] justify-center sm:justify-start">
        <button
          type="button"
          className="border-black border sm:self-start self-center rounded-[5rem] mt-[2rem] text-dark-brown bg-off-white tracking-widest md:text-[12px] text-[9px] py-[12px] px-[18px] sm:py-[10px] sm:px-[11px] md:py-[10px] md:px-[20px] lg:py-[10px] lg:px-[29px] "
        >
          <a
            href={`https://akidcalledbeast.webflow.io/banners#${title
              .toLowerCase()
              .split(' ')
              .join('')}`}
          >
            SHOW BANNERS
          </a>
        </button>
        <button
          type="button"
          className="border-black border sm:self-start self-center rounded-[5rem] mt-[2rem] text-dark-brown bg-off-white tracking-widest md:text-[12px] text-[9px] py-[12px] px-[30px] sm:py-[10px] sm:px-[22px] md:px-[35px] md:py-[10px] lg:py-[10px] lg:px-[44px] opacity-50 cursor-default"
        >
          MINT BEAST
        </button>
      </div>
    </div>
  </div>
);

export default CustomCard;
