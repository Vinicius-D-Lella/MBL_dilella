import Image from "next/image";
import { FacebookLogo, InstagramLogo, LogoMBL, TiktokLogo, XLogo, YoutubeLogo } from "../svgs";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (

        <footer>
            <div className="flex justify-around items-center sticky bottom-0 w-full pt-4 pb-2.5 pr-[3%] pl-[3%] bg-[#eee] text-[gray]">
            <div className="flex flex-col items-center gap-3">
            <a className=""
                href="/">
                    <div className="w-18.5 h-7">
                    <Image
                        priority
                        src={LogoMBL}
                        height={28}
                        width={74}
                        alt="logo_footer"
                    />
                    </div>
                </a>
            <p className=" font-normal text-[12px]">© MBL {currentYear} | Todos os direitos reservados.</p>
            </div>
            <div className="bg-transparent flex flex-row justify-between items-center gap-3.75 ">
            <a
                href="https://www.youtube.com/@MBLiveTV">
                    <div className="w-5 h-5">
                    <Image
                        priority
                        src={YoutubeLogo}
                        height={20}
                        width={20}
                        alt="youtube"
                    />
                    </div>
                </a>

                        <a
                href="https://www.instagram.com/mblivre/">
                    <div className="w-5 h-5">
                    <Image
                        priority
                        src={InstagramLogo}
                        height={20}
                        width={20}
                        alt="instagram"
                    />
                    </div>
                </a>
                            <a
                href="https://x.com/MBLivre">
                    <div className="w-5 h-5">
                    <Image
                        priority
                        src={XLogo}
                        height={20}
                        width={20}
                        alt="x"
                    />
                    </div>
                </a>
                            <a
                href="https://www.facebook.com/mblivre">
                    <div className="w-5 h-5">
                    <Image
                        priority
                        src={FacebookLogo}
                        height={20}
                        width={20}
                        alt="facebook"
                    />
                    </div>
                </a>
                            <a
                href="https://www.tiktok.com/@mblivre">
                    <div className="w-5 h-5">
                    <Image
                        priority
                        src={TiktokLogo}
                        height={20}
                        width={20}
                        alt="tiktok"
                    />
                    </div>
                </a>
                </div>
                </div>
            </footer>
    )
}