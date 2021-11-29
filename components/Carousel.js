import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {
    Pagination
  } from 'swiper';

  SwiperCore.use([Pagination]);

function Carousel() {


    return (
        <div className="items-center text-center h-96 max-w-7xl m-auto">

        <h1 className=' font-main font-bold text-gray-700 tracking-wide text-4xl mt-9 mb-10'>CHILI'S FAVORITES</h1>

            <Swiper className="" slidesPerView={4} spaceBetween={20} pagination={{
                "clickable": true
            }}>
                <SwiperSlide>
                    <div className="flex flex-col font-main justify-between">
                        <div className="border-2 shadow-md rounded-xl h-full">
                        <Image src='https://www.chilis.com/images/google/xView-My-Favorites.jpg.pagespeed.ic.WM9qd0eXlA.webp' width='300px' height="200px" objectFit='contain'></Image>
                        </div>
                        <div className="flex flex-col items-center justify-between space-y-2 mt-2">
                            <div>
                                <h1 className="font-bold">LOG IN</h1>
                            </div>
                            <div>
                                <p className="text-sm text-left"><span className="text-green-700">Log in</span> to your My Chili's Rewards account to view your favorites.</p>
                            </div>
                            <div className='bg-red-600 px-6 py-1 rounded-md'>
                            <p className="text-white">LOG IN</p>
                        </div>
                        </div>
                        
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" flex flex-col justify-between font-main">
                        <div className="border-2 shadow-md rounded-xl">
                        <Image src='https://images.prismic.io/brinker-chilis/70711607240dd73425c94f38502557da75f73e77_mixnmatchfajitas.jpg?auto=compress,format' width='300px' height="200px" objectFit='fill'></Image>
                        </div>

                        <div className="flex flex-col justify-between items-center space-y-4 mt-2">
                            <div>
                                <h1 className="font-bold">Mix & Match Fajitas</h1>
                            </div>
                            <div>
                                <p className="text-sm text-left">Chicken, Steak</p>
                            </div>
                            <div className='bg-red-600 px-6 py-1 rounded-md'>
                            <p className="text-white">ADD TO ORDER</p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" flex flex-col items-center font-main">
                        <div className="border-2 shadow-md rounded-xl">
                        <Image src='https://images.prismic.io/brinker-chilis/a18d51e26d756dcb9f5c1fc92c79619580673418_crispyhoneychipotlechickencrispers.jpg?auto=compress,format' width='300px' height="200px" objectFit='fill'></Image>
                        </div>
                        <div className='flex flex-col items-center space-y-4 mt-2'>
                            
                        <h1 className="font-bold">Crispy Honey-Chipotle Crispers</h1>
                        <p className="text-sm text-left">Corn On The Cob, Fries</p>
                        <div className='bg-red-600 px-6 py-1 rounded-md'>
                            <p className="text-white">ADD TO ORDER</p>
                        </div>
                        </div>
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" flex flex-col items-center font-main">
                        <div className="border-2 shadow-md rounded-xl">
                        <Image src='https://images.prismic.io/brinker-chilis/f3f9b4b4-8bd6-496d-aeb9-e534e16fb639_OLDTIMER+WITH+CHEESE+OLO.jpg?auto=compress,format&rect=0,0,600,400&w=600&h=400' width='300px' height="200px" objectFit='fill'></Image>
                        </div>

                        <div className='flex flex-col items-center space-y-3 mt-2'>
                        <h1 className="font-bold">Oldtimer with Cheese</h1>
                        <p className="text-sm text-left">Beef Patty, No Pink, Fries</p>
                        <div className='bg-red-600 px-6 py-1 rounded-md'>
                            <p className="text-white">ADD TO ORDER</p>
                        </div>
                        </div>
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" flex flex-col items-center font-main">
                        <div className="border-2 shadow-md rounded-xl">
                        <Image src='https://images.prismic.io/brinker-chilis/f0df83a0-48d5-49b5-a642-d96992d8b180_CAJUN+CHICKEN+PASTA+OLO+LOWRES.jpg?auto=compress,format&rect=0,0,1400,933&w=600&h=400' width='300px' height="200px" objectFit='fill'></Image>
                        </div>

                        <div className='flex flex-col items-center space-y-3 mt-2'>
                        <h1 className="font-bold">Cajun Chicken Pasta</h1>
                        <p className="text-sm text-center">Chicken or Shrimp, Garlic Toast</p>
                        <div className='bg-red-600 px-6 py-1 rounded-md'>
                            <p className="text-white">ADD TO ORDER</p>
                        </div>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" flex flex-col items-center font-main">
                        <div className="border-2 shadow-md rounded-xl">
                        <Image src='https://images.prismic.io/brinker-chilis/0683a9d5-c884-4641-93d8-a87e78771420_APPS-COVER+OLO+TRIPPLE+DIPPER+LOWRES.jpg?auto=compress,format&rect=0,0,600,400&w=600&h=400' width='300px' height="200px" objectFit='fill'></Image>
                        </div>
                        <div className='flex flex-col items-center space-y-1 mt-2'>
                        <h1 className="font-bold">Triple Dipper™</h1>
                        <p className="text-sm text-left">Big Mouth® Bites, Boneless Buffalo Wings, Awesome Blossom Petals</p>
                        <div className='bg-red-600 px-6 py-1 rounded-md'>
                            <p className="text-white">ADD TO ORDER</p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" flex flex-col items-center font-main">
                        <div className="border-2 shadow-md rounded-xl">
                        <Image src='https://images.prismic.io/brinker-chilis/be9cc21d-d5b3-4b81-afbc-61a443042538_Alex%27s+Santa+Fe.jpg?auto=compress,format&rect=0,0,1600,1067&w=600&h=400' width='300px' height="200px" objectFit='fill'></Image>
                        </div>
                        <div className='flex flex-col items-center space-y-3 mt-2'>
                        <h1 className="font-bold">Alex's Santa Fe Burger</h1>
                        <p className="text-sm text-left">Beef Patty, No Pink, Fries</p>
                        <div className='bg-red-600 px-6 py-1 rounded-md'>
                            <p className="text-white">ADD TO ORDER</p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                
                
                
                
                
            </Swiper> 
        </div>
    )
}

export default Carousel
