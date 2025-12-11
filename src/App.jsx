import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function App() {

  return (
    <div className="min-h-screen bg-(--base) font-nunito">
    
      <Header />

      <main>
        <HeroSection />

      </main>

      <Footer />

    </div>

  );
}


