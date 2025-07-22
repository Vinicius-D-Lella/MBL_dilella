import "./index.css"

export default function FestivalCard() {
    return (
    <div className="festival">
        <div className="festival-card">
            <div className="festival-card-top">
                <div className="festival-card-top-container">
                    <div className="festival-card-img">
                        <img src="https://framerusercontent.com/images/P99MPAntxuwuVPWUB9IhiK24KU.svg"/>
                    </div>
                    <div className="festival-card-description">
                    <div className="festival-card-top-title">
                        <p>
                            <strong>
                                O PRIMEIRO FESTIVAL DO MBL
                            </strong>
                        </p>
                    </div>
                    <div className="festival-card-top-description">
                        <p className="description-text">
                            O tradicional Congresso Nacional do MBL agora é Festival: mais ideias, mais cultura, mais ação. Prepare-se para um evento que vai além da política!
                        </p>
                        <p className="date-text">Dia 29 de Novembro | Local: Komplexo Tempo</p>
                    </div>
                    <div className="festival-card-top-button-container">
                        <div className="festival-card-top-button">
                            <a href="https://festival.mbl.org.br/?_gl=1*yjq6g3*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc.">Garantir Meu Ingresso Agora</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="festival-card-bottom">
                <div className="festival-card-bottom-image">
                    <div className="festival-card-bottom-image-container">
                        <img src="https://framerusercontent.com/images/veHsBHzhoB12mXH4TyQBA4qQP8.svg" className="mountain-image"/>
                    </div>
                </div>
            </div>

        </div>
    </div>)
}