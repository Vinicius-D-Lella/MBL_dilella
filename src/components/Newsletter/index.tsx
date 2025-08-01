import Image from "next/image";
import { NewsletterImg } from "../svgs";

export default function Newsletter() {
    return (
        <section id="newsletter" className='flex justify-center items-center sticky p-7.5 bg-transparent text-[gray] gap-[5%]'>
            <div className="flex flex-col items-center w-100">
                <div className="flex justify-start w-full pt-5 pb-5">
                    <div className="w-7.5 h-7.5">
                    <Image
                        priority
                        src={NewsletterImg}
                        height={30}
                        width={30}
                        alt="logo-news"
                    />
                    </div>
                    <h2 className='text-black pl-5 font-bold text-[28px]'>Assine a nossa newsletter</h2>
                </div>
                <p className='text-black text-[18px]/[1.2em] font-normal bg-transparent tracking-[-0.02em]'>Como assinante da nossa newsletter, você recebe análises exclusivas
                    sobre temas relevantes para sua vida e informações em primeira mão 
                    sobre diversas ações do MBL e da Valete.
                </p>
            </div>
            <div className="flex flex-col items-center w-100 ">
                <div className="flex flex-row justify-between w-full gap-5">
                    <label className="w-47.5">
                        <p className="text-[gray] text-[12px] font-normal mb-10px">Nome</p>
                        <div className="">
                            <input className="w-full text-[14px]/[0] letter p-3 bg-[#f2f2f2] mb-2.5 rounded-[10px] border-0" type="text" name="Nome" placeholder="João Silva" required />
                        </div>
                    </label>
                    <label className="w-47.5">
                        <p className="text-[gray] text-[12px] font-normal mb-10px">Email</p>
                        <div >
                            <input className="w-full text-[14px]/[0] letter p-3 bg-[#f2f2f2] mb-2.5 rounded-[10px] border-0" type="email" name="Email" placeholder="jsilva@gmail.com" required />
                        </div>                    
                    </label>
                </div>
                <label className="flex flex-row items-center justify-evenly w-full mb-2 gap-2">
                    <div className="w-4 h-4">
                        <input className="w-full h-full mr-0.5 accent-[#eb894f] " type="checkbox" defaultChecked></input>
                    </div>
                    <p className="text-[#999] text-[12px] font-medium">Concordo em receber a newsletter do MBL e parceiros. Podendo cancelar a  qualquer momento. Confira a nossa Política de Privacidade.</p>
                </label>
                <div className="rounded-[6px] pt-2 pb-2 pr-5.5 pl-5.5 cursor-pointer bg-[#5cbcae] border-none text-[#f7f5ff] font-[inherit] font-medium w-full flex justify-center hover:bg-[#924953]  hover:transition-[0.3s]">
                    <button className="w-full h-full border-none text-inherit cursor-pointer">Assine gratuitamente agora</button>
                </div>
            </div>
        </section>
    );
}