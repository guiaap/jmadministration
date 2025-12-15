

export default function Logo({isMobile}) {

    return (
        <a 
        href="index.html"
        className="flex items-center gap-3">
            <img
                src="src/assets/images/logo.png"
                alt="Logo da Joelma Matias - Soluções documentais"
                className="h-[45px] w-[45px]"
            />

            { !isMobile ?
                <h1 className="flex flex-col">
                    <span className="text-[1.4rem]">Joelma Matias</span>
                    <span className="text-[0.8rem]">Soluções Documentais</span>
                </h1>
            : "" }    
        </a>
    );
    
}