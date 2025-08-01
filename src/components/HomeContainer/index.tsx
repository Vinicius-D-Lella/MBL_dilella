import { YouTubeEmbed } from "@next/third-parties/google";
import FestivalCard from "../FestivalCard";
import LojaSlider from "../LojaSlider";
import NewsRoll from "../NewsRoll";
import PVslider from "../PVslider";
import TimelineCard from "../TimelineCard";
import Newsletter from "../Newsletter";
import Image from "next/image";
import { DownWhite } from "../svgs";

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
    <div className="flex items-center flex-col gap-5">
        <div className="h-162.5 relative w-full">
            <div className="h-[371px] left-0 absolute right-0 top-17.5">
                <div className="absolute rounded-[inherit] top-0 right-0 bottom-0 left-0">
                    <img className="block w-full h-full rounded-[inherit] object-contain object-center" src="https://framerusercontent.com/images/z3qpZ2QmgdGNizf3SkQhsOJyc8.png?scale-down-to=2048"></img>
                </div>
        </div>
        <div className="content-center items-center bottom-0 flex flex-none flex-col flex-nowrap gap-3.75 h-min justify-center left-[50%] overflow-hidden p-[0_0_10px] absolute transform-[translate(-50%)] pb-2.5 w-300">
            <div>
                <div className="outline-none flex flex-col justify-start shrink-0 transform-none">
                    <h1 className="text-[42px] font-semibold tracking-[-0.03em]">Juntos pelo Brasil que Sonhamos!</h1>
                </div>
            </div>
            <div className="outline-none flex flex-col justify-start shrink-0 transform-none h-auto relative whitespace-pre-wrap w-140">
                <p className="text-center text-[20px] tracking-[-0.02em]">Unimos pessoas que desejam marcar sua geração e entregamos a elas oportunidades reais de agir hoje, para começarem a construir um legado único para o seu país, em cada uma das nossas iniciativas.</p>
            </div>
        </div>
        <div>
            <div className="h-[385px] aspect-[1.998065764023211/1] flex-none left-[50%] absolute top-2.5 transform-[translate(-50%)] w-[769px] z-1 ">
            <div className="absolute rounded-[inherit] top-0 right-0 bottom-0 left-0">
                <img className="h-full w-full rounded-[inherit] object-cover object-center" src="https://framerusercontent.com/images/0uU0LqPCV0h7qFEFjBRg4QbHT8.png?scale-down-to=1024"></img>
            </div>
            </div>
        </div>
        <div className="flex-none bottom-[170px] h-52.5 left-[calc(50.00000000000002%-380px/2)] absolute w-[380px] z-2">
                <YouTubeEmbed videoid="qgGt4pkbNtk" height={210} width={380} />
        </div>
    </div>
    <div className="festival">
        <FestivalCard/>
    </div>
    <div className="p-[40px_20px_0]">
        <div className="flex justify-center flex-col items-center p-[0_0_15px]">
            <div className="iniciativas-header-title">
                <p className="text-[30px] font-semibold">Iniciativas MBL</p>
            </div>
            <div className="w-140">
                <p className="text-center text-[20px]">Conheça nossos projetos para a refundação do Brasil através da transformação cultural, educacional e legislativa de todo Brasil</p>
            </div>
        </div>
        <div className="flex flex-row gap-2.5 max-w-[1100px] w-full justify-center relative">
            <div className="flex items-center relative gap-2.5 p-[100px_15px_30px]" id="revista">
                <div className="h-[255px] absolute top-0 left-[calc(50.00000000000002%-260px/2)] w-65">
                    <div className="w-full h-full">
                        <img
                        className="w-full h-full object-contain object-center"
                        width="585"
                        height="573"
                        src='https://framerusercontent.com/images/YaiCNcCvdxsrb6RFUcRsL59Cnk.webp?scale-down-to=512'></img>
                    </div>
                </div>
                <div className="flex flex-col w-[330px] h-min rounded-[20px] p-[160px_30px_30px] bg-white shadow-2xl gap-1.5">
                    <div className="flex flex-col justify-start">
                        <p className="text-[22px] font-semibold">Revista Valete</p>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="text-[18px]/[1.2em] text-[#666] text-left tracking-[-0.01em] mb-2">Conteúdos dos mais diversos temas. De economia a filosofia, de política a história, de cultura a culinária, para ler e aprender no conforto da sua casa.</p>
                    </div>
                    <div>
                        <a className="p-[6px_30px] rounded-[6px] bg-[#5cbcae] no-underline text-white text-[18px] font-semibold tracking-[-0.03em] hover:transition-[0.3s] hover:bg-[#eb894f]" href="https://valete.org.br/?_gl=1*1rphh6m*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc.#revista" target="_blank" rel="noopener noreferrer">Saiba mais</a>
                    </div>
                </div>
            </div>
            <div className="flex items-center relative gap-2.5 p-[100px_15px_30px]" id="valete+">
                <div className="h-[255px]  absolute top-0 left-[calc(50.00000000000002%-260px/2)] w-65">
                    <div className="w-full h-full">
                        <img
                        className="w-full h-full object-contain object-center"
                        width="370"
                        height="790"
                        src='https://framerusercontent.com/images/iyba8bci92GJ1GaO58ZFM7uZQDg.webp'></img>
                    </div>
                </div>
                <div className="flex flex-col w-[330px] h-min rounded-[20px] p-[160px_30px_30px] bg-white shadow-2xl gap-1.5">
                    <div className="flex flex-col justify-start">
                        <p className="text-[22px] font-semibold">Valete+</p>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="text-[18px]/[1.2em] text-[#666] text-left tracking-[-0.01em] mb-2">Aplicativo que reúne conhecimento e cultura, com diversos conteúdos para você se aprofundar em temas relevantes e transformadores.</p>
                    </div>
                    <div >
                        <a className="p-[6px_30px] rounded-[6px] bg-[#5cbcae] no-underline text-white text-[18px] font-semibold tracking-[-0.03em] hover:transition-[0.3s] hover:bg-[#eb894f]" href="https://valete.org.br/?_gl=1*1rphh6m*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc." target="_blank" rel="noopener noreferrer">Saiba mais</a>
                    </div>
                </div>
            </div>
            <div className="flex items-center relative gap-2.5 p-[100px_15px_30px]" id="livro">
                <div className="h-[255px] absolute top-0 left-[calc(50.00000000000002%-260px/2)] w-65">
                    <div className="w-full h-full">
                        <img 
                        className="w-full h-full object-contain object-center"
                        width="370"
                        height="790"
                        src='https://framerusercontent.com/images/Dr7tI5QWAYS8ah6FIM2Bvn8VNg.webp?scale-down-to=1024'></img>
                    </div>
                </div>
                <div className="flex flex-col w-[330px] h-min rounded-[20px] p-[160px_30px_30px] bg-white shadow-2xl gap-1.5">
                    <div className="flex flex-col justify-start">
                        <p className="text-[22px] font-semibold">Clube do Livro</p>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="text-[18px]/[1.2em] text-[#666] text-left tracking-[-0.01em] mb-2">Nossa comunidade de leitura que busca as conexões necessárias para resgatar a cultura, a literatura, a identidade e o imaginário brasileiro.</p>
                    </div>
                    <div >
                        <a className="p-[6px_30px] rounded-[6px] bg-[#5cbcae] no-underline text-white text-[18px] font-semibold tracking-[-0.03em] hover:transition-[0.3s] hover:bg-[#eb894f]" href="https://clube.valete.org.br/?_gl=1*1rphh6m*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc." target="_blank" rel="noopener noreferrer">Saiba mais</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
        <div>
            <div className="flex flex-row">
                <div className="flex items-center relative gap-2.5 p-[100px_15px_30px]" id="academia">
                    <div className="h-[255px] absolute top-0 left-[calc(50.00000000000002%-260px/2)] w-65">
                        <div className="w-full h-full">
                            <img src='https://framerusercontent.com/images/GxNFJESDhsTMLYqXoFEslSgFUs.webp'></img>
                        </div>
                    </div>
                    <div className="flex flex-col w-[330px] h-min rounded-[20px] p-[160px_30px_30px] bg-white shadow-2xl gap-1.5">
                        <div className="flex flex-col justify-start">
                            <p className="text-[22px] font-semibold">Academia MBL</p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <p className="text-[18px]/[1.2em] text-[#666] text-left tracking-[-0.01em] mb-2">Queremos que você seja nosso político eleito, chefe de gabinete, um coordenador ou um intelectual.</p>
                        </div>
                        <div >
                            <a className="p-[6px_30px] rounded-[6px] bg-[#5cbcae] no-underline text-white text-[18px] font-semibold tracking-[-0.03em] hover:transition-[0.3s] hover:bg-[#eb894f]" href="https://academia.mbl.org.br/?_gl=1*1sc2xub*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc." target="_blank" rel="noopener noreferrer">Saiba mais</a>
                        </div>
                    </div>
                </div>    
                <div className="flex items-center relative gap-2.5 p-[100px_15px_30px]" id="cursos">
                    <div className="h-[255px]  absolute top-0 left-[calc(50.00000000000002%-260px/2)] w-65">
                        <div className="w-full h-full">
                            <img className="w-full h-full object-contain object-center" src='https://framerusercontent.com/images/EljRFH29ZtbfokMzuFiVmaYM8.png'></img>
                        </div>
                    </div>
                    <div className="flex flex-col w-[727px] h-min rounded-[20px] p-[160px_30px_30px] bg-white shadow-2xl gap-1.5">
                        <div className="flex flex-col justify-start">
                            <p className="text-[22px] font-semibold">Cursos</p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <p className="text-[18px]/[1.2em] tracking-[-0.01em] text-left text-[#666]">Conheça nossos cursos elaborados para o seu desenvolvimento intelectual e profissional.</p>
                        </div>
                        <div className="grid gap-2.5 auto-rows-[minmax(0,1fr)] grid-cols-[repeat(2,minmax(50px,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-min justify-center relative">
                            <a className="p-[6px_30px] rounded-[6px] bg-[#5cbcae] no-underline w-min whitespace-nowrap text-white text-[18px] font-semibold tracking-[-0.03em] hover:transition-[0.3s] hover:bg-[#eb894f]" href="https://maquinadecortes.digital/">Máquina de Cortes</a>
                            <a className="p-[6px_30px] rounded-[6px] bg-[#5cbcae] no-underline w-min whitespace-nowrap text-white text-[18px] font-semibold tracking-[-0.03em] hover:transition-[0.3s] hover:bg-[#eb894f]" href="https://valete.org.br/filosofia?_gl=1*ei4uug*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc.">Filosofia Política</a>
                            <a className="p-[6px_30px] rounded-[6px] bg-[#5cbcae] no-underline w-min whitespace-nowrap text-white text-[18px] font-semibold tracking-[-0.03em] hover:transition-[0.3s] hover:bg-[#eb894f]" href="https://valete.org.br/segredosdaescrita?_gl=1*ei4uug*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc.">Segredos da Escrita</a>
                            <a className="p-[6px_30px] rounded-[6px] bg-[#5cbcae] no-underline w-min whitespace-nowrap text-white text-[18px] font-semibold tracking-[-0.03em] hover:transition-[0.3s] hover:bg-[#eb894f]" href="https://valete.org.br/historia?_gl=1*9grais*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc.">História da Humanidade</a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <div className="flex items-center flex-col gap-6.25 p-[40px_20px]">
        <div>
            <p className="text-[30px] font-semibold">Nossos Porta-vozes</p>
        </div>
        <PVslider/>
        <div className="p-5 flex items-center content-center justify-center">
            <div>
                <a className="p-[6px_30px] rounded-[6px] bg-[#5cbcae] no-underline text-white text-[18px] font-semibold tracking-[-0.03em] hover:transition-[0.3s] hover:bg-[#eb894f]" href="/MBL_dilella/porta-vozes">Conheça todos porta-vozes</a>
            </div>
        </div>
    </div>
    <div className="pb-10 flex flex-col items-center gap-5">
        <div>
            <h2 className="text-[30px] font-semibold">Últimas notícias sobre o movimento</h2>
        </div>
        <NewsRoll></NewsRoll>
    </div>
    <div className="relative flex items-center content-center flex-col mb-7.5">
        <div>
            <h2 className="text-[30px]/[3em] font-semibold text-[#001122]">Timeline do Movimento Brasil Livre</h2>
        </div>
        <div>
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
            <div className="bg-black right-[43%] bottom-[-25px] p-[10px_20px] rounded-[10px] h-12 w-auto absolute flex flex-row content-center items-center">
                <div className="h-min">
                    <a className="text-[22px] font-bold no-underline text-white" href="/MBL_dilella/mbl#historia">
                    CONTINUA
                </a>
                </div>
                    <Image
                        priority
                        src={DownWhite}
                        width={25}
                        alt="logo"
                    />

              
            </div>
    </div>
    <div className="flex gap-6.25 p-[40px_20px] w-full flex-col">
        <div className="p-5 flex items-center content-center justify-center">
            <div>
                <p className="text-[30px] font-semibold tracking-[-0.03em]">Loja MBL</p>
            </div>
        </div>
        <div className="loja-mbl-roll">
            <LojaSlider/>
        </div>
        <div className="p-5 flex items-center content-center justify-center">
            <div>
                <a className="p-[6px_30px] rounded-[6px] bg-[#5cbcae] no-underline text-white text-[18px] font-semibold tracking-[-0.03em] hover:transition-[0.3s] hover:bg-[#eb894f]" href="https://loja.mbl.org.br/" target="_blank" rel="noopener noreferrer">Ir para Loja MBL</a>
            </div>
        </div>
    </div>
    <Newsletter/>
  </div>)
}