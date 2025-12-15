import TitleLine from "./TitleLine";

export default function HeroSection() {

    return (
        <section 
        id="hero-section"
        className="min-h-120 h-screen flex items-center justify-center bg-(--bg-overlay) bg-blend-darken bg-[url(src/assets/images/banner1.jpg)] bg-cover bg-center"
        >
            
            <div className="w-[90%] max-w-(--container-xl) text-(--text-white) text-shadow-(--text-bright)">
                <h1 className="text-[clamp(1.6rem,5vw,3.3rem)] text-center font-bold">Gestão estratégica, segurança e resultados!</h1>
                <TitleLine />
                <p className="text-[clamp(0.9rem,2vw,1.3rem)] text-center md:text-justify">Aqui você encontrará soluções personalizadas nas áreas de Administração, Departamento Pessoal, Gestão de Pessoas, Segurança do Trabalho, Contratos e muito mais. Com experiência sólida e formação multidisciplinar, ofereço serviços estratégicos, para empresas que buscam excelência, organização e conformidade.</p>
            </div>

        </section>
    );
}