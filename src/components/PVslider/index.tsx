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
        <div className="w-250">
        <div className="max-w-full overflow-hidden m-[0_auto]">
            <ul className='flex flex-row gap-5 animate-slow-slider '>
                {portaVozes.map((portaVoz, index) => (
                <li className='flex justify-center items-center' key={index}>
                    <div className="flex aspect-[.7272727272727273_/_1] h-[351px] overflow-visible relative no-underline w-[255px]">
                        <div className="flex gap-2.5 items-center flex-col">
                            <div className="w-[210px] h-[300px]">
                                <img className="w-full h-full" src={portaVoz.src} alt={portaVoz.name}/>
                            </div>
                            <div className="text-[24px] font-bold">
                                <p className="text-[#924953] font-bold">{portaVoz.name}</p>
                            </div>
                            <div className="flex flex-col-reverse items-end absolute bottom-25 right-[-20px] gap-2.5">
                                <div className="bg-white pt-2.5 pb-2.5 pr-7.5 pl-7.5 rounded-[20px] w-min whitespace-nowrap">
                                    <p className="text-[#924953] font-bold">{portaVoz.seguidores}</p>
                                </div>
                                {portaVoz.votos && 
                                    <div className="bg-white pt-2.5 pb-2.5 pr-7.5 pl-7.5 rounded-[20px] w-min whitespace-nowrap">
                                        <p className="text-[#924953] font-bold">{portaVoz.votos}</p>
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