import SectionHeader from "./SectionHeader";
import Avatar from "./Avatar";
import DiferentialsCard from "./DiferentialsCard";

export default function aboutSection() {

    return (
        <section 
        id="about-section"
        className="flex flex-col items-center justify-center gap-5 md:gap-10"
        >
            <article className="w-[90%] max-w-(--container-md)">
                <SectionHeader title={"Sobre mim"}/>
                
                <div className="flex flex-col gap-2 mt-5 [&>p,&>ul]:text-[clamp(0.8rem,1.2vw,1.3rem)] text-justify">
                    <p>Sou formada em Administração de Empresas e pós-graduada em Gestão Estratégica de Pessoas. Complemento minha atuação com especializações em Segurança do Trabalho, Gestão de Cargos e Salários, Gestão de Contratos, Programação Neurolinguística (PNL) e Administração de Condomínios.</p>
                    <p>Atuo há mais de 20 anos na área administrativa, com foco de 15+ anos em Departamento Pessoal. Tenho experiência sólida nos setores de construção civil e eletromecânica, onde desenvolvi expertise em gestão de pessoas, processos e segurança do trabalho.</p>
                    <p>Também sou Administradora Judicial e Perita registrada no CRA-SC, o que amplia minha visão técnica e jurídica para apoiar empresas e profissionais em decisões seguras e eficientes.</p>
                    <h3 className="font-bold text-[clamp(0.9rem,1.3vw,1.4rem)]">Como trabalho:</h3>
                    <ul className="list-disc pl-6 md:pl-8 text-left">
                        <li>Atendimento próximo e humanizado.</li>
                        <li>Processos claros, com rotinas e indicadores.</li>
                        <li>Entregas objetivas e aplicáveis no dia a dia.</li>
                    </ul>
                    <p>Se você busca organização, conformidade e resultados práticos, posso ajudar a construir o caminho do planejamento, à execução.</p>
                </div>
            </article>

            <div className="relative h-75 md:h-42 w-63 md:w-97">
                <div className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 z-10 md:top-1/2 md:-translate-y-1/2 h-35 w-35 border-2 border-(--primary-700) rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-[3px_3px_0px_var(--primary-600)]">
                    <Avatar />
                </div>
                <div className="absolute top-33 md:top-0 left-1/2 md:left-auto md:right-0 -translate-x-1/2 md:translate-x-0 w-63 z-0">
                    <DiferentialsCard />
                </div>
            </div>
        </section>

    );

}