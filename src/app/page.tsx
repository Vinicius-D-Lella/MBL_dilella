import NewsRoll from "@/components/NewsRoll";
import TimelineCard from "@/components/TimelineCard";

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

export default function Home() {
    
  return (<div>

    <div className="header">
        <div className="header-rectangle">
            <div className="header-rectangle-container">
                <img className="rectangle" src="https://framerusercontent.com/images/z3qpZ2QmgdGNizf3SkQhsOJyc8.png?scale-down-to=2048"></img>
            </div>
        </div>
        <div className="header-texts">
            <div className="header-title">
                <h1>Juntos pelo Brasil que Sonhamos!</h1>
            </div>
            <div className="header-description">
                <p>Unimos pessoas que desejam marcar sua geração e entregamos a elas oportunidades reais de agir hoje, para começarem a construir um legado único para o seu país, em cada uma das nossas iniciativas.</p>
            </div>
        </div>
        <div>
            <div>
                                <img src="https://framerusercontent.com/images/0uU0LqPCV0h7qFEFjBRg4QbHT8.png?scale-down-to=1024"></img>
            </div>
        </div>
        <div className="header-video">
<iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  width="300"
  height="200"
  src="https://www.youtube.com/watch?v=rzIUfd3tdG0">
</iframe>
        </div>
    </div>
    <div className="Festival"></div>
    <div className="Iniciativa1"></div>
    <div className="Iniciativa2"></div>
    <div className="Porta-vozes"></div>
    <div className="Noticias">
        <div className="news-title-container">
            <h2 className="news-title">Últimas notícias sobre o movimento</h2>
        </div>
        <NewsRoll></NewsRoll>
    </div>
    <div className="Timeline">
        <h2 className="timeline-title">Timeline do Movimento Brasil Livre</h2>
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
                <a href="/mbl">
                    CONTINUA
                </a>
            </div>
    </div>
    <div className="Loja-mbl"></div>
    
  </div>);
}

//        HEADER COM VIDEO 

//        CARD FESTIVAL 

//        INICIATIVAS 

//       PORTA VOZES 

//        NOTICIAS 

//        TIMELINE 

//        LOJA MBL 