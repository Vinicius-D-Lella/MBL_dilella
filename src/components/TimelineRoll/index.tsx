import TimelineCard from '../TimelineCard';
import './index.css';

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
            ] },
        { 
            year: "2017",
            color: "#eb894f",
            events: [
                { title: "Fortalecimento político", description: "Trabalho árduo e bem sucedido para o fim do imposto sindical e a aprovação da reforma trabalhista." },
            ] },
        { 
            year: "2018",
            color: "#47d1bc", 
            width:"335px",
            height:"194px",
            image: "https://framerusercontent.com/images/xOKMwnGygvH1ZYDjHsszVpiWMw.webp?scale-down-to=512",
            events: [
                { title: "Eleições", description: "Kim Kataguiri é eleito deputado federal; Arthur do Val, deputado estadual." }
            ] },
        { 
            year: "2019",
            color: "#eb894f",
            events: [
                { title: "Lançamento do documentário \"Não Vai Ter Golpe\"", description: "Obra retrata a atuação do MBL no impeachment de Dilma." },
                { title: "Lançamento do livro do movimento", description: "A obra “Como um grupo de desajustados derrubou a presidente: MBL: A origem” ganha vida." }
            ] },
        { 
            year: "2020",
            color: "#47d1bc",
            width:"334px",
            height:"215px",
            image: "https://framerusercontent.com/images/yOcWEZpLruxIHxfUEKlaaPJ6I.webp?scale-down-to=512",
            events: [
                { title: "Arthur prefeito", description: "Arthur do Val lança candidatura à prefeitura de São Paulo." },
                { title: "Uma eleição histórica", description: "Arthur obtém 522 mil votos, ficando com 10% dos votos e elegendo 3 vereadores." }
            ] },
        { 
            year: "2021",
            color: "#eb894f",
            events: [
                { title: "Criação da Academia MBL", description: "Iniciativa para formação de novos líderes políticos com valores alinhados aos do movimento." },
                { title: "Campanha \"Fora Bolsonaro\"", description: "MBL organiza protestos pelo impeachment do presidente, consolidando o slogan “Nem Lula, nem Bolsonaro”." }
            ] },
        { 
            year: "2022",
            color: "#47d1bc",
            width:" 334px",
            height:" 196px",
            image: "https://framerusercontent.com/images/tT5EbeSK6FPe6AoXDPIp4TCi16k.webp?scale-down-to=512",
            events: [
                { title: "Eleições gerais", description: "Kim Kataguiri é reeleito deputado federal; Guto Zacarias é eleito deputado estadual." }
            ] },
        { 
            year: "2023",
            color: "#eb894f",
            width:"334px",
            height:"240px",
            image: "https://framerusercontent.com/images/evZQHZA3fym2ewH1D1IoIEbDoM.webp?scale-down-to=512",
            events: [
                { title: "Anúncio do partido Missão", description: "Anúncio oficial do Partido Missão durante o 8º Congresso do MBL." },
                { title: "Livro Amarelo", description: "Anúncio do \"Livro Amarelo\", o projeto que foi desenhado para criar um novo futuro para o país." },
                { title: "Criação do Clube MBL", description: "Plataforma de conteúdo exclusivo para assinantes, com dossiês, informações exclusivas dos bastidores, documentários sobre temas relevantes e uma formação intelectual única." },
                { title: "Lançamento da Revista Valete", description: "O MBL lança aquela que se tornou uma das revistas de cultura e política mais relevantes do país." }
            ] },
        {
            year: "2024",
            color: "#47d1bc",
            width:"334px",
            height:"220px",
            image: "https://framerusercontent.com/images/ftjkkcFymBksbkZNts91i2b9X0.webp?scale-down-to=512",
            events: [
                { title: "Eleições municipais", description: "MBL lança candidatos em diversas cidades, com destaque para São Paulo." },
                { title: "Expansão do Clube MBL", description: "Clube MBL se torna a principal plataforma de conteúdo político e cultural do país." },
                { title: "Lançamento do aplicativo MBL", description: "Aplicativo que reúne a elite do pensamento brasileiro, promovendo conexões e transformações na comunidade." },
                { title: "Consolidação do Partido Missão", description: "Partido Missão se torna uma força política relevante, com candidatos em diversas esferas." }
            ] }
];

export default function TimelineRoll() {
    return (
        <div className="timeline-roll">
            <h2 className="mbl-title">Timeline do Movimento Brasil Livre</h2>
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
        </div>
    );
}