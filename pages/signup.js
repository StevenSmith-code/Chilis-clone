import Navbar from "../components/Navbar"
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import * as yup from 'yup'
import {useState} from 'react'
import axios from "axios"
import router from "next/router"
import ClipLoader from "react-spinners/ClipLoader";

const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
const months = ['January',"February","March","April","May","June","July","August","September","October","November","December"]

const schema = yup.object().shape({
    firstName: yup.string().required('First name required!'),
    lastName: yup.string().required('Last name required!'),
    phoneNumber: yup.string().required('Phone number is required!'),
    birthdayMonth: yup.string().required('Birth month is required!').oneOf(months) ,
    birthdayDay: yup.number().required('Birth day is required!').oneOf(days) ,
    email: yup.string().email().required('Email is required!'),
    password: yup.string().min(6, 'Password is too short must be 6 characters minimun!').required('Password is required'),
    confirmPassword:yup.string().oneOf([yup.ref("password"), null], "Passwords must match!")
})


function signup() {

    const [inputValue, setinputValue] = useState('')
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#EF4443");
    const [exists, setExists] = useState(false)

    const handleInput = e =>{
        const formattedPhoneNumber = formatPhoneNumber(e.target.value)
        setinputValue(formattedPhoneNumber)
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

    const printDaysOfMonth = () =>{
        const days = []
        for(var i=1; i <32; i++){
            days.push(<option key={i}>{i}</option>)
        }
        return days
    }


    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    })


    const submitForm = (data) => {

        setLoading(true)
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }

    const JSONData = JSON.stringify(data)
    return axios.post('http://localhost:3000/api/signup', JSONData, {
        headers
    }).then((res) => {

        if(res.data.msg === "user already exists"){
            setLoading(false)
            setExists(true)
        }else{
            router.push('/')
        }
        console.log(res)

    })
    }
    return (
        <div className=" bg-loginbg mb-40">
            <Navbar/>
            <h1 className="text-center text-red-500 font-banner text-4xl tracking-wider mt-14 mb-5">JOIN MY CHILI'S REWARDS</h1>
            <p className="text-center max-w-3xl m-auto font-parafont text-xl">Get FREE Chips & Salsa or a Non-Alcoholic Beverage by visiting participating Chili’s at least once every 60 days. Plus rewards for free menu items and more by signing up for My Chili’s Rewards.</p>
            <div className="flex flex-col items-center max-w-2xl m-auto justify-center mt-10">
                {exists && <p className="text-red-500 font-main text-2xl">User Already Exists!</p>}
                <form className="w-full grid grid-cols-2 gap-5" onSubmit={handleSubmit(submitForm)}>
                    <div className="flex justify-between flex-col col-span-2">
                        <label className="font-parafont text-md tracking-wide">YOUR FAVORITE CHILI'S</label>
                        <input className="bg-white border-2 focus:outline-none focus:shadow-md transition duration-150 ease-in-out px-4 py-2" type="text" placeholder='Type your favorite Chilis location' />
                    </div>
                    
                        <div className="flex flex-col">
                            <label>FIRST NAME</label>
                            <input className="bg-white border-2 focus:outline-none focus:shadow-md transition duration-150 ease-in-out px-4 py-2" {...register("firstName", {
            required: "Required",
          })} name='firstName' type="text" />
                            <p className="text-red-500 font-parafont">{errors?.firstName?.message}</p>
                        </div>
                        <div className="flex flex-col">
                            <label>LAST NAME</label>
                            <input className="bg-white border-2 focus:outline-none focus:shadow-md transition duration-150 ease-in-out px-4 py-2" {...register("lastName", {
            required: "Required",
          })} name='lastName' type="text" />
                            <span className="text-red-500 font-parafont">{errors?.lastName?.message}</span>
                    </div>
                    
                    <div className=" flex flex-col">
                        <label>MOBILE PHONE</label>
                        <input className="bg-white border-2 focus:outline-none focus:shadow-md transition duration-150 ease-in-out px-4 py-2" {...register("phoneNumber", {
            required: "Required",
          })} onChange={(e) => handleInput(e)} value={inputValue} name='phoneNumber' type="tel" />
                        <span className="text-red-500 font-parafont">{errors?.phoneNumber?.message}</span>
                    </div>
                    <div>
                        <label>BIRTHDAY (MONTH / DAY)</label>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="">
                        <select name="birthdayMonth" className="bg-white border-2 focus:outline-none focus:shadow-md transition duration-150 ease-in-out px-4 py-2 w-full" {...register("birthdayMonth", {
            required: "Required",
          })} placeholder="Month" id="">
                            {months.map(month =>{
                                return(
                                    <option key={month} value={month}>{month}</option>
                                )
                            })}
                        </select>
                        <span className="text-red-500 font-parafont">{errors?.birthdayMonth?.message}</span>
                        </div>
                        <div>
                            <select className="bg-white border-2 focus:outline-none focus:shadow-md transition duration-150 ease-in-out px-4 py-2 w-full" {...register("birthdayDay", {
            required: "Required",
          })} name="birthdayDay" >
                                {
                                    printDaysOfMonth()
                                }
                            </select>
                            <span className="text-red-500 font-parafont">{errors?.birthdayDay?.message}</span>
                        </div>
                        </div>
                    </div>

                    

                    <div className="flex flex-col col-span-2">
                        <label >E-MAIL</label>
                        <input className="bg-white border-2 focus:outline-none focus:shadow-md transition duration-150 ease-in-out px-4 py-2" {...register("email", {
            required: "Required",
          })} type="text" />
          <span className="text-red-500 font-parafont">{errors?.email?.message}</span>
                    </div>
                        <div className="flex flex-col">
                            <label>PASSWORD</label>
                            <input  className="bg-white border-2 focus:outline-none focus:shadow-md transition duration-150 ease-in-out px-4 py-2" type="password" {...register("password", {
            required: "Required",
          })} name="password" />
          <span className="text-red-500 font-parafont">{errors?.password?.message}</span>
                        </div>
                        <div className="flex flex-col">
                            <label>CONFIRM PASSWORD</label>
                            <input className="bg-white border-2 focus:outline-none focus:shadow-md transition duration-150 ease-in-out px-4 py-2" type="password" {...register("confirmPassword", {
            required: "Required",
          })} name="confirmPassword" />
          <span className="text-red-500 font-parafont">{errors?.confirmPassword && "Passwords Should Match!"}</span>
                        </div>

                    <div className="flex col-span-2">
                        <input className="scale-150" type="checkbox" name="consent" id="" />
                        <p className="text-sm font-parafont w-[90%] m-auto">Yes, I give my express written consent to receive marketing text or native mobile messages via automated technology (e.g., automatic telephone dialing systems) from Chili’s at the mobile number provided. Up to 8 messages per month. Consent to receive messages is not a condition of purchasing any property, goods, or services. Text stop to end to 244547. Msg & data rates may apply. I also agree to the PRIVACY POLICY & TEXT TERMS & CONDITIONS</p>
                    </div>

                    {loading ? <ClipLoader color={color} loading={loading} size={50} /> : <input className='bg-red-500 px-10 py-2 rounded-md text-chilibaje font-medium mr-5' type="submit" />}
                    
                </form>
            </div>
        </div>
    )
}

export default signup
