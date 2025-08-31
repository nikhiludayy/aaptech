import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <Head>
        <title>AAPTech Consulting</title>
        <meta name="description" content="Driving Innovation, Delivering Excellence" />
        <link rel="icon" href="/assets/aw.svg" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
