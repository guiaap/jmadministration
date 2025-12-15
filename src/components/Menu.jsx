

export default function Menu({isOpen, isMobile, setOpen}) {

    return (
        <ul className={`  

        flex bg-(--primary-900)
        [&>li>a]:block  
        [&>li>a]:p-1 
        [&>li>a]:text-[1rem]
        [&>li>a:hover]:text-(--primary-300) 
        [&>li>a:hover]:text-shadow-(--text-bright)
        [&>li>a:hover]:transition-colors
        [&>li>a:hover]:duration-300

            ${ isMobile ? `
                absolute top-[66px] left-0 w-full flex-col 
                [&>li]:w-full 
                [&>li]:border-b 
                [&>li]:border-(--border-light)  

                ${isOpen ? "max-h-[210px] opacity-100 p-3" : "max-h-0 opacity-0 overflow-hidden"}
            `

            : `
                gap-3
                [&>li]:relative
                [&>li::after]:absolute
                [&>li::after]:bottom-0
                [&>li::after]:left-0
                [&>li::after]:content-['']
                [&>li::after]:h-px
                [&>li::after]:w-0
                [&>li::after]:bg-(--primary-300)
                [&>li::after]:transition-all
                [&>li::after]:duration-500
                [&>li:hover::after]:w-full
             `}

        `}>
            <li><a href="#hero-section" onClick={() => setOpen(false)} >Início</a></li>
            <li><a href="#about-section" onClick={() => setOpen(false)}>Sobre mim</a></li>
            <li><a href="#services-section" onClick={() => setOpen(false)}>Serviços</a></li>
            <li><a href="#blog-section" onClick={() => setOpen(false)}>Blog</a></li>
            <li><a href="#contact-section" onClick={() => setOpen(false)}>Contato</a></li>
        </ul>
    );
    
}