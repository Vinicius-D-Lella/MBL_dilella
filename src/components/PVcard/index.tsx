import Link from "next/link";
import "./index.css";

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
<div className="card">

        <div className="image-container">
            <img
            className="image"
            src={props.src}
            alt={props.name}
            /> 
            <div className="numeros">
            {props.votos && <p className="number_info">{props.votos}</p>}
            <p className="number_info">{props.seguidores}</p>
            </div>
        </div>
        <div className="social-infos">
            <div className="h1-container">
            <h1>{props.name}</h1>
            </div>
            <div className="p-container">
            <p>{props.desc}</p>
            </div>
            <div className="icons-container">
                {props.instagram && (
                    <Link href={props.instagram}>
                        <img
                            className="icons"
                            alt={"Instagram " + props.name}
                            src="icons8-instagram.svg" 
                            width={20} 
                            height={20}/> 
                    </Link>
                )}
                {props.youtube && (
                    <Link href={props.youtube}>
                        <img
                        className="icons"
                        alt={"Youtube " + props.name}
                        src="icons8-youtube.svg" 
                        width={20} 
                        height={20}/> 
                    </Link>
                )}
                {props.x && (
                    <Link href={props.x}>
                        <img
                            className="icons"
                            alt={"X " + props.name}
                            src="icons8-x.svg"
                            width={20}
                            height={20}/>
                    </Link>
                )}
                </div>
        </div>


</div>
  );
}