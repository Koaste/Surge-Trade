import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import Banner from '../components/Banner'
import { useState } from "react"

type Props = {
}

const Home = (props: Props) => {
  const [stockSymbol, setStockSymbol] = useState("FB");

  return (
    <div className='text-[white] min-h-screen overflow-y-hidden overflow-x-hidden z-0 bg-slate-800'>
      <Head>
        <title>Surge Trade</title>
      </Head>
      <div>
        <Nav/>
      </div>
      <div className='flex relative col-span-2'>
        <Banner />
      </div>
    </div>
  )
}

export default Home