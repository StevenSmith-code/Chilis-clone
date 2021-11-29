import Image from 'next/image'
import Link from 'next/link'

function JobSection() {
    return (
        <div className='grid grid-cols-2 h-[650px] mt-14'>
            <div className='relative'>
                <Image layout='fill' objectFit='fill' src='https://images.prismic.io/brinker-chilis/c656052e-698d-4fbb-be74-e8263fdbb537_CHI-27027_HiringSupport_FeatureCard_Desktop.jpg?auto=compress,format&rect=0,0,800,600&w=800&h=600'></Image>
            </div>
            <div className='flex flex-col items-center justify-center max-w-3xl m-auto text-gray-800 space-y-10 text-center'>
                <h1 className='font-main font-black text-4xl'>Join the ChiliHead family!</h1>
                <p className='font-parafont text-2xl'>We’re looking to grow our ChiliHead family with awesome people who know how to bring food AND fun to the table. We’re proud to offer our Team Members medical benefits, no-cost GED & Associates Degrees, competitive salary and even discounted meals! Apply today for our available full-time and part-time positions and let’s do this! </p>
                <div className='bg-red-600 px-8 py-3 text-chilibaje rounded-md cursor-pointer'>
                    <a className="text-lg font-bold">APPLY NOW</a>
                </div>
            </div>
            
        </div>
    )
}

export default JobSection
