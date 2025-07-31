export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (

        <footer>
            <div className="flex justify-around items-center sticky bottom-0 w-full pt-4 pb-2.5 pr-[3%] pl-[3%] bg-[#eee] text-[gray]">
            <div className="flex flex-col items-center gap-3">
            <a className=""
                href="/">
                    <div className="w-18.5 h-7">
                        <svg className="w-full h-full">
                            <use width="74px" height="28px" href="/logo_mbl.svg"></use>
                        </svg>
                    </div>
                </a>
            <p className=" font-normal text-[12px]">© MBL {currentYear} | Todos os direitos reservados.</p>
            </div>
            <div className="bg-transparent flex flex-row justify-between items-center gap-3.75 ">
            <a
                href="https://www.youtube.com/@MBLiveTV">
                    <div className="w-5 h-5">
                        <svg className="w-full h-full">
                            <use width="20px" height="20px" href="/icons8-youtube.svg"></use>
                        </svg>
                    </div>
                </a>

                        <a
                href="https://www.instagram.com/mblivre/">
                    <div className="w-5 h-5">
                        <svg className="w-full h-full">
                            <use width="20px" height="20px" href="/icons8-instagram.svg" ></use>
                        </svg>
                    </div>
                </a>
                            <a
                href="https://x.com/MBLivre">
                    <div className="w-5 h-5">
                        <svg className="w-full h-full">
                            <use width="20px" height="20px" href="/icons8-x.svg"  ></use>
                        </svg>
                    </div>
                </a>
                            <a
                href="https://www.facebook.com/mblivre">
                    <div className="w-5 h-5">
                        <svg className="w-full h-full">
                            <use width="20px" height="20px" href="/icons8-facebook.svg"  ></use>
                        </svg>
                    </div>
                </a>
                            <a
                href="https://www.tiktok.com/@mblivre">
                    <div className="w-5 h-5">
                        <svg className="w-full h-full">
                            <use width="20px" height="20px" href="/icons8-tiktok.svg"  ></use>
                        </svg>
                    </div>
                </a>
                </div>
                </div>
            </footer>
    )
}