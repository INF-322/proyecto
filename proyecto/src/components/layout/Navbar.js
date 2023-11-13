import React from 'react';

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-24  h-16 mb-2
    text-black text-opacity-80  shadow bg-[#f9efff]"
    >
      <a href="/" className="text-xl">
        SPA - UTFSM
      </a>
      <div className="flex items-center justify-center gap-5">
        <div className=" text font-normal">
          Juan Perez
        </div>
        <span className="bg-gray-500 h-10 w-10 rounded-full" />
      </div>
    </div>
  );
}

export default Navbar;
