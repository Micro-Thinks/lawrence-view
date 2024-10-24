'use client'; 
import { parseDate } from '@internationalized/date';
import { DateRangePicker } from '@nextui-org/date-picker';
import { useState } from 'react';

const Page = () => {
  const [selectedOption, setSelectedOption] = useState('Select room');
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: '1 Room 2 adults', label: '1 Room 2 adults' },
    { value: '2 Room 2 adults', label: '2 Room 2 adults' },
    { value: '2 Room 3 adults', label: '2 Room 3 adults' },
    { value: '2 Room 4 adults', label: '2 Room 4 adults' },
  ];

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
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
            className="w-96 h-10 bg-gray-700 text-white rounded-md"
          />

          <div className="relative">
            <div
              className="p-2 bg-gray-100 text-black border h-10 w-48 rounded-xl border-gray-300 hover:border-blue-400 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-between"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedOption}
              <span className={`ml-2 h-2 w-2 flex items-center justify-center transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                ▼
              </span>
            </div>

            {isOpen && (
              <ul className="absolute z-10 w-48 mt-2 bg-white border border-gray-300 rounded-xl shadow-lg transition-all duration-300 ease-in-out opacity-100">
                {options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(option.value)}
                    className="p-2 hover:bg-[#c4a053] hover:text-white cursor-pointer transition-colors duration-200 ease-in-out"
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="px-2 bg-[#c4a053] text-white rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
