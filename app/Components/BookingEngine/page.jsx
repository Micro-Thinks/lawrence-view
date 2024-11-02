"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion for animations
import { Icon } from "@iconify/react";

function Page() {
  const [selectedOption, setSelectedOption] = useState("Select room");
  const [isOpen, setIsOpen] = useState(false);
  const [dateRangeOpen, setDateRangeOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [formattedDateRange, setFormattedDateRange] = useState("");
  const [rooms, setRooms] = useState([{ id: 1, people: 1 }]);

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

  const handlePeopleChange = (roomId, people) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId ? { ...room, people: Number(people) } : room
      )
    );
  };

  const addRoom = () => {
    setRooms([...rooms, { id: rooms.length + 1, people: 1 }]);
  };

  const removeRoom = (roomId) => {
    setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
  };

  return (
    <div>
      <div className="p-6 flex bg-[#2c2c2c] bg-opacity-55">
        {/* Single Input Date Range Picker */}
        <div className="relative w-[44vw]">
          <div
            className="p-2 bg-gray-100 text-black border h-10 border-gray-300 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-between"
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

        {/* Dynamic Room Selector */}
        <div className="relative w-[40vw] ml-4">
          <div
            className="p-2 bg-gray-100 text-black border h-10 border-gray-300 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-between"
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
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-xl shadow-lg p-4"
            >
              <AnimatePresence>
                {rooms.map((room) => (
                  <motion.div
                    key={room.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center mb-3"
                  >
                    <span className="mr-2">Room {room.id}:</span>
                    <select
                      value={room.people}
                      onChange={(e) => handlePeopleChange(room.id, e.target.value)}
                      className="border focus:outline-none border-gray-300 rounded-md p-1"
                    >
                      {[...Array(10).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}
                        className="focus:outline-none">
                          {i + 1} {i + 1 === 1 ? "person" : "people"}
                        </option>
                      ))}
                    </select>
                   
                    <Icon icon="mi:close" 
                     className="ml-2 text-gray-500 font-semibold h-5 w-5 cursor-pointer hover:text-red-500 transition-colors"
                     onClick={() => removeRoom(room.id)}
                     title="Remove room"  />
                  </motion.div>
                ))}
              </AnimatePresence>
              <button
                onClick={addRoom}
                className="mt-2 bg-[#c4a053] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Add Room
              </button>
            </motion.div>
          )}
        </div>

        {/* Book Now Button */}
        <button className="px-8 w-full max-w-[12vw] py-1 bg-[#c4a053] ml-3 text-black rounded-md hover:bg-opacity-90 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Page;
