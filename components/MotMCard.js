import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function MotMCard() {
    return (
        <div className="grid grid-cols-2 h-[75vh] -mt-2">
            <div className="flex flex-col items-center justify-center max-w-3xl m-auto text-center space-y-10">
                <h1 className="font-main font-bold text-4xl">Try a new Chili's $5 Margarita of the Month, every month!</h1>
                <p className="font-parafont text-2xl">Every month we come out with a new and unique premium margarita for you to try. And guess what, it's ALWAYS $5 ALL month long! Stop by your local Chili's today to try this month's $5 margarita. Hurry in before it's gone and keep your eyes peeled for next month's $5 margarita.</p>
                <h2 className="font-main font-bold text-xl">Always $5. ALL month long.</h2>
                <div>
                    <Link href='https://www.chilis.com/cocktails-and-bar-drinks/margarita-of-the-month'>
                    <a className='bg-red-600 text-chilibaje font-main font-bold px-20 py-5 rounded-md text-shadow-md cursor-pointer'>LEARN MORE</a>
                    </Link>
                </div>
            </div>
            <div className="relative">
                <Image layout='fill'  src='https://images.prismic.io/brinker-chilis%2Fab5b5ebc-971d-433d-9bd8-9465f1b90ce3_desktop+%281%29.png?auto=compress,format&rect=0,0,800,600&w=800&h=600'></Image>
            </div>
        </div>
    )
}

export default MotMCard
