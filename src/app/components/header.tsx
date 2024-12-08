import React from 'react'
import { IoCartOutline, IoHeartOutline, IoSearch } from 'react-icons/io5'

const Upperheader = () => {
  return (
    
/* <header className="text-gray border-2 body-font font-bold bg-gray">
  <div className="container text-gray mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">First Link</a>
      <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    
  </div>
</header>
  );
} */



 <div className='flex flex-wrap items-center gap-9 font-semibold border-2 h-[50px] w-full bg-gray-100 text-sm text-black-600 px-8 py-2'>
      <a href="#" className="hover:text-black ml-6">
        Find a Store
      </a>
      <a href="#" className="hover:text-black ml-4">
        Help
      </a>
      <a href="#" className="hover:text-black ml-4">
        Join Us
      </a>
      <a href="#" className="hover:text-black ml-4">
        Sign In
      </a>
    </div> 
  
)
}


export default Upperheader


export const Header = () => {
  return (
    
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
    <div className=" w[1211px] h[60px] text-111111-600 flex items-center">
        <img src="/nike.png" alt="Nike Logo" className="h-8" />
      </div>
    </a>
    
    <nav className="md:ml-auto md:mr-auto font-bold flex flex-wrap items-center text-black justify-center gap-9">
    <a href="#" className="hover:text-black">New & Featured</a>
        <a href="#" className="hover:text-black">Men</a>
        <a href="#" className="hover:text-black">Women</a>
        <a href="#" className="hover:text-black">Kids</a>
        <a href="#" className="hover:text-black">Sale</a>
        <a href="#" className="hover:text-black">SNKRS</a>
        </nav>

    <input type='text' placeholder='Search' className='w-[100px]'>
    </input>
    <IoSearch className='text-black size-5' />
    <IoHeartOutline className='text-black size-6 mx-3'/>
    <IoCartOutline className='text-black size-6 mx-1' />
    
  </div>
</header>

    </div>
  )
}

