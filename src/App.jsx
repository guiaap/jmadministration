import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/aboutSection";

export default function App() {

  return (
    <div className="min-h-screen bg-(--bg-primary) font-nunito">
    
      <Header />

      <main className="[&>section]:pt-10 [&>section]:pb-10">
        <HeroSection />
        <AboutSection />
      </main>

      <Footer />

    </div>

  );
}


