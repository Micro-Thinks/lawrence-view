import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
        <div>
            <header className="bg-[#000000] px-10 py-4 flex  items-center justify-between border-b-2 border-[#c4a053] ">
                <div className="text-white flex space-x-8 ">
                    
<Link href='tel:+923206361916'>
                    +92 3206361916
</Link>
                    <Link href='mailto:lawrenceviewhotel@gmail.com'>
                    lawrenceviewhotel@gmail.com
                    </Link>
                    </div>
                <div>
                    <Image src='/LVH-logo.png' alt="lvh pic" height={100} width={100} />
                </div>
                <div className="flex space-x-6">
                    <div className="flex space-x-2">
                        <Image src='/fb-logo.png' alt="social-media icon" className="h-auto w-full" height={10} width={40} />
                        <Image src='/insta-logo.png' alt="social-media icon" className="h-auto w-full" height={10} width={40} />
                        <Image src='/linkedin-logo.png' alt="social-media icon"  className="h-auto w-full" height={10} width={40} />
                    </div>
                    <div>
                        <button className="bg-white hover:text-white hover:bg-[#c4a053] duration-300 ease-in-out font-semibold px-4 py-4 rounded-xl">Book Now</button>
                    </div>
                </div>
            </header>
    </div>
  )
}

export default page
