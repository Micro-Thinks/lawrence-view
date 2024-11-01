"use client";

import React, { useState } from "react";

function Page() {
  const [selectedOption, setSelectedOption] = useState("Select room");
  const [isOpen, setIsOpen] = useState(false);
  const [dateRangeOpen, setDateRangeOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [formattedDateRange, setFormattedDateRange] = useState("");

  const options = [
    { value: "1 Room 2 adults", label: "1 Room 2 adults" },
    { value: "2 Room 2 adults", label: "2 Room 2 adults" },
    { value: "2 Room 3 adults", label: "2 Room 3 adults" },
    { value: "2 Room 4 adults", label: "2 Room 4 adults" },
  ];

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === "startDate") {
      setStartDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
    }
  };

  const handleConfirm = () => {
    if (startDate && endDate) {
      const formattedStart = new Date(startDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      const formattedEnd = new Date(endDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      setFormattedDateRange(`${formattedStart} - ${formattedEnd}`);
      setDateRangeOpen(false);
    }
  };

  const toggleDateRange = () => {
    setDateRangeOpen(!dateRangeOpen);
  };

  return (
    <div>
      <div className=" p-6  flex bg-[#2c2c2c] bg-opacity-55">
        {/* Single Input Date Range Picker */}
        <div className="relative w-[44vw]">
          <div
            className="p-2 bg-gray-100 text-black border h-10  border-gray-300  transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-between"
            onClick={toggleDateRange}
          >
            {formattedDateRange || "Select date range"}
          </div>

          {dateRangeOpen && (
            <div className="absolute z-20 w-full mt-2 bg-white border border-gray-300 rounded-xl shadow-lg transition-all duration-300 ease-in-out p-4">
              <div className="flex justify-between space-x-2">
                <input
                  type="date"
                  name="startDate"
                  value={startDate}
                  onChange={handleDateChange}
                  className="border border-gray-400 py-2 px-3 w-1/2"
                />
                <input
                  type="date"
                  name="endDate"
                  value={endDate}
                  onChange={handleDateChange}
                  className="border border-gray-400 py-2 px-3 w-1/2"
                />
              </div>
              <button
                onClick={handleConfirm}
                className="mt-2 bg-[#c4a053] text-white py-2 px-4 rounded-md"
              >
                Confirm
              </button>
            </div>
          )}
        </div>

        {/* Room Selector */}
        <div className="relative">
          <div
            className=" p-2 bg-gray-100 text-black border h-10 w-[40vw] border-gray-300 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption}
            <span
              className={`ml-2 h-2 w-2 flex items-center justify-center transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
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

        {/* Book Now Button */}
        <button className="px-8 py-1 bg-[#c4a053] ml-3 text-black rounded-md">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Page;
