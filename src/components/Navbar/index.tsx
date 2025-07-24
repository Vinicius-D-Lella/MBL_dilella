"use client"

import NavItem, {NavItemInterface} from "../NavItem";
import "./index.css";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const items : NavItemInterface[] = [
        { url: "/MBL_dilella/mbl", label: "MBL" },
        { url: "/MBL_dilella/valete", label: "Valete +" },
        { url: "/MBL_dilella/clube-livro", label: "Clube do Livro" },
        { url: "https://festival.mbl.org.br/", label: "Festival" },
        { url: "/MBL_dilella/porta-vozes", label: "Porta-Vozes" },
        { url: "/MBL_dilella/eventos", label: "Eventos" },
        { url: "/MBL_dilella/noticias", label: "Notícias" },
        { url: "https://elite.mbl.org.br/", label: "Elite" },
        { url: "https://loja.mbl.org.br/", label: "Loja" }
    ];

    const pathname = usePathname();

    return (
        <header>
            <nav className="navbar">
                <a
                href="/MBL_dilella">
                    <img 
                    alt="logo do header" 
                    src="logo_mbl.svg"
                    className="logo_header"
                    width={74} 
                    height={28}/> 
                </a>
                <div className="nav-right">
                <ul className="nav-items">
                   { items.map((item, index) => (
                        <NavItem 
                            key={index} 
                            url={item.url} 
                            label={item.label}
                            isActive={pathname === item.url} />
                    )) }
                </ul>
                <button className="newsletter-button">
                    Inscreva-se na nossa Newsletter
                </button>
                </div>
            </nav> 
        </header>
    );
}
    