import Image from 'next/image'
import Link from 'next/link'
function RewardsCard() {
    return (
        <div className="relative z-10">
            <div className='filter brightness-50'>
            <Image width="1920px" height="600px" objectFit='fill'  src="https://images.prismic.io/brinker-chilis/8f7e101e-df23-487d-af8a-34930c11e544_5a94791f25889500116fcc8f-v2.jpg?auto=compress,format&rect=0,1097,3000,960&w=1600&h=512"></Image>
            </div>

            <div className="absolute top-0 w-full items-center flex flex-col h-full justify-center text-shadow-md space-y-10">
                <h1 className="text-4xl text-chilibaje font-main font-bold">Get Free Food with My Chili's Rewards!</h1>
                <p className="font-parafont text-chilibaje text-2xl">Use your Rewards with your Curbside, Pickup or Delivery order from chilis.com.</p>

                <div className="flex justify-between space-x-6">
                    <div className="bg-red-600 rounded-md text-chilibaje font-main font-bold px-6 py-3 text-shadow-md cursor-pointer">
                        <Link href="/signup">
                        <a>JOIN MY CHILI'S REWARDS</a>
                        </Link>
                    </div>
                    <div className="bg-chilibaje rounded-md text-red-500 font-main font-bold px-6 py-3 text-shadow-md cursor-pointer">
                        <Link href='/login'>
                        <a>LOG IN TO MY CHILI'S REWARDS</a>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RewardsCard
