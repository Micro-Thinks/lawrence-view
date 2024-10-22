'use client'; // Ensure this is at the top of your component file

import { parseDate } from '@internationalized/date';
import { DateRangePicker } from '@nextui-org/date-picker';
import { useState } from 'react';

const Page = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-cover bg-center relative">
        <h1 className="absolute text-white text-3xl lg:text-4xl text-center transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">
          Experience the Art of Hospitality
        </h1>

        <div className="border-3 border-[#c4a053] p-4 space-x-2 rounded-xl flex bg-[#2c2c2c] bg-opacity-55">
  <DateRangePicker
    label="Stay duration"
    isRequired
    defaultValue={{
      start: parseDate('2024-04-01'),
      end: parseDate('2024-04-08'),
    }}
    className="w-96 bg-gray-700 text-white rounded-md"
  />
  
  <select
    value={selectedOption}
    onChange={handleChange}
    className="p-2 bg-gray-100 text-black border rounded-xl focus:outline-none border-gray-300"
  >
    <option value="" disabled>
      None
    </option>
    <option value="1 Room 2 adults">1 Room 2 adults</option>
    <option value="2 Room 2 adults">2 Room 2 adults</option>
    <option value="2 Room 3 adults">2 Room 3 adults</option>
    <option value="2 Room 4 adults">2 Room 4 adults</option>
  </select>

  <button className='p-3 bg-[#c4a053] text-white rounded-md'>
    Book Now
  </button>
</div>

      </div>
    </div>
  );
};

export default Page;
