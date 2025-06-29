import Head from 'next/head';
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Carousel from "../components/Carousel/Carousel";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevHub</title>
        <meta name="description" content="Portfólio e serviços da DevHub - desenvolvimento web, sistemas, impressão e design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <Hero />
      <Services />
      <Carousel />
      <ContactForm />
      <Footer />
    </>
  );
}
