//import CreatePost from '../component/CreatePost'
import Head from 'next/head'
import Navbar from '../component/Navbar'
import Heading from '../component/Heading'
import Section from '../component/Section'
import News from '../component/News'
import Cities from '../component/Cities'
import Footer from '../component/Footer'
import dynamic from 'next/dynamic'
import HomeCss from '../styles/Home.module.css'

export default function Home() {
  
  const Map = dynamic(() => import("../component/Map"), {
    loading: () => "Loading...",
    ssr: false,
    productionBrowserSourceMaps: true
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
  <div className={HomeCss.container}>
    <Map />
  </div>
  <Cities />

  <Footer />
   </>
  )
}
