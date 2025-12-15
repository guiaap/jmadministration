import SectionHeader from "./SectionHeader";

export default function aboutSection() {

    return (
        <section id="about-section">
            <article className="w-[90%] max-w-(--container-md) m-auto">
                <SectionHeader title={"Sobre mim"}/>
                
                <div className="flex flex-col gap-2 mt-5 [&>p,&>ul,&>h3]:text-[clamp(0.9rem,1.3vw,1.4rem)] text-justify">
                    <p>Sou formada em Administração de Empresas e pós-graduada em Gestão Estratégica de Pessoas. Complemento minha atuação com especializações em Segurança do Trabalho, Gestão de Cargos e Salários, Gestão de Contratos, Programação Neurolinguística (PNL) e Administração de Condomínios.</p>
                    <p>Atuo há mais de 20 anos na área administrativa, com foco de 15+ anos em Departamento Pessoal. Tenho experiência sólida nos setores de construção civil e eletromecânica, onde desenvolvi expertise em gestão de pessoas, processos e segurança do trabalho.</p>
                    <p>Também sou Administradora Judicial e Perita registrada no CRA-SC, o que amplia minha visão técnica e jurídica para apoiar empresas e profissionais em decisões seguras e eficientes.</p>
                    <h3 className="font-bold">Como trabalho:</h3>
                    <ul className="list-disc pl-6 md:pl-8 text-left">
                        <li>Atendimento próximo e humanizado.</li>
                        <li>Processos claros, com rotinas e indicadores.</li>
                        <li>Entregas objetivas e aplicáveis no dia a dia.</li>
                    </ul>
                    <p>Se você busca organização, conformidade e resultados práticos, posso ajudar a construir o caminho do planejamento, à execução.</p>
                </div>
                
            </article>
        </section>

    );

}