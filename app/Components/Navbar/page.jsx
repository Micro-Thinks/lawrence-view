import React from 'react';
import { navdData } from '../../Helpers/Data';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='fixed top-2 left-0 right-0 z-50 '>
      <nav className=' bg-[#000000] px-16 py-4  mt-6 flex items-center justify-between'>
      <div className="">
          <Image src="/LVH-logo.webp" alt="lvh pic" height={100} width={100} />
        </div>
        <ul className='flex justify-between items-center'>
  {navdData.map((item, index) => (
    <li key={index} className='text-white hover:text-[#c4a053] duration-300 ease-in-out mx-4'>
      <Link href={item.href}>{item.name}</Link>
    </li>
  ))}
</ul>

        <div>
            <Link href='/Contact'>
            <button className="bg-white hover:text-white hover:bg-[#c4a053] duration-300 ease-in-out font-semibold px-3 py-2 rounded-xl">
              Book Now
            </button>
            </Link>
          </div>
      </nav>
    </div>
  );
};

export default Page;
