import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import FeaturesBar from "@/components/landing/FeaturesBar";
import Services from "@/components/landing/Services";
import CoreValues from "@/components/landing/CoreValues";
import Industries from "@/components/landing/Industries";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import ClientsMarquee from "@/components/landing/ClientsMarquee";
import CtaBanner from "@/components/landing/CtaBanner";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturesBar />
      <Services />
      <CoreValues />
      <Industries />
      <WhyChooseUs />
      <ClientsMarquee />
      <CtaBanner />
      <Footer />
    </main>
  );
}