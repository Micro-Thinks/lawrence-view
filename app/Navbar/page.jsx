import React from 'react';
import { navdData } from '../Helpers/Data';

const Page = () => {
  return (
    <div>
      <nav className=' bg-[#000000] px-24 py-4'>
        <ul className='flex  justify-between items-center'>
          {navdData.map((item, index) => (
            <div key={index} className='  text-white '>

            <li key={index} className='hover:text-[#c4a053] duration-300 ease-in-out'>
              <a href={item.href}>{item.name}</a>
            </li>
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Page;
