import "./index.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (

        <footer>
            <div className="footerbar">
            <div className="footer-left">
            <a
                href="/">
                    <img
                    alt="home" 
                    src="logo_mbl.svg" 
                    className="logo_footer"
                    width={74} 
                    height={28}/> 
                </a>
            <p className="direitos">© MBL {currentYear} | Todos os direitos reservados.</p>
            </div>
            <div className="footer-right">
            <a
                href="https://www.youtube.com/@MBLiveTV">
                    <img
                    alt="youtube" 
                    src="icons8-youtube.svg" 
                    width={20} 
                    height={20}/> 
                </a>

                        <a
                href="https://www.instagram.com/mblivre/">
                    <img
                    alt="instagram" 
                    src="icons8-instagram.svg" 
                    width={20} 
                    height={20}/> 
                </a>
                            <a
                href="https://x.com/MBLivre">
                    <img
                    alt="X" 
                    src="icons8-x.svg" 
                    width={20} 
                    height={20}/> 
                </a>
                            <a
                href="https://www.facebook.com/mblivre">
                    <img
                    alt="facebook" 
                    src="icons8-facebook.svg" 
                    width={20} 
                    height={20}/> 
                </a>
                            <a
                href="https://www.tiktok.com/@mblivre">
                    <img
                    alt="tiktok" 
                    src="icons8-tiktok.svg" 
                    width={20} 
                    height={20}/> 
                </a>
                </div>
                </div>
            </footer>
    )
}