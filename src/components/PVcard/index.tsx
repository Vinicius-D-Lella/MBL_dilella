import Image from "next/image";
import Link from "next/link";
import "./index.css";

export interface PVcardInterface{
    name: string;
    desc: string;
    votos?: string;
    seguidores: string;
    instagram?: string;
    youtube?: string;
    x?: string;
    src: string;
    alt: string;
    tags: Array<string>;
}

export default function PVcard(props: PVcardInterface) {
  return (
<div className="card">
    <div className="content">
    <div className="image-container">
    <Image
          src={props.src}
          alt={props.alt}
          width={250}
          height={350}  
          sizes="250px"
    />
    <div className="numeros">
        {props.votos && <p className="number_info">{props.votos}</p>}
        <p className="number_info">{props.seguidores}</p>
    </div>
    </div>
    <div className="social-links">
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
        {props.instagram && (
            <Link href={props.instagram}>
                <Image
                    alt={"Instagram " + props.name}
                    src="icons8-instagram.svg" 
                    width={20} 
                    height={20}/> 
            </Link>
        )}
        {props.youtube && (
            <Link href={props.youtube}>
                <Image
                    alt={"Youtube " + props.name}
                    src="icons8-youtube.svg" 
                    width={20} 
                    height={20}/> 
            </Link>
        )}
        {props.x && (
            <Link href={props.x}>
                <Image
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