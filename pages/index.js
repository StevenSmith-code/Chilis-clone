import Head from 'next/head'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import JobSection from '../components/JobSection'
import axios from 'axios'
import RewardsCard from '../components/RewardsCard'
import MotMCard from '../components/MotMCard'

export default function Home({users}) {
  return (
    <div>
      <Navbar users={users}/>
      <Banner/>
      <Carousel/>
      <JobSection/>
      <RewardsCard/>
      <MotMCard/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await axios.get('http://localhost:3000/api/users')

  return {
    props: {
      users:res.data
    }
  }

}