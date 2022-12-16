'use client';

const Navbar = () => (
  <nav className="mx-8">
    <div className="flex sm:justify-between justify-center">
      <a href="https://akidcalledbeast.com">
        <div className="flex cursor-pointer sm:mt-[2.4rem] mt-[1rem] sm:ml-9 h-[2rem] w-auto">
          <img
            src="/akcb_logo_white.svg"
            alt="logo"
            className="w-auto sm:h-[1.5rem] h-[1rem]"
          />
          <img
            src="/akcb_logo_end_white.svg"
            alt="logo"
            className="w-auto sm:h-[1.5rem] h-[1rem]"
          />
        </div>
      </a>
      <div className="hidden sm:flex gap-8 items-center sm:mt-[1.9rem] -mt-[10px]">
        <div className="flex mr-10 w-[11rem] justify-between items-center">
          <a href="https://discord.gg/akidcalledbeast">
            <img
              src="/discord_icon.svg"
              alt="discord"
              className="w-auto h-[1.8rem] cursor-pointer -mt-[2px]"
            />
          </a>
          <a href="https://www.instagram.com/akidcalledbeast/">
            <img
              src="/instagram_icon.svg"
              alt="instagram"
              className="w-auto h-[2.7rem] object-cover cursor-pointer"
            />
          </a>
          <a href="https://twitter.com/akidcalledbeast">
            <img
              src="/twitter_icon.svg"
              alt="twitter"
              className="w-auto h-[2.3rem] object-cover cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
