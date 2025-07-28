export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (

        <footer>
            <div className="flex justify-around items-center sticky bottom-0 w-full pt-4 pb-2.5 pr-[3%] pl-[3%] bg-[#eee] text-[gray]">
            <div className="flex flex-col items-center gap-3">
            <a className=""
                href="/">
                    <img
                    alt="home" 
                    src="logo_mbl.svg" 
                    className="w-18.5 h-7"/> 
                </a>
            <p className=" font-normal text-[12px]">© MBL {currentYear} | Todos os direitos reservados.</p>
            </div>
            <div className="bg-transparent flex flex-row justify-between items-center gap-3.75 ">
            <a
                href="https://www.youtube.com/@MBLiveTV">
                    <img
                    alt="youtube" 
                    src="icons8-youtube.svg"
                    className="w-5 h-5"/> 
                </a>

                        <a
                href="https://www.instagram.com/mblivre/">
                    <img
                    alt="instagram" 
                    src="icons8-instagram.svg" 
                    className="w-5 h-5"/> 
                </a>
                            <a
                href="https://x.com/MBLivre">
                    <img
                    alt="X" 
                    src="icons8-x.svg" 
                    className="w-5 h-5"/> 
                </a>
                            <a
                href="https://www.facebook.com/mblivre">
                    <img
                    alt="facebook" 
                    src="icons8-facebook.svg" 
                    className="w-5 h-5"/> 
                </a>
                            <a
                href="https://www.tiktok.com/@mblivre">
                    <img
                    alt="tiktok" 
                    src="icons8-tiktok.svg" 
                    className="w-5 h-5"/> 
                </a>
                </div>
                </div>
            </footer>
    )
}