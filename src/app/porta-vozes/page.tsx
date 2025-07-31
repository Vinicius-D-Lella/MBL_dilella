import PVlist from "@/components/PVlist";


export default function PortaVozes() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-[#f9f9f9] pt-12.5">
        <div className="flex flex-col p-[10px_5%] items-center">
            <div className="flex flex-col items-center m-[0_auto] p-5 w-237.5">
                <h1 className="text-[40px] text-[#333] mb-2.5 font-bold">Nossos Porta-vozes</h1>
                <div className="w-[60%] max-w-[800px]">
                <h2 className="text-[1em]/[1.5em] text-[#888] text-justify font-medium tracking-[-0.5px]">Os porta-vozes do MBL são os rostos do movimento que a cada dia escreve uma nova página da história que mudou o Brasil. Com diferentes formações, habilidades e trajetórias, nossos líderes são formadores de opinião e agentes de mudança. Estão na linha de frente das mobilizações, dos debates e entrega de resultado real. Conheça quem são os nomes que levam as ideias do MBL para as ruas, as redes e as instituições.</h2>
                </div>
                </div>
                <PVlist />

    </div>
    </div>
    );
}
