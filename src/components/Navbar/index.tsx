"use client"


import Link from "next/link";
import Image from "next/image";
import NavItem, {NavItemInterface} from "../NavItem";
import "./index.css";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const items : NavItemInterface[] = [
        { url: "/mbl", label: "MBL" },
        { url: "/valete", label: "Valete +" },
        { url: "/clube-livro", label: "Clube do Livro" },
        { url: "/festival", label: "Festival" },
        { url: "/porta-vozes", label: "Nossos Porta-Vozes" },
        { url: "/noticias", label: "Notícias" },
        { url: "/elite", label: "Elite" },
        { url: "https://loja.mbl.org.br/", label: "Loja" }
    ];

    const pathname = usePathname();
    console.log(pathname);

    return (
        <header>
            <nav className="navbar">
                <Link
                href="/">
                    <Image 
                    alt="logo do header" 
                    src="logo_mbl.svg"
                    className="logo_header"
                    width={74} 
                    height={28}/> 
                </Link>
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
    