import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Homepage/Hero'
import { useEffect, useState } from 'react';
import Section2 from '../components/Homepage/Section2';
import Benefits from '../components/Homepage/Benifits';
import Work from '../components/Homepage/Work';
import Reviews from '../components/Homepage/Reviews';
import Plans from '../components/Homepage/Plans';
import Footer from '../components/Footer';

export default function Home() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <div>
      <Head>
        <title>Tuffer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {colorChange ? (
        <div className="fixed top-0 w-full bg-white shadow z-[999]">
          <Navbar />
        </div>
      ) : (
        <div className="fixed top-0 w-full z-[999]">
          <Navbar />
        </div>
      )}
      <Hero />
      <Section2 />
      <Benefits />
      <Work />
      <Reviews />
      <Plans />
      <Footer />
    </div>
  )
}
