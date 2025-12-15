import { useState, useEffect } from "react";
import TitleLine from "./TitleLine";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/src/assets/images/banner1.jpg",
    "/src/assets/images/banner2.jpg",
    "/src/assets/images/banner3.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="hero-section"
      className="relative h-[95vh] overflow-hidden shadow-(--shadow-lg)"
    >

    <div className="absolute inset-0">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentIndex === index ? 1 : 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          
          <div className="absolute inset-0 bg-(--bg-overlay)"></div>
        </div>
      ))}
    </div>

      <div className="relative z-10 flex items-center justify-center h-full">
          <div className="w-[90%] max-w-(--container-x flex flex-col gap-1 text-(--text-white) text-shadow-(--text-bright)">
            <h1 className="text-[clamp(1.8rem,5vw,3.5rem)] text-center font-bold">
              Gestão estratégica, segurança e resultados!
            </h1>

            <TitleLine />

            <p className="max-w-(--container-lg) m-auto text-[clamp(1rem,2vw,1.4rem)] text-center">
              Aqui você encontrará soluções personalizadas nas áreas de Administração,
              Departamento Pessoal, Gestão de Pessoas, Segurança do Trabalho, Contratos
              e muito mais.
            </p>
          </div>
        </div>

    </section>
  );
}
