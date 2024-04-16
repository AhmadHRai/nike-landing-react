import { useState } from 'react';
import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Nav = () => {
  const [showNavbar, toggleNavbar] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:bg-coral-red hover:text-white hover:rounded-xl p-3"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block cursor-pointer">
          {!showNavbar ? (
            <img
              src={hamburger}
              alt="hamburger icon"
              width={25}
              height={25}
              onClick={() => {
                toggleNavbar(!showNavbar);
              }}
            />
          ) : (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-blue-100 drop-shadow-xl">
              <div
                className="flex justify-end py-10 px-14"
                onClick={() => {
                  toggleNavbar(!showNavbar);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className={`ml-12 flex flex-col items-start   `}>
                {navLinks.map((item) => (
                  <li
                    key={item.label}
                    className=" p-4 list-none hover:bg-blue-200 w-full rounded-lg"
                  >
                    <a
                      href={item.href}
                      className="font-montserrat font-medium leading-normal text-lg text-gray-600"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
