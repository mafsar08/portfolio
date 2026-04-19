import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkHistory from "@/components/WorkHistory";
import TrackRecord from "@/components/TrackRecord";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundPattern from "@/components/BackgroundPattern";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function Home() {
  return (
    <>
      <WelcomeScreen />
      <BackgroundPattern />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrackRecord />
        <WorkHistory />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
