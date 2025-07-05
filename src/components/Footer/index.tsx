import Image from "next/image";
import Link from "next/link";
import "./index.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (

        <footer>
            <div className="footerbar">
            <div className="footer-left">
            <Link
                href="/">
                    <Image
                    alt="home" 
                    src="logo_mbl.svg" 
                    className="logo_footer"
                    width={74} 
                    height={28}/> 
                </Link>
            <p className="direitos">© MBL {currentYear} | Todos os direitos reservados.</p>
            </div>
            <div className="footer-right">
            <Link
                href="https://www.youtube.com/@MBLiveTV">
                    <Image
                    alt="youtube" 
                    src="icons8-youtube.svg" 
                    width={20} 
                    height={20}/> 
                </Link>

                        <Link
                href="https://www.instagram.com/mblivre/">
                    <Image
                    alt="instagram" 
                    src="icons8-instagram.svg" 
                    width={20} 
                    height={20}/> 
                </Link>
                            <Link
                href="https://x.com/MBLivre">
                    <Image
                    alt="X" 
                    src="icons8-x.svg" 
                    width={20} 
                    height={20}/> 
                </Link>
                            <Link
                href="https://www.facebook.com/mblivre">
                    <Image
                    alt="facebook" 
                    src="icons8-facebook.svg" 
                    width={20} 
                    height={20}/> 
                </Link>
                            <Link
                href="https://www.tiktok.com/@mblivre">
                    <Image
                    alt="tiktok" 
                    src="icons8-tiktok.svg" 
                    width={20} 
                    height={20}/> 
                </Link>
                </div>
                </div>
            </footer>
    )
}