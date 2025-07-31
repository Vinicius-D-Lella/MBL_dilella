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

export default function mbl() {
    return (
    <div className="flex flex-col items-center justify-center">

        <div className="flex flex-row items-center justify-center">
            <div>
                <div className="absolute pt-22.5 pl-12.5">
                    <h1 className="absolute text-white text-[90px] font-bold">MBL</h1>
                </div>
                <div className="mbl-header-image-content">
                    <img src="https://framerusercontent.com/images/nvW0f3GvV8hPHn7bHKo8EpAXA.webp?scale-down-to=1024" alt="Imagem do Movimento Brasil Livre" />
                </div>
            </div>
        </div>
        <div className="flex gap-5 flex-col w-225 p-[40px_20px_20px_20px]">
            <p className="text-[18px]">
                O Movimento Brasil Livre rapidamente se tornou um dos grupos de militância política mais relevantes do país e, em nossa trajetória de mais de uma década, expandimos nossa missão geracional para um partido político, escolas de formação intelectual, uma revista física e um aplicativo que reúne a elite do pensamento brasileiro, criando nossa própria tecnologia para promover conexões e transformações dentro da nossa comunidade.
            </p>
            <p className="text-[18px]">
                Enquanto movimento, somos uma organização independente que reúne milhares de membros em todos os estados da federação, com o propósito de tirar o país do atoleiro, formando, forjando e renovando os quadros que devem assumir posições de liderança na política local e nacional, deixando um legado extraordinário para a história do Brasil.
            </p>
            <p className="text-[18px]">
              Atualmente, contamos com mais de dez parlamentares que exercem seus mandatos com excelência e impactam efetivamente a vida das pessoas em suas cidades, estados e em todo o país. Em breve, eles serão os rostos orgulhosos do partido Missão.   
            </p>   
            <p className="text-[18px]">
               No campo cultural, produzimos programas diários que dialogam ao vivo com dezenas de milhares de pessoas e alcançam mais de dois milhões de espectadores todos os meses. 
            </p>   
            <p className="text-[18px]">
                Nossa revista impressa já soma dezenas de milhares de exemplares, sendo folheada mensalmente pela nova elite intelectual que estamos formando.
            </p>   
            <p className="text-[18px]">
               Com uma visão ousada e compromisso inabalável, seguimos transformando a política e a cultura do Brasil. O futuro já começou, e você pode fazer parte dessa mudança. 
            </p>   
        </div>

        <div className="flex flex-col mb-25 gap-5 items-center">
            <div className="absolute w-[285px] left-[calc(31.6667%-142.5px)]">
                <img className="w-full" src="https://framerusercontent.com/images/tzpF0RVLIyYeN8sUQkAd6uR2lQ.png" alt="dedo apontado pra você" />
            </div>
            <div className="h-25">
            </div>
            <div className="bg-[#5cbcae] w-dvw h-min flex items-center justify-center">
                <div className="flex flex-row items-center justify-center w-225">
                    <div className="w-112.5">
                    </div>
                    <div className="gap-5 p-[25px_15px]">
                        <div>
                            <p className="text-[22px] font-semibold">O MBL quer contratar você! <br/> Entre na Academia MBL</p>
                        </div>
                        <div className="hover:bg-[#333] mt-2.5 bg-black text-white border-0 p-[15px_20px] rounded-[8px] cursor-pointer">
                            <a className="text-white font-semibold" href="https://academia.mbl.org.br/" target="_blank" rel="noopener noreferrer">
                            Inscreva-se para a próxima turma!
                            </a>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
            <div className="flex items-center flex-col justify-center">
                <h2 className="text-[#001122] text-[36px] font-bold tracking-[-0.4px] text-left">Timeline do Movimento Brasil Livre</h2>
                <div className="pt-12.5">
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
    </div>
    );
}
