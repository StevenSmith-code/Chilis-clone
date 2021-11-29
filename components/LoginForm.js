import {useState} from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import router from 'next/router'
function LoginForm() {

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

    const [inputValue, setinputValue] = useState('')
    const [state, setState] = useState({
    })

    const [passwordValue, setPasswordValue] = useState('')

    const handleInput = e =>{
        const formattedPhoneNumber = formatPhoneNumber(e.target.value)
        setinputValue(formattedPhoneNumber)
        setState({...state, [e.target.name]: e.target.value})
    }

    const handlePass = e =>{
        setPasswordValue(e.target.value)
        setState({...state, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {


        const formData = {
            phoneNumber: inputValue,
            password: passwordValue
        }

        const JSONData = JSON.stringify(formData)

        console.log(JSONData)

        e.preventDefault()

        await axios.post("../api/login", JSONData, {
            headers
        })
        .then((res) =>{
            console.log(res.data)
            router.push('/')

        })
        .catch(err => console.error(err))
            
        
    }

    const formatPhoneNumber = value => {
        if(!value) return value
        
        const phoneNumber = value.replace(/[^\d]/g, "")

        const phoneNumberLength = phoneNumber.length

        if (phoneNumberLength < 4) return phoneNumber
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3)}`
          }
        
          return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(
            3,
            6
          )}-${phoneNumber.slice(6, 10)}`
        }

    return (
        <div className="bg-loginbg grid grid-cols-2 h-[60vh]">
            <div className='flex flex-col items-center mt-10 border-r-2'>
                <h1 className="text-red-500 font-main font-bold text-4xl">LOG IN</h1>
                <form onSubmit={handleSubmit} className="space-y-10 mt-8 mb-5">
                    <div className='flex flex-col'>
                    <label>PHONE:</label>
                    <input className="bg-white border-2 border-gray-200 w-[450px] h-[40px] rounded-lg tracking-tighter focus:shadow-md focus:border-gray-400 focus:outline-none pl-2" placeholder="(_ _ _)_ _ _-_ _ _ _" onChange={(e) => handleInput(e)} value={inputValue} type="tel" name="phonenumber" id="phone" />
                    </div>
                    <div className="flex flex-col">
                        <label>Password:</label>
                        <input className="bg-white border-2 border-gray-200 w-[450px] h-[40px] rounded-lg focus:shadow-md focus:border-gray-400 focus:outline-none pl-2" onChange={(e) => handlePass(e)} value={passwordValue} type="password" name="password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-red-500 px-10 py-2 rounded-md text-chilibaje font-medium mr-5">LOG IN</button>
                        <div className="">
                        <input className=" scale-150" type="checkbox" id="" /> <label className="ml-2 font-main text-sm font-semibold">STAY LOGGED IN</label>
                        </div>
                    </div>
                </form>
                <p className="text-green-600 font-main font-semibold cursor-pointer">Forgot or create your password?</p>
            </div>

            <div className='flex flex-col max-w-xl mx-auto'>
                <div className="mx-auto mb-3">
                    <Image src="https://www.chilis.com/images/rewards/xmcr-logo-wide.png.pagespeed.ic.D2zs5eo9Ka.webp" width='300px' height='100px' objectFit="contain"></Image>
                </div>
                
                <p className="font-parafont text-lg mb-5">Join My Chili's Rewards and get FREE Chips & Salsa or a Non-Alcoholic Beverage on every visit at participating locations. It’s easy, come in or order To Go and redeem your reward!</p>
                <p className="font-parafont text-lg mb-5">But wait, there's more!</p>

                <div className=" max-w-md mx-auto">
                    <ul className="list-disc list-outside font-parafont text-lg">
                        <li>Personalized Rewards – free kids meal, appetizers, desserts and more!</li>
                        <li>Free dessert on your birthday</li>
                        <li>Free Wifi</li>
                        <li>1-Tap reorder of your favorites in the Chili's mobile app</li>
                    </ul>
                </div>
                <Link href='/signup'>
                <button className="bg-red-500 mt-7 px-10 py-2 rounded-md text-chilibaje font-medium w-44 mx-auto">JOIN NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default LoginForm
