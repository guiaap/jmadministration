import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/aboutSection";

export default function App() {

  return (
    <div className="min-h-screen max-w-(--container-max) m-auto bg-(--bg-primary) font-nunito">
    
      <Header />

      <main className="[&>section]:py-[clamp(1.5rem,4vw,2.5rem)]">
        <HeroSection />
        <AboutSection />
      </main>

      <Footer />

    </div>

  );
}


