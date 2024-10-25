"use client"
import React, { useState } from 'react';
import { RoomCards } from '../Helpers/Data';
import Image from 'next/image';

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; // Number of cards to display at a time

  const handleNext = () => {
    if (currentIndex < RoomCards.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <main className="bg-black p-2">
        <div className="flex flex-col items-center justify-center space-y-3 text-white text-3xl">
          <h1>Featured Rooms</h1>
          <span>Indulge in our finest luxuries with exclusive packages</span>
        </div>

        <section className="relative">
          <div className="flex items-center  justify-between mt-6">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2   rounded-full "
            >
              <Image src='/Left-arrow.webp' alt='right-arrow' height={20} width={20} className=' h-auto w-full' />

              
            </button>

            <div className="grid grid-cols-3 gap-4 overflow-hidden w-full max-w-8xl">
              {RoomCards.slice(currentIndex, currentIndex + visibleCards).map((card, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg  hover:border-[#c4a053]  duration-300 ease-in-out border w-full max-w-sm rounded-xl font-[sans-serif] overflow-hidden flex flex-col justify-between mx-auto mt-4"
                >
                  <div className="">
                    <Image
                      height={384}
                      width={384}
                      src={card.Imgsrc}
                      alt={card.name}
                      className="h-full object-center rounded-t-lg"
                      quality={100}
                    />
                  </div>
                  <div className="flex-grow text-center px-4">
                    <h3 className="text-xl mt-1 font-bold">{card.name}</h3>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="p-2 text-center">
                    <button
                      type="button"
                      className="px-4 py-2 text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#c4a053] rounded-xl"
                    >
                      {card.button}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex >= RoomCards.length - visibleCards}
              className="p-2 text-white  rounded-full "
            >
              <Image src='/right-arrow.png' alt='right-arrow' height={20} width={20} className=' h-auto w-full' />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
