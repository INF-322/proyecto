import React from 'react';

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-24 h-16 bg-[#623280]">

      <a href="/" className="text-white text-xl font-bold">
        SPA - UTFSM
      </a>
      <div className="flex items-center justify-center gap-5">
        <div className="text-white text-lg font-bold">
          Juan Perez
        </div>
        <span className="bg-[#DBDBDB] h-10 w-10 rounded-full" />
      </div>
    </div>
  );
}

export default Navbar;
