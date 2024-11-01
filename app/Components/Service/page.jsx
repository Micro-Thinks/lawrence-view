import Image from "next/image";
import React from "react";

const page = () => {
  const services = [
    {
      title: "BIRTHDAY",
      price: "PKR 5,800",
      subTitle: "Memorable Celebrations",
      features: [
        "Free Decor",
        "2 Sounds",
        "2 Sparkling Candles",
        "2 Birthday Cars",
        "Birthday Sounds",
        "85 Balloons",
      ],
      imgsrc: "/cake.webp",
    },
    {
      title: "ANNIVERSARY",
      price: "PKR 5,800",
      subTitle: "Life's Sweetest Celebration",
      features: [
        "Free Decor",
        "2 pounds Cake",
        "2 Sparkling Candles",
        "2 Birthday Caps",
        "Birthday Sounds",
        "85 Balloons",
      ],
      imgsrc: "/Heart-balloon.webp",
    },
    {
      title: "LUNCH & HI-TEA",
      price: "PKR 1,550",
      subTitle: "Lunch and Hi-Tea Delights",
      features: [
        "Experience the Ultimate Dining Experience",
        "with a Perfect Fusion of Lunch and Hi-Tea,",
        "Delighting Your Taste.",
        "Immerse Yourself in an unforgettable",
        "Dining Experience at Lawrence View Hotel,",
        "with a Perfect Fusion of Lunch and Hi-tea.",
      ],
      imgsrc: "/Lunch.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <h1 className=" text-center mb-16">Services</h1>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-transparent  rounded-lg p-6 
                        overflow-hidden"
            >
              {/* Image */}
              <div
                className="bg-white relative flex items-center justify-center p-20 mb-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                       cursor-pointer overflow-hidden rounded-lg  hover:border-[#c4a053]"
              >
                <Image
                  height={100}
                  width={100}
                  src={service.imgsrc}
                  alt={service.title}
                  className="h-auto object-cover transform transition-transform duration-300 
                           group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#c4a053] mb-2">
                  {service.title}
                </h3>
                <p className="text-2xl font-bold mb-4">{service.price}</p>
                <h4 className="text-lg font-semibold mb-4">
                  {service.subTitle}
                </h4>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <p key={idx} className="text-sm text-gray-300">
                      {feature}
                    </p>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className=""></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
