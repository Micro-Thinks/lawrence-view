import React from 'react';
import { RoomCards } from '../Helpers/Data';
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <main className="bg-black p-2">
        <div className="flex flex-col items-center justify-center space-y-3 text-white text-3xl">
          <h1>Featured Rooms</h1>
          <span>Indulge in our finest luxuries with exclusive packages</span>
        </div>

        <section>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RoomCards.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-lg hover:scale-105 hover:border-[#c4a053] hover:border-5 duration-300 ease-in-out border  w-full max-w-sm rounded-xl   font-[sans-serif] overflow-hidden mx-auto mt-4 flex flex-col justify-between "
              >
                <div className="">
                <Image
  height={384} 
  width={384}  
  src={card.Imgsrc}
  alt={card.name}
  className="h-auto object-center rounded-t-lg"
  quality={100} 
/>

                </div>
                <div className="flex-grow text-center px-4">
                  <h3 className="text-xl mt-1 font-bold">{card.name}</h3>
                  <p className="mt-3 text-sm text-gray-500  leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="p-2 text-center">
                  <button
                    type="button"
                    className=" px-4 py-2 text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#c4a053] rounded-xl"
                  >
                    {card.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
