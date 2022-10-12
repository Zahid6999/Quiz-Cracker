import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='lg:flex lg:justify-between items-center shadow-2xl rounded-md'>
          <div>
            <h1 className='text-3xl lg:text-5xl font-medium ml-8 lg:ml-0 px-0 lg:px-16  py-8'>Game Of <span className='text-orange-500'>Code Quiz</span></h1>
          </div>


          <nav className='pl-11 lg:pl-0'>
            <Link className='text-2xl lg:mr-14 font-medium hover:bg-sky-700 p-2 hover:text-white rounded-xl text-gray-600' to='/'>Home</Link>
            <Link className='text-2xl lg:mr-14 font-medium hover:bg-sky-700 p-2 hover:text-white rounded-xl text-gray-600' to='/blogs'>Blogs</Link>
            <Link className='text-2xl lg:mr-14 font-medium hover:bg-sky-700 p-2 hover:text-white rounded-xl text-gray-600' to='/topics'>Topics</Link>
            
          </nav>
        </div>
    );
};

export default Header;