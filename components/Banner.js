import Image from'next/image'
import Link from 'next/link'
function Banner() {
    return (
        <div className='relative h-[60vh]'>
            <Image src='https://images.prismic.io/brinker-chilis/ecc8b9dc-9b21-4225-ab21-db4f750edd88_Burger+Image1.png?auto=compress,format&rect=0,0,1600,512&w=1600&h=512' layout='fill'></Image>
            <div className="font-banner absolute text-chilitext font-normal drop-shadow-md left-[24vw] top-[16vh] text-center text-shadow-lg  ">
                <h1 className=" text-8xl">DOUBLE THE BEEF</h1>
                <h3 className="text-5xl mt-6 font-main font-extrabold tracking-wider">DOUBLE THE FLAVOR</h3>
                <Link href="/order">
                <p className=' cursor-pointer text-xl mt-20 left-[38%] px-8 py-4 rounded-md absolute bg-red-600 w-50 font-main font-semibold'>START ORDER</p>
                </Link>
            </div>
            
        </div>
    )
}

export default Banner
