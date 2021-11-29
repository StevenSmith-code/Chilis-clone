
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

function Navbar(users) {

   
    return (
      <section>
          <div className="bg-red-500 h-[5px] drop-shadow-sm"/>
          
          <div className="flex items-center justify-between max-w-[1600px] h-32 m-auto font-main text-gray-600 font-semibold tracking-wider">
              <div className="flex items-center h-full">
                <Link href='/'>
                <Image className="cursor-pointer" src="https://www.chilis.com/images/xlogo-fallback.png.pagespeed.ic.MY4OtSl3Ln.webp" objectFit='contain' width="105px" height="100px"/>
                </Link>
                <div className="h-full flex items-center">
                <div className="flex ml-6 space-x-3 h-full items-center">
                <div className="h-full items-center flex px-3 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer ">
                    <Link href="/rewards">
                        <a>REWARDS</a>
                    </Link>
                </div>
                <div className="h-full items-center flex px-3  hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer  ">
                <Link href="/order">
                    <a>ORDER NOW</a>
                </Link>
                </div>
                <div className="h-full items-center flex px-3 hover:bg-gray-100 hover:transition duration-300 ease-in-out cursor-pointer ">
                <Link href="/menu">
                    <a>MENU</a>
                </Link>
                </div>
                <div className="h-full items-center flex px-3 hover:bg-gray-100 hover:transition duration-300 ease-in-out cursor-pointer ">
                <Link href="/locations">
                    <a>LOCATIONS</a>
                </Link>
                </div>
                <div className="h-full items-center flex px-3 hover:bg-gray-100 hover:transition duration-300 ease-in-out cursor-pointer ">
                <Link href="/gift-cards">
                    <a className="">GIFT CARDS</a>
                </Link>
                </div>
                <div className="h-full items-center flex px-3 hover:bg-gray-100 hover:transition duration-300 ease-in-out cursor-pointer ">
                <Link href="/jobs">
                    <a className="">APPLY NOW</a>
                </Link>
                </div>
                <div className="h-full items-center flex px-3 cursor-pointer hover:bg-gray-100 hover:transition ">
                <Link href={`/login`}>
                    <a>LOG IN</a>
                </Link>
                </div>
                </div>
               
                
                </div>
              </div>
              <Link href="/checkout">
              <div className="flex items-center space-x-4 cursor-pointer">
                  
                <p className="text-green-700">0 ITEMS</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                
              </div>
              </Link>
          </div>

        <Link href="/locations">
        <div className=" z-10 sticky top-0 flex items-center h-12 justify-center text-sm  bg-chilibaje cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-green-700 font-main font-medium">Find a nearby Chili’s</p>
          </div>
        </Link>
          
      </section>

    )
}

export default Navbar