import { useState, useEffect } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import SortIcon from "./SortIcon";

export default function Header() {

    const [isMobile, setIsMobile] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {

        function checkScreenWidth() {
            setIsMobile(window.innerWidth < 840);
        }

        checkScreenWidth();

        window.addEventListener("resize", checkScreenWidth);
  
        return () => {
            window.removeEventListener("resize", checkScreenWidth);
        }
    }, []); 

    return (

        <header className="w-full fixed top-0 bg-(--primary-900)">
            <nav className="relative max-w-(--container-xl) m-auto flex items-center justify-between p-2 text-(--text-white)">

                <Logo isMobile={isMobile} />
                <Menu isOpen={open} setOpen={setOpen} isMobile={isMobile} />
              
                { isMobile ? 
                    <button onClick={() => setOpen(!open)}>
                        { open 
                            ? <SortIcon iconName={"close"} /> 
                            : <SortIcon iconName={"menu"} /> }
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
                        <SortIcon iconName={"whatsapp"} height={"20px"} width={"20px"}  /> 
                        <span className="text-[1rem]">Vamos Conversar</span>     
                    </a>
                 }
            </nav>
        </header>
    );
}