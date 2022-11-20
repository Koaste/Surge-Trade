import Head from 'next/head'
import Nav from '../components/nav'
import Image from 'next/image'
import Banner from '../components/Banner'
import Dashboard from '../components/Dashboard'

type Props = {
}


const Home = (props: Props) => {
  return (
    <div className='text-[white] min-h-screen overflow-y-hidden overflow-x-hidden z-0 bg-slate-800'>
      <Head>
        <title>Surge Trade</title>
      </Head>
      <div>
        <Nav />
      </div>
      <Dashboard />
    </div>
  )
}

export default Home