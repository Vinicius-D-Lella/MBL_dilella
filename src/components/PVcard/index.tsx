import Image from "next/image";
import { InstagramLogo, XLogo, YoutubeLogo } from "../svgs";

export interface PVcardInterface{
    name: string;
    desc: string;
    seguidores: string;
    src: string;
    tags: Array<string>;
    instagram?: string;
    youtube?: string;
    x?: string;
    votos?: string;
}

export default function PVcard(props: PVcardInterface) {
  return (
<div className="flex flex-row items-center gap-10 justify-center p-10 w-full bg-white rounded-[30px]">

        <div className="flex flex-row items-center relative w-[250px] h-[350px]">
            <Image
            className="object-contain w-full h-full"
            src={props.src}
            alt={props.name}
            /> 
            <div className="flex flex-col items-end w-min absolute bottom-11 left-[-100px] gap-3 ju">
            {props.votos && <p className="whitespace-nowrap shadow-2xl text-center font-bold text[16px] bg-white text-[#924953] rounded-[30px] pt-2.5 pb-2.5 pr-7.5 pl-7.5">{props.votos}</p>}
            <p className="whitespace-nowrap shadow-2xl text-center font-bold text[16px] bg-white text-[#924953] rounded-[30px] pt-2.5 pb-2.5 pr-7.5 pl-7.5">{props.seguidores}</p>
            </div>
        </div>
        <div className="w-90">
            <div className="pb-5">
            <h1 className="text-[24px] font-bold text-[#924953]  ">{props.name}</h1>
            </div>
            <div className="pb-5">
            <p className="text-[18px] font-normal text-[#666]">{props.desc}</p>
            </div>
            <div className="flex flex-row">
                {props.instagram && (
                    <a href={props.instagram}>
                        <Image
                            className="icons"
                            alt={"Instagram " + props.name}
                            src={InstagramLogo}
                            width={20} 
                            height={20}/> 
                    </a>
                )}
                {props.youtube && (
                    <a href={props.youtube}>
                        <Image
                        className="icons"
                        alt={"Youtube " + props.name}
                        src={YoutubeLogo} 
                        width={20} 
                        height={20}/> 
                    </a>
                )}
                {props.x && (
                    <a href={props.x}>
                        <Image
                            className="icons"
                            alt={"X " + props.name}
                            src={XLogo}
                            width={20}
                            height={20}/>
                    </a>
                )}
                </div>
        </div>


</div>
  );
}