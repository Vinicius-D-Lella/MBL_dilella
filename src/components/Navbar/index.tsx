"use client"
import NavItem, {NavItemInterface} from "../NavItem";
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
        <header className="content-center items-center flex flex-row h-17.5 bg-[#f9f9f9] w-full flex-none flex-nowrap left-0 top-0 fixed z-10">
            <nav className="content-center items-center flex flex-1 flex-row justify-around flex-nowrap h-min pr-10 pl-10 overflow-visible relative max-w-300">
                <a
                href="/MBL_dilella">
                    <img 
                    alt="logo do header" 
                    src="/logo_mbl.svg"
                    className="w-18.5 h-7"
                    /> 
                </a>
                <div className="flex flex-row items-center gap-5">
                <ul className="flex gap-6.25 items-center list-none text-2xl font-medium">
                   { items.map((item, index) => (
                        <NavItem 
                            key={index} 
                            url={item.url} 
                            label={item.label}
                            isActive={pathname === item.url} />
                    )) }
                </ul>
                <button className="rounded-[6px] pt-2.25 pb-2.25 pr-5.5 pl-5.5 cursor-pointer bg-[#5cbcae] border-none text-[#f7f5ff] font-medium">
                    Inscreva-se na nossa Newsletter
                </button>
                </div>
            </nav> 
        </header>
    );
}
    