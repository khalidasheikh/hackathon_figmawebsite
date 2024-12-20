import React from 'react';
import { IoCartOutline, IoHeartOutline, IoSearch } from 'react-icons/io5';

const Upperheader = () => {
  return (
   

      <div className="flex justify-center items-center gap-6 font-semibold border-b h-[50px] w-full bg-gray-100 text-sm text-gray-600 px-4 md:px-8">
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-black" aria-label="Find a Store">
            Find a Store
          </a>
          <a href="#" className="hover:text-black" aria-label="Help">
            Help
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-black" aria-label="Join Us">
            Join Us
          </a>
          <a href="#" className="hover:text-black" aria-label="Sign In">
            Sign In
          </a>
        </div>
      </div>
    
      )
     } 

      
      export const Header = () => {
   return (

      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:p-6">

          <a href="#" className="flex items-center" aria-label="Home">
            <img src="/nike.png" alt="Nike Logo" className="h-8 md:h-10" />
          </a>

          <nav className="hidden md:flex gap-6 font-bold text-black">
            <a href="#" className="hover:text-gray-700" aria-label="New & Featured">
              New & Featured
            </a>
            <a href="#" className="hover:text-gray-700" aria-label="Men">
              Men
            </a>
            <a href="#" className="hover:text-gray-700" aria-label="Women">
              Women
            </a>
            <a href="#" className="hover:text-gray-700" aria-label="Kids">
              Kids
            </a>
            <a href="#" className="hover:text-gray-700" aria-label="Sale">
              Sale
            </a>
            <a href="#" className="hover:text-gray-700" aria-label="SNKRS">
              SNKRS
            </a>
          </nav>


          <div className="flex items-center gap-4">

            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[120px] sm:w-[150px] lg:w-[200px] px-4 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Search"
              />
              <IoSearch className="absolute right-2 top-2 text-gray-600 text-lg" />
            </div>

            <IoHeartOutline
              className="text-black text-xl md:text-2xl cursor-pointer"
              aria-label="Favorites"
            />
            <IoCartOutline
              className="text-black text-xl md:text-2xl cursor-pointer"
              aria-label="Cart"
            />
          </div>
        </div>

        
        <nav className="flex md:hidden justify-around bg-gray-100 py-2 text-sm font-semibold text-black">
          <a href="#" className="hover:text-gray-700" aria-label="New & Featured">
            New & Featured
          </a>
          <a href="#" className="hover:text-gray-700" aria-label="Men">
            Men
          </a>
          <a href="#" className="hover:text-gray-700" aria-label="Women">
            Women
          </a>
          <a href="#" className="hover:text-gray-700" aria-label="Kids">
            Kids
          </a>
          <a href="#" className="hover:text-gray-700" aria-label="Sale">
            Sale
          </a>
          <a href="#" className="hover:text-gray-700" aria-label="SNKRS">
            SNKRS
          </a>
        </nav>
      </header>
    
    
  );
};

export default Upperheader;











