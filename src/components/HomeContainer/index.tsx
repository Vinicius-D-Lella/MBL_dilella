import { YouTubeEmbed } from "@next/third-parties/google";
import FestivalCard from "../FestivalCard";
import LojaSlider from "../LojaSlider";
import NewsRoll from "../NewsRoll";
import PVslider from "../PVslider";
import TimelineCard from "../TimelineCard";
import "./index.css"

const years = [
    { 
        year: "2014", 
        color: "#47d1bc",
        image: "https://framerusercontent.com/images/NgTFFLMDr7YOjFOQFYpX5oOvuLk.png?scale-down-to=512",
        width: "367px",
        height: "178px",
        events: [
        { title: "O nascimento", description: "Nasce o MBL, movimento que influenciou diretamente a política e o destino do país, criado por Renan Santos, Kim Kataguiri, Alexandre Santos, Rafael Rizzo e outros." },
        { title: "Primeira manifestação", description: "Realizada no MASP, em São Paulo, reunindo cerca de 5 mil pessoas." }
    ] },
    { 
        year: "2015",
        color: "#eb894f", 
        events: [
            { title: "Campanhas contra Dilma Rousseff", description: "Convoca e organiza as manifestações nacionais contra o governo Dilma Rousseff, com atos realizados em diversas cidades brasileiras." },
            { title: "Um ato histórico", description: "Realiza a \"Marcha pela Liberdade\", uma caminhada de 1100 km de São Paulo a Brasília pelo impeachment de Dilma Rousseff. Culminando com a entrega do pedido de impeachment à oposição." },
            { title: "O primeiro congresso", description: "É realizada a primeira edição do congresso que se tornou referência política no país em suas mais de 10 edições de sucesso." }
        ] },
        { 
            year: "2016",
            color: "#47d1bc",
            padding:"58px 0px",
            width:"334px",
            height:"196px",
            image: "https://framerusercontent.com/images/pQ0nMXJp4QJrHub3hDJmOI9Nj8.png",
            events: [
                { title: "Impeachment de Dilma Rousseff", description: "Culminação do primeiro objetivo do movimento." },
                { title: "Eleições municipais", description: "MBL lança seus primeiros candidatos." }
            ] }]


export default function HomeContainer(){

    return(
    <div className="home">
        <div className="header">
            <div className="header-rectangle">
                <div className="header-rectangle-container">
                    <img className="rectangle" src="https://framerusercontent.com/images/z3qpZ2QmgdGNizf3SkQhsOJyc8.png?scale-down-to=2048"></img>
                </div>
        </div>
        <div className="header-texts">
            <div className="header-title">
                <div className="header-title-container">
                    <h1>Juntos pelo Brasil que Sonhamos!</h1>
                </div>
            </div>
            <div className="header-description">
                <p>Unimos pessoas que desejam marcar sua geração e entregamos a elas oportunidades reais de agir hoje, para começarem a construir um legado único para o seu país, em cada uma das nossas iniciativas.</p>
            </div>
        </div>
        <div className="header-photos">
            <div className="header-photos-1">
            <div className="header-photos-container">
                <img src="https://framerusercontent.com/images/0uU0LqPCV0h7qFEFjBRg4QbHT8.png?scale-down-to=1024"></img>
            </div>
            </div>
        </div>
        <div className="header-video">
                <YouTubeEmbed videoid="qgGt4pkbNtk" height={210} width={380} />
        </div>
    </div>
    <div className="Festival">
        <FestivalCard/>
    </div>
    <div className="iniciativas">
        <div className="iniciativas-header">
            <div className="iniciativas-header-title">
                <p>Iniciativas MBL</p>
            </div>
            <div className="iniciativas-header-description">
                <p>Conheça nossos projetos para a refundação do Brasil através da transformação cultural, educacional e legislativa de todo Brasil</p>
            </div>
        </div>
        <div className="iniciativas-card-top">
            <div className="iniciativas-card" id="revista">
                <div className="iniciativas-card-img">
                    <div className="iniciativas-card-img-container">
                        <img 
                        width="585"
                        height="573"
                        src='https://framerusercontent.com/images/YaiCNcCvdxsrb6RFUcRsL59Cnk.webp?scale-down-to=512'></img>
                    </div>
                </div>
                <div className="iniciativas-card-infos">
                    <div className="iniciativas-card-infos-title">
                        <p>Revista Valete</p>
                    </div>
                    <div className="iniciativas-card-infos-description">
                        <p>Conteúdos dos mais diversos temas. De economia a filosofia, de política a história, de cultura a culinária, para ler e aprender no conforto da sua casa.</p>
                    </div>
                    <div className="iniciativas-card-infos-button">
                        <a href="https://valete.org.br/?_gl=1*1rphh6m*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc.#revista" target="_blank" rel="noopener noreferrer">Saiba mais</a>
                    </div>
                </div>
            </div>
            <div className="iniciativas-card" id="valete+">
                <div className="iniciativas-card-img">
                    <div className="iniciativas-card-img-container">
                        <img 
                        width="370"
                        height="790"
                        src='https://framerusercontent.com/images/iyba8bci92GJ1GaO58ZFM7uZQDg.webp'></img>
                    </div>
                </div>
                <div className="iniciativas-card-infos">
                    <div className="iniciativas-card-infos-title">
                        <p>Valete+</p>
                    </div>
                    <div className="iniciativas-card-infos-description">
                        <p>Aplicativo que reúne conhecimento e cultura, com diversos conteúdos para você se aprofundar em temas relevantes e transformadores.</p>
                    </div>
                    <div className="iniciativas-card-infos-button">
                        <a href="https://valete.org.br/?_gl=1*1rphh6m*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc." target="_blank" rel="noopener noreferrer">Saiba mais</a>
                    </div>
                </div>
            </div>
            <div className="iniciativas-card" id="livro">
                <div className="iniciativas-card-img">
                    <div className="iniciativas-card-img-container">
                        <img src='https://framerusercontent.com/images/Dr7tI5QWAYS8ah6FIM2Bvn8VNg.webp?scale-down-to=1024'></img>
                    </div>
                </div>
                <div className="iniciativas-card-infos">
                    <div className="iniciativas-card-infos-title">
                        <p>Clube do Livro</p>
                    </div>
                    <div className="iniciativas-card-infos-description">
                        <p>Nossa comunidade de leitura que busca as conexões necessárias para resgatar a cultura, a literatura, a identidade e o imaginário brasileiro.</p>
                    </div>
                    <div className="iniciativas-card-infos-button">
                        <a href="https://clube.valete.org.br/?_gl=1*1rphh6m*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc." target="_blank" rel="noopener noreferrer">Saiba mais</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
        <div className="iniciativas-2">
            <div className="iniciativas-card-bottom">
                <div className="iniciativas-card" id="academia">
                    <div className="iniciativas-card-img">
                        <div className="iniciativas-card-img-container">
                            <img src='https://framerusercontent.com/images/GxNFJESDhsTMLYqXoFEslSgFUs.webp'></img>
                        </div>
                    </div>
                    <div className="iniciativas-card-infos">
                        <div className="iniciativas-card-infos-title">
                            <p>Academia MBL</p>
                        </div>
                        <div className="iniciativas-card-infos-description">
                            <p>Queremos que você seja nosso político eleito, chefe de gabinete, um coordenador ou um intelectual.</p>
                        </div>
                        <div className="iniciativas-card-infos-button">
                            <a href="https://academia.mbl.org.br/?_gl=1*1sc2xub*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc." target="_blank" rel="noopener noreferrer">Saiba mais</a>
                        </div>
                    </div>
                </div>    
                <div className="iniciativas-card-4" id="cursos">
                    <div className="iniciativas-card-img">
                        <div className="iniciativas-card-img-container">
                            <img src='https://framerusercontent.com/images/EljRFH29ZtbfokMzuFiVmaYM8.png'></img>
                        </div>
                    </div>
                    <div className="iniciativas-card-infos">
                        <div className="iniciativas-card-infos-title">
                            <p>Cursos</p>
                        </div>
                        <div className="iniciativas-card-infos-description">
                            <p>Conheça nossos cursos elaborados para o seu desenvolvimento intelectual e profissional.</p>
                        </div>
                        <div className="iniciativas-card-infos-button">
                            <a href="https://maquinadecortes.digital/">Máquina de Cortes</a>
                            <a href="https://valete.org.br/filosofia?_gl=1*ei4uug*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc.">Filosofia Política</a>
                            <a href="https://valete.org.br/segredosdaescrita?_gl=1*ei4uug*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc.">Segredos da Escrita</a>
                            <a href="https://valete.org.br/historia?_gl=1*9grais*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc.">História da Humanidade</a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <div className="porta-vozes">
        <div className="pv-title">
            <p>Nossos Porta-vozes</p>
        </div>
        <PVslider/>
        <div className="pv-button-container">
            <div className="pv-button">
                <a href="MBL_dilella/porta-vozes">Conheça todos porta-vozes</a>
            </div>
        </div>
    </div>
    <div className="noticias">
        <div className="news-title-container">
            <h2 className="news-title">Últimas notícias sobre o movimento</h2>
        </div>
        <NewsRoll></NewsRoll>
    </div>
    <div className="timeline">
        <div className="timeline-title-container">
            <h2 className="timeline-title">Timeline do Movimento Brasil Livre</h2>
        </div>
        <div className='timeline-cards'>
                    {
                        years.map((yearData, index) => (
                            <TimelineCard
                                key={index}
                                year={yearData.year}
                                color={yearData.color}
                                events={yearData.events}
                                image={yearData.image}
                                padding={yearData.padding}
                                width={yearData.width}
                                height={yearData.height}
                            />
                        ))
            
                    }
            </div>
            <div className="timeline-button">
                <div className="timeline-button-text">
                    <a href="MBL_dilella/mbl">
                    CONTINUA
                </a>
                </div>
                <img className="timeline-button-image" src="down-chevron-svgrepo-com.svg"/>

              
            </div>
    </div>
    <div className="loja-mbl">
        <div className="loja-mbl-title">
            <div className="loja-mbl-title-container">
                <p>Loja MBL</p>
            </div>
        </div>
        <div className="loja-mbl-roll">
            <LojaSlider/>
        </div>
        <div className="loja-mbl-button">
            <div className="loja-mbl-button-container">
                <a href="https://loja.mbl.org.br/" target="_blank" rel="noopener noreferrer">Ir para Loja MBL</a>
            </div>
        </div>
    </div>
    
  </div>)
}