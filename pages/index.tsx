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
        {/* SEO base */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DevHub | Sites, Sistemas e Móveis Planejados em Sobral</title>
        <meta name="description" content="Desenvolvemos sites profissionais, sistemas sob medida, design gráfico e impressão. Atendemos Sobral e toda a região com soluções digitais completas." />
        <meta name="keywords" content="DevHub, sites em Sobral, sistemas web, moveis planejados, design gráfico, impressão, desenvolvimento web, software personalizado" />
        <meta name="author" content="DevHub" />
        <link rel="canonical" href="https://devhub-lake.netlify.app/" />
        <link rel="icon" href="/assets/favicon.ico" />

        {/* Open Graph (para Facebook, WhatsApp, etc.) */}
        <meta property="og:title" content="DevHub | Sites, Sistemas e Impressão em Sobral" />
        <meta property="og:description" content="Desenvolvemos sites profissionais, sistemas sob medida, design gráfico e impressão." />
        <meta property="og:url" content="https://devhub-lake.netlify.app/" />
        <meta property="og:image" content="https://devhub-lake.netlify.app/assets/logo.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DevHub | Sites, Sistemas e Impressão em Sobral" />
        <meta name="twitter:description" content="Sites, sistemas e design com qualidade profissional." />
        <meta name="twitter:image" content="https://devhub-lake.netlify.app/assets/logo.png" />

    
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
