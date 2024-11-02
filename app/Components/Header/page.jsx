



import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Header Section */}

      <div className="bg-[#c4a053] h-8 max-w-screen lg:flex justify-between  p-4 hidden   ">
           {/* child-1 */}

           <div className="flex items-center space-x-2 ml-[1%]">
          <Link href='https://www.facebook.com/LawrenceViewHotelLahore' target='_blank'>
         
          <Icon icon="gg:facebook" className="text-white h-6 w-6" />
          </Link>
          <Link  href='https://www.instagram.com/lawrence.view.hotel.lahore/' target="_blank">
          <Icon icon="line-md:instagram" className="text-white h-6 w-6" />

          </Link>
          <Link
            href="https://www.linkedin.com/company/xsuite-digital/about/"
            target="_blank"
          >
                     <Icon icon="ri:linkedin-fill" className="text-white h-6 w-6" />

          </Link>
        </div>
        {/* child-2 */}

        <div className="flex space-x-4 mr-[1%]">
  <div className="flex items-center space-x-1 text-white duration-300 ease-in-out hover:text-black">
    <Icon icon="prime:whatsapp" className="h-6 w-6" />
    <Link
      href="https://wa.me/+923316361916"
      target="_blank"
      className="border-[#c4a053] pr-2 border-r-2 hover:text-black"
    >
      331 63 61 916
    </Link>
  </div>

  <div className="flex items-center space-x-1 text-white duration-300 ease-in-out hover:text-black">
    <Icon icon="fluent:mail-16-regular" className="h-5 w-5" />
    <Link
      href="mailto:info@xsuite.digital"
      target="_blank"
      className="border-[#c4a053] pr-2 border-r-2 hover:text-black"
    >
      info@xsuite.digital
    </Link>
  </div>

  <div className="flex items-center space-x-1 group text-white">
    <Icon
      icon="fluent:location-16-regular"
      className="h-5 w-5 group-hover:text-black duration-300 ease-in-out"
    />
    <Link
      href="https://maps.app.goo.gl/GG2dc7oKhrqR7zJX9" target="_blank"
      className="group-hover:text-black duration-300 ease-in-out"
    >
      <span className="text-white">Lawrence Road Lahore Pakistan</span>
    </Link>
  </div>
</div>

      </div>

    </div>
  );
};

export default Header;