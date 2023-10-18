function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-24 h-20 bg-[#7D45A1]">
      <div class="text-white text-3xl font-bold">
          SPA - UTFSM
        </div> 
      <div className="flex items-center justify-center gap-3">
        <div className="text-white text-2xl  font-bold">
          Juan Perez
        </div> 
        <span className="bg-[#DBDBDB] h-[50px] w-[50px] rounded-full"></span>
      </div>
    </div>
  );
}

export default Navbar;
