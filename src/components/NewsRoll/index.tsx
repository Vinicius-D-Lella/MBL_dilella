import NewsCard from "../NewsCard";
import './index.css';

let noticias = [
    {
        alt: "o-que-e-o-projeto-anti-oruam-protocolado-por-vereadora-de-sao-paulo",
        title: "O que é o “Projeto Anti-Oruam”, protocolado por vereadora de São Paulo",
        subtitle: "Proposta apresentada por Amanda Vettorazzo (União Brasil) quer proibir a Prefeitura da capital...",
        img: "https://framerusercontent.com/images/HTnfbqdeqTzYdY1pDJqoCMS7A.webp?scale-down-to=1024"
    },
    {
        alt: "kataguiri-propoe-pena-25-anos-estupro-vulneravel",
        title: "Kataguiri propõe pena de até 25 anos para estupro de vulnerável",
        subtitle: "O deputado federal Kim Kataguiri (União-SP) apresentou, nesta quarta-feira (26), o Projeto de Lei…",
        img: "https://framerusercontent.com/images/c3N1nBKygqUJjbssPtpN2MiEE.webp"
    },
    {
        alt: "alesp-aprova-projeto-de-educacao-financeira-nas-escolas-de-sao-paulo",
        title: "Alesp aprova projeto de educação financeira nas escolas de São Paulo",
        subtitle: "Autor da proposta é o deputado estadual Guto Zacarias (União Brasil), vice-líder do governo...",
        img: "https://framerusercontent.com/images/gPbzY9cu5RQEaCdT7IVkrfnxjI.png?scale-down-to=1024"
    }
]

export default function NewsRoll() {
    return (
        <div>
            <div className="news-roll">
            {
                noticias.map((item,index) => (
                    <NewsCard
                        key={index}
                        alt={item.alt}
                        title={item.title}
                        subtitle={item.subtitle}
                        img={item.img}
                        url={`/MBL_dilella/noticias/${item.alt}`}
                    />
                ))
            }
            </div>
        </div>
    );
}
