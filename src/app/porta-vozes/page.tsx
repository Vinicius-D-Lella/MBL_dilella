
import PVlist from "@/components/PVlist";
import "./index.css";


export default function PortaVozes() {
    return (
        <div className="porta-vozes">
        <div className="porta-vozes-container">
            <div className="porta-vozes-text">
                <h1>Nossos Porta-vozes</h1>
                <div className="description">
                <h2>Os porta-vozes do MBL são os rostos do movimento que a cada dia escreve uma nova página da história que mudou o Brasil. Com diferentes formações, habilidades e trajetórias, nossos líderes são formadores de opinião e agentes de mudança. Estão na linha de frente das mobilizações, dos debates e entrega de resultado real. Conheça quem são os nomes que levam as ideias do MBL para as ruas, as redes e as instituições.</h2>
                </div>
                </div>
                <PVlist />

    </div>
    </div>
    );
}
