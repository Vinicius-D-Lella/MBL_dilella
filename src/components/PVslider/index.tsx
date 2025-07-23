import "./index.css" 

const portaVozes = [
    {
        name: "Amanda Vettorazzo",
        votos: "+40 mil Votos",
        seguidores: "+1 mi Seguidores",
        src: "https://framerusercontent.com/images/JMB8hm0fqCY4kWoO6Rz3wUQTO0.webp",
    },
        {
        name: "Cristiano Beraldo",
        votos: "+43 mil Votos",
        seguidores: "+263 mil Seguidores",
        src: "https://framerusercontent.com/images/y9Yj86YOR25Pgohl6kvRY9RqGcM.png",
    },
        {
        name: "Guto Zacarias",
        votos: "+150 mil Votos",
        seguidores: "+1,3 mi Seguidores",
        src: "https://framerusercontent.com/images/QILkYCsiIE6TJ7hiROtPvzJoUw.png",
    },
    {
        name: "Jota",
        seguidores: "+422 mil Seguidores",
        src: "https://framerusercontent.com/images/hQWkAnFliwWoVxTU0ZIjT8jVKKA.webp",
    },
        {
        name: "Paulo Cruz",
        seguidores: "+125 mil Seguidores",
        src: "https://framerusercontent.com/images/RO4rDWr4xSUT0ea8MMJwP8Ez3BI.webp",
    },
        {
        name: "Renato Battista",
        votos: "+54 mil Votos",
        seguidores: "+356 mil Seguidores",
        src: "https://framerusercontent.com/images/EcpubTsvpb5YNDrcYMURhRHix2s.webp",
    },
    {
        name: "Ricardo Almeida",
        seguidores: "+11 mil Seguidores",
        src: "https://framerusercontent.com/images/aCsd3HvPxJ2rBcyljuH86KhYMk.webp",
    },
    {
        name: "Amanda Vettorazzo",
        votos: "+40 mil Votos",
        seguidores: "+1 mi Seguidores",
        src: "https://framerusercontent.com/images/JMB8hm0fqCY4kWoO6Rz3wUQTO0.webp",
    },
        {
        name: "Cristiano Beraldo",
        votos: "+43 mil Votos",
        seguidores: "+263 mil Seguidores",
        src: "https://framerusercontent.com/images/y9Yj86YOR25Pgohl6kvRY9RqGcM.png",
    },
        {
        name: "Guto Zacarias",
        votos: "+150 mil Votos",
        seguidores: "+1,3 mi Seguidores",
        src: "https://framerusercontent.com/images/QILkYCsiIE6TJ7hiROtPvzJoUw.png",
    },
    {
        name: "Jota",
        seguidores: "+422 mil Seguidores",
        src: "https://framerusercontent.com/images/hQWkAnFliwWoVxTU0ZIjT8jVKKA.webp",
    },
        {
        name: "Paulo Cruz",
        seguidores: "+125 mil Seguidores",
        src: "https://framerusercontent.com/images/RO4rDWr4xSUT0ea8MMJwP8Ez3BI.webp",
    },
        {
        name: "Renato Battista",
        votos: "+54 mil Votos",
        seguidores: "+356 mil Seguidores",
        src: "https://framerusercontent.com/images/EcpubTsvpb5YNDrcYMURhRHix2s.webp",
    },
    {
        name: "Ricardo Almeida",
        seguidores: "+11 mil Seguidores",
        src: "https://framerusercontent.com/images/aCsd3HvPxJ2rBcyljuH86KhYMk.webp",
    } 
]


export default function PVslider(){
    return(
        <div className="pv-slider-container">
        <div className="pv-slider">
            <ul className='slider-list'>
                {portaVozes.map((portaVoz, index) => (
                <li className='pv-slider-cards' key={index}>
                    <div className="pv-card">
                        <div className="pv-card-container">
                            <div className="pv-card-image">
                                <img src={portaVoz.src} alt={portaVoz.name}/>
                            </div>
                            <div className="pv-card-name">
                                <p>{portaVoz.name}</p>
                            </div>
                            <div className="pv-card-info">
                                <div className="pv-card-seguidores-card">
                                    <p>{portaVoz.seguidores}</p>
                                </div>
                                {portaVoz.votos && 
                                    <div className="pv-card-votos-card">
                                        <p>{portaVoz.votos}</p>
                                    </div>}
                            </div>
                        </div>

                    </div>
                </li>
                ))}

            </ul>
        </div>

    </div>
    )
}