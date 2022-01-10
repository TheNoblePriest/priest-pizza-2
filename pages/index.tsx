import Head from 'next/head';
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Banner from '../components/Banner';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Food Ordering</title>
      </Head>

      <main>
        <Navbar/>
        <Banner/>
        <Body heading={"BEST PIZZA IN OUR CITY"}/>
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  )
}
