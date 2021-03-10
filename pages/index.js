//import CreatePost from '../component/CreatePost'
import Head from 'next/head'
import Navbar from '../component/Navbar'
import Heading from '../component/Heading'
import Section from '../component/Section'
import News from '../component/News'
import Cities from '../component/Cities'
import Footer from '../component/Footer'
import dynamic from 'next/dynamic'

export default function Home() {
  
  const Map = dynamic(() => import("../component/Map"), {
    loading: () => "Loading...",
    ssr: false
  });

  return (
    <>
    <Head>
      <title>Notai IT</title>
      </Head>
  <Navbar />

  <Heading />

  <Section />

  {/* <CreatePost /> */}

  <News />
    <Map />
  <Cities />

  <Footer />
   </>
  )
}
