"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const HotelContactNewsletter = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      setSuccessMessage("");
      return;
    }
    // Handle the subscription logic
    console.log("Subscribed with email:", email);
    setSuccessMessage("Thank you for subscribing!");
    setErrorMessage("");
    setEmail("");
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="w-full">
      {/* Newsletter Section */}
      <div className="relative w-full h-[100px] bg-[url('/subscribe.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 ">
          <div className="h-full flex items-center justify-center px-4 lg:px-8">
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-6">
              <h2 className="text-white text-xl md:text-2xl font-medium uppercase">
                Subscribe to our newsletter
              </h2>
              <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300  focus:outline-none focus:border-[#C4A053]"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#C4A053] text-white font-medium  hover:bg-[#B39048] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                {successMessage && (
                  <p className="mt-2 text-green-400 text-sm">
                    {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="mt-2 text-red-400 text-sm">{errorMessage}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full bg-black text-white py-8 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Logo */}
            <div>
              <Image
                src="/LVH-logo.webp"
                alt="Lawrence View Hotel"
                className="w-48"
                width={200}
                height={200}
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h2 className="text-2xl mb-6">GET IN TOUCH</h2>

              <div className="flex items-start gap-3">
                <p>
                  54-A Lawrence Road, Near China Chowk opposite Jinnah Garden,
                  Jubilee Town 54600 Lahore, Punjab Pakistan (PK)
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="tel:+923206361916"
                  className=" hover:text-[#C4A053] transition-colors"
                >
                  +92 3206361916
                </a>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="mailto:lawrenceviewhotel@gmail.com"
                  className=" hover:text-[#C4A053] transition-colors"
                >
                  lawrenceviewhotel@gmail.com
                </a>
              </div>
            </div>
          </div>
          {/* Social icons */}
          <div className="mt-10 border-t-2 p-4 border-white bg-black"></div>
          <div className="text-white bg-black flex items-center justify-center space-x-8 ">
            <Link
              href="https://www.facebook.com/Microthinksbyzaheer?mibextid=LQQJ4d"
              target="_blank"
            >
              <Image src="/Facebook.webp" alt="icon" height={40} width={40} />
            </Link>
            <Link
              href="https://www.instagram.com/microthinks?igsh=YnJ4cGJkem9zZWtx"
              target="_blank"
            >
              <Image src="/Instagram.webp" alt="icon" height={40} width={40} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/microthinks/posts/?feedView=all"
              target="_blank"
            >
              <Image src="/LinkedIn.webp" alt="icon" height={35} width={35} />
            </Link>
          </div>
          <div>
            <ul className="text-white flex flex-col lg:flex-row xl:flex-row lg:items-center xl:items-center  lg:space-x-10 justify-evenly mt-10 space-y-2 lg:space-y-0">
              <Link href="/TermsandConditions">
                <li className="cursor-pointer">T&Cs</li>
              </Link>
              <Link href="/PrivacyPolicy">
                <li className="cursor-pointer">Privacy Policy</li>
              </Link>
              <Link href="/LegalNotice">
                <li className="cursor-pointer">Legal Notice</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelContactNewsletter;
