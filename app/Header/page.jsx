import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
        <div>
            <header className="bg-[#000000] px-8 py-2 flex  items-center justify-between border-b-2 border-[#c4a053] ">
                <div className="text-white flex space-x-8 ">
                    
<Link href='tel:+923206361916' className="hover:text-[#c4a053] duration-300 ease-in-out">
                    +92 3206361916
</Link>
                    <Link className="hover:text-[#c4a053] duration-300 ease-in-out" href='mailto:lawrenceviewhotel@gmail.com'>
                    lawrenceviewhotel@gmail.com
                    </Link>
                    </div>
                <div>
                    <Image src='/LVH-logo.png' alt="lvh pic" className="h-auto w-full" height={100} width={100} />
                </div>
                <div className="flex space-x-6">
                    <div className="flex items-center justify-center space-x-2">
                        <Image src='/Facebook.png' alt="social-media icon" className=" h-8 w-full" height={16} width={50} />
                        <Image src='/instagram.png' alt="social-media icon" className=" h-8 w-full" height={16} width={50} />
                        <Image src='/LinkedIn.png' alt="social-media icon"  className=" h-8 w-full" height={16} width={50}/>
                    </div>
                    <div>
                        <button className="bg-white hover:text-white hover:bg-[#c4a053] duration-300 ease-in-out font-semibold px-3 py-2 rounded-xl">Book Now</button>
                    </div>
                </div>
            </header>
    </div>
  )
}

export default page
