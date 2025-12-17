import { useState, useEffect } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import SortIcon from "./SortIcon";

export default function Header() {

    const [isMobile, setIsMobile] = useState(false);
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

        function checkScreenWidth() {
            setIsMobile(window.innerWidth < 900);
        }

        checkScreenWidth();

        window.addEventListener("resize", checkScreenWidth);
  
        return () => {
            window.removeEventListener("resize", checkScreenWidth);
        }
    }, []); 

    useEffect(() => {

        function checkScroll() {
            setIsScrolled(window.scrollY > 100);
        }

        checkScroll();

        window.addEventListener("scroll", checkScroll);

        return () => {
            window.removeEventListener("scroll", checkScroll);
        }

    }, []);

    return (

        <header className={`w-full fixed top-0  z-(--z-fixed) transition-colors duration-300
        ${ isScrolled && !isMobile ? "bg-[linear-gradient(to_bottom,var(--primary-900)_60%,var(--primary-600)_100%)]" : "bg-transparent" }
        ${ isMobile ? "bg-[linear-gradient(to_bottom,var(--primary-900)_60%,var(--primary-600)_100%)]" : ""}
        `}>
            <nav className="relative max-w-(--container-xl) m-auto flex items-center justify-between p-2 text-(--text-white)">

                <Logo isMobile={isMobile} />
                <Menu isOpen={open} setOpen={setOpen} isMobile={isMobile} />
              
                { isMobile ? 
                    <button onClick={() => setOpen(!open)}>
                        { open 
                            ? <SortIcon name={"close"} /> 
                            : <SortIcon name={"menu"} /> }
                    </button>
                    : 
                    <a 
                    href="https://wa.me/47991181188"
                    target="_blank"
                    id="whatsapp-header-button"
                    className="flex items-center gap-2 p-2 border border-(--border-light) rounded-md  transition-colors duration-300 hover:text-(--primary-300) hover:border-(--primary-300)
                    [&>svg]:fill-(--text-white) 
                    [&>svg]:transition-colors 
                    [&>svg]:duration-300 
                    [&:hover>svg]:fill-(--primary-300)
                    ">
                        <SortIcon name={"whatsapp"} height={"20px"} width={"20px"}  /> 
                        <span className="text-[clamp(0.9rem,1.5vw,1.1rem)]">Vamos Conversar</span>     
                    </a>
                 }
            </nav>
        </header>
    );
}