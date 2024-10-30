"use client";

import { GalleryCard } from "../Helpers/Data";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <main className="bg-black p-2">
        <div className="flex flex-col items-center justify-center space-y-3 text-white text-5xl pt-10">
          <h1>Gallery</h1>
        </div>

        <section className="relative">
          <div className="flex items-center justify-between mt-6">
            <div className="grid grid-cols-4 grid-rows-3 gap-4 overflow-hidden w-full max-w-8xl p-8">
              {GalleryCard.map((card, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg hover:border-[#c4a053] duration-300 ease-in-out border w-full max-w-sm rounded-xl font-[sans-serif] overflow-hidden flex flex-col justify-between mx-auto mt-4"
                >
                  <div>
                    <Image
                      height={288}
                      width={383}
                      src={card.Imgsrc}
                      alt={card.name}
                      className="h-auto object-center rounded-t-lg"
                      quality={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
