"use client";

import PVcard from "../PVcard";
import { useState } from "react";
import "./index.css";

export default function PVlist() {

    const [portaVozes, setPortaVozes] = useState([
    {
        id: 1,
        name: "Renan Santos",
        desc: "Fundador do MBL e presidente da Missão. Detrator oficial do governo e zagueiro da FFF.",
        seguidores: "+120 mil Seguidores",
        instagram: "https://www.instagram.com/renansantosmbl/",
        x: "https://x.com/RenanSantosMBL",
        src: "https://framerusercontent.com/images/0sElXq3wbcucPtdD2mxR9gypgM.webp",
        tags: ["Nacional", "Sudeste"],
    },
    {
        id: 2,
        name: "Kim Kataguiri",
        desc: "Fundador do MBL. Dep. Federal reeleito por SP. Youtuber e escritor. Eleito um dos 30 jovens mais influentes do planeta pela revista Time.",
        votos: "+295 mil Votos",
        seguidores: "+1,8 mi Seguidores",
        instagram: "https://www.instagram.com/kimkataguiri",
        youtube: "https://www.youtube.com/@kimkataguiri",
        x: "https://x.com/KimKataguiri",
        src: "https://framerusercontent.com/images/GnSJATiKk3UoTLaRSagML3e40o.png",
        tags: ["Nacional", "Sudeste", "Dep. Federal"],
    },
    {
        id: 3,
        name: "Arthur do Val",
        desc: "Empresário, Youtuber e Jornalista. Fez 10% para prefeitura de SP em 2020. Foi 2⁰ Dep. Estadual mais votado de SP em 2018. Eleito por 500 mil paulistas, cassado pelo sistema.",
        votos: "+520 mil Votos",
        seguidores: "+2,6 mi Seguidores",
        instagram: "https://www.instagram.com/arthurmoledoval",
        youtube: "https://www.youtube.com/@Mamaefalei",
        x: "https://x.com/arthurmoledoval",
        src: "https://framerusercontent.com/images/GlfLAWVBkl73IDJaZSuJ21YF8c.png",

        tags: ["Nacional", "Sudeste"],
    },
    {
        id: 4,
        name: "Guto Zacarias",
        desc: "Deputado estadual por SP eleito com 152.481 votos. Vice-Líder do Governo de São Paulo. Youtuber. Formado pela Academia MBL.",
        votos: "+150 mil Votos",
        seguidores: "+1,3 mi Seguidores",
        instagram: "https://www.instagram.com/gutozacariasmbl",
        youtube: "https://www.youtube.com/@GutoZacariasMBL",
        x: "https://x.com/gutozacariasmbl",
        src: "https://framerusercontent.com/images/QILkYCsiIE6TJ7hiROtPvzJoUw.png",
        tags: ["Nacional", "Sudeste", "Dep. Estadual"],
    },
        {
        id: 5,
        name: "Amanda Vettorazzo",
        desc: "Vereadora de São Paulo. Coordenadora nacional MBL. Gestora Pública. Pós-grad. Cidades Inteligentes.",
        votos: "+40 mil Votos",
        seguidores: "+1 mi Seguidores",
        instagram: "https://www.instagram.com/amanda.vettorazzo/",
        youtube: "https://www.youtube.com/@AmandaVettorazzosp",
        x: "https://x.com/Amandavettorazz",
        src: "https://framerusercontent.com/images/JMB8hm0fqCY4kWoO6Rz3wUQTO0.webp",
        tags: ["Vereadores", "Nacional", "Sudeste"],
    },
    {
        id: 6,
        name: "Cristiano Beraldo",
        desc: "Administrador de Empresas por formação e idealizador de um Brasil forte por vocação. Empreendedor nato e apaixonado pelo Brasil, decidiu que era hora de ir embora do país quando o Lula se reelegeu em 2006. Nos EUA começou debaixo e venceu, tendo voltado para o Brasil em 2015 quando viu o MBL resgatar a esperança dos brasileiros no seu próprio país. Permanente estudioso dos motivos pelos quais o Brasil é mantido no atraso, ingressou no MBL em 2021.",
        votos: "+43 mil Votos",
        seguidores: "+263 mil Seguidores",
        instagram: "https://www.instagram.com/cristianoberaldobr",
        youtube: "https://www.youtube.com/@CristianoBeraldoBR",
        x: "https://x.com/CristianoBeraldo",
        src: "https://framerusercontent.com/images/y9Yj86YOR25Pgohl6kvRY9RqGcM.png",
        tags: ["Nacional", "Sudeste"],
    },
    {
        id: 7,
        name: "Jota",
        desc: "Gaúcho, comentarista político. Inimigo nº1 do politicamente correto. Humorista e influenciador. Como café: preto, passado e amargo. Hoje, não vale nada, diferentemente de em 1850.",
        seguidores: "+422 mil Seguidores",
        instagram: "https://www.instagram.com/sigaonegro",
        x: "https://x.com/sigaonegro",
        src: "https://framerusercontent.com/images/hQWkAnFliwWoVxTU0ZIjT8jVKKA.webp",
        tags: ["Nacional", "Sul"],
    },
    {
        id: 8,
        name: "Paulo Cruz",
        desc: "Professor e palestrante. Formado em Filosofia, mestre em Ciências da Religião. Em 2017 recebeu a Ordem do Mérito Cultural pelo Ministério da Cultura, e com o podcast Noir foi vencedor do Prêmio Governo do Estado de São Paulo para as Artes. Colunista do jornal Gazeta do Povo e da Revista Valete.",
        seguidores: "+125 mil Seguidores",
        instagram: "https://www.instagram.com/paulocruzphi/",
        youtube: "https://www.youtube.com/@ProfPauloCruz",
        x: "https://x.com/paulocruzphi",
        src: "https://framerusercontent.com/images/RO4rDWr4xSUT0ea8MMJwP8Ez3BI.webp",
        tags: ["Nacional", "Sudeste"],
    },
    {
        id: 9,
        name: "Renato Battista",
        desc: "Suplente de Deputado Estadual em São Paulo, com mais de 54 mil votos. Especialista em Geopolítica e política nacional, Renato frequentemente representa o movimento em debates nos principais podcasts e programas da internet, rádio e TV. Como assessor, ele foi responsável por alguns dos resultados históricos que os parlamentares do movimento tiveram.",
        votos: "+54 mil Votos",
        seguidores: "+356 mil Seguidores",
        instagram: "https://www.instagram.com/renatobattistambl/",
        youtube: "https://www.youtube.com/@RenatoBattista",
        x: "https://x.com/renato_battista",
        src: "https://framerusercontent.com/images/EcpubTsvpb5YNDrcYMURhRHix2s.webp",
        tags: ["Nacional", "Sudeste"],
    },
    {
        id: 10,
        name: "Ricardo Almeida",
        desc: "Coordenador nacional do MBL, diretor do projeto do Livro Amarelo e editor da Revista Valete. Formado em filosofia (UFBA) e direito (FACS), pesquisador doutorando em filosofia na USP. É editor e organizador do livro 'Os Estados Unidos e a Nova Ordem Mundial', e foi co-autor do debate contra Henry Bugalho.",
        seguidores: "+11 mil Seguidores",
        instagram: "https://www.instagram.com/ricardoalmeidambl/",
        x: "https://x.com/ricardo_mbl",
        src: "https://framerusercontent.com/images/aCsd3HvPxJ2rBcyljuH86KhYMk.webp",
        tags: ["Nacional", "Nordeste"],
    },
    {
        id: 11,
        name: "Juliana Lima",
        desc: "Vice-prefeita de Meridiano/SP e ex-vereadora, é advogada de formação e figura atuante na política local. Defensora da presença feminina na política, combina conhecimento jurídico com gestão pública, buscando soluções práticas para os desafios do município.",
        votos: "+1,7 mil Votos",
        seguidores: "+9 mil Seguidores",
        instagram: "https://www.instagram.com/julianalima_adv/",
        src: "https://framerusercontent.com/images/PaaPT8QfkE3FzrX9P9bNbgeDo.webp",
        tags: ["Vice-Prefeita", "Sudeste"],
    },
    {
        id: 12,
        name: "Rafael Minatoawa",
        desc: "Subprefeito da Vila Mariana, na cidade de São Paulo. Economista e mestre em Ciência Política, integra o MBL e tem perfil técnico e voltado à gestão pública. Trabalha com foco na eficiência administrativa, zeladoria urbana e participação cidadã.",
        seguidores: "+4 mil Seguidores",
        instagram: "https://www.instagram.com/rafaminatosp/",
        youtube: "https://www.youtube.com/@rafaelminatosp",
        src: "https://framerusercontent.com/images/1jkWFVD5diktJKul3GWu90vo2MM.webp",
        tags: ["Sudeste"],
    },
    {
        id: 13,
        name: "Bruno Zancheta",
        desc: "Vereador reeleito em São Carlos/SP, atua como Vice-Presidente da Câmara Municipal. Engajado com o desenvolvimento local e políticas públicas voltadas à melhoria da qualidade de vida da população, tem se destacado por sua atuação próxima da comunidade.",
        votos: "+4 mil Votos",
        seguidores: "+10 mil Seguidores",
        instagram: "https://www.instagram.com/brunozancheta/",
        src: "https://framerusercontent.com/images/U6WA0LX76dswpEtAiwtS51SOE.webp",
        tags: ["Sudeste", "Vereadores"],
    },
    {
        id: 14,
        name: "Gabriel Tomazini",
        desc: "2º Vereador mais votado nas eleições de 2024, obtendo quase 5% dos votos em São Luiz Paraitinga/SP. Formado pela Academia MBL. Empresário, músico e produtor musical, foi diretor da Associação Comercial e Industrial de São Luiz do Paraitinga e presidente do Conselho Municipal de Turismo.",
        votos: "+380 votos",
        seguidores: " +4 mil Seguidores",
        instagram: "https://www.instagram.com/tomazinimbl/",
        src: "https://framerusercontent.com/images/E5TRDU5mTu85FMGVGprUnce8pAw.webp",
        tags: ["Sudeste", "Vereadores"],
    },
    {
        id: 15,
        name: "Israel Russo",
        desc: "Vereador de Pouso Alegre, colunista da Revista Valete, coordenador nacional do Movimento Brasil Livre e professor de Filosofia.",
        votos: "+1,7 mil Votos",
        seguidores: "+11 mil Seguidores",
        instagram: "https://www.instagram.com/israelrussomg/",
        src: "https://framerusercontent.com/images/jeW5wAVtmVvONq1jtxyQxzc.webp",
        tags: ["Sudeste", "Vereadores"],
    },
    {
        id: 16,
        name: "Italo Moreira",
        desc: "Vereador de Sorocaba reeleito em 2024, com mais de 8.500 propostas e 151 leis aprovadas. Defensor da transparência e dos direitos dos cidadãos, atua em segurança, mobilidade, educação e combate à corrupção.",
        votos: "+10 mil Votos",
        seguidores: "+10 mil Seguidores",
        instagram: "https://www.instagram.com/italomoreirasp/",
        src: "https://framerusercontent.com/images/HaLDsBQORaImtDJP59RWqcjcezs.webp",
        tags: ["Sudeste", "Vereadores"],
    },
    {
        id: 17,
        name: "Luana Silva",
        desc: "Natural de Chapada Gaúcha. Advogada. Vereadora mais jovem da história da sua cidade. Sua principal pauta é a educação e a construção de um Brasil mais livre para as futuras gerações.",
        votos: "+240 votos",
        seguidores: "+43 mil Seguidores",
        instagram: "https://www.instagram.com/luanasilvamgs/",
        youtube: "https://www.youtube.com/@luanasilvamgs",
        x: "https://x.com/luanasilvamgs",
        src: "https://framerusercontent.com/images/Qzjm5j9lskpq5uSUjuoRbOgM84.webp",
        tags: ["Sudeste", "Vereadores"],
    },
    {
        id: 18,
        name: "Lucas Pires",
        desc: "Vereador eleito em Ibiúna/SP e médico veterinário. Concilia a atuação política com a causa animal e o bem-estar comunitário. Tem como prioridade a escuta ativa da população e a implementação de soluções práticas para os problemas do município.",
        votos: "+889 votos",
        seguidores: "+9,8 mil Seguidores",
        instagram: "https://www.instagram.com/veterinariolucaspires/",
        src: "https://framerusercontent.com/images/7ffBdm8VsCzjVkonCeACJxFnGoM.webp",
        tags: ["Sudeste", "Vereadores"],
    },
    {
        id: 19,
        name: "Mateus Batista",
        desc: "Vereador mais jovem da história de Joinville/SC, formado em Gestão Pública e graduando em Ciências Econômicas, coordenador do MBL em Santa Catarina desde os 15 anos. Formado pela Academia MBL.",
        votos: "+5,6 mil Votos",
        seguidores: "+156 mil Seguidores",
        instagram: "https://www.instagram.com/mateusbatistasc/",
        youtube: "https://www.youtube.com/@mateusbatistasc",
        x: "https://x.com/mateusbatistasc",
        src: "https://framerusercontent.com/images/suVMuFIe3i12QxLB0MgW82gwrE.webp",
        tags: ["Sul", "Vereadores"],
    },
    {
        id: 20,
        name: "Matheus Faustino",
        desc: "Vereador de Natal. Bodybuilder e youtuber. Formado pela Academia MBL.",
        votos: "+5 mil Votos",
        seguidores: "+400 mil Seguidores",
        instagram: "https://www.instagram.com/faustinorn/",
        youtube: "https://www.youtube.com/@FaustinoRN",
        x: "https://x.com/faustinorn01",
        src: "https://framerusercontent.com/images/yFF6zrqUAjza8NylmNKR0oj0Vw.webp",
        tags: ["Nordeste", "Vereadores"],
    },
    {
        id: 21,
        name: "Paulo Filipe",
        desc: "Formado em Geografia e pós graduado em gerência de cidades, reeleito vereador em Cruzeiro/SP, Presidente da Câmara Municipal (2025-2026) e Colaborador do Escritório Nacional da RCCBRASIL como Editor e produtor de vídeos.",
        votos: "+770 votos",
        seguidores: "+9 mil Seguidores",
        instagram: "https://www.instagram.com/paulofilipecrz/",
        youtube: "https://www.youtube.com/paulofilipecrz",
        x: "https://x.com/paulofilipecrz",
        src: "https://framerusercontent.com/images/6eFVStjxBntEQ4YBKBuPYcb1yU.webp",
        tags: ["Sudeste", "Vereadores"],
    },
    {
        id: 22,
        name: "Pedro Duarte",
        desc: "Vereador no Rio de Janeiro. Advogado formado na PUC-Rio e especialista em Gestão Pública, pelo Insper. Na PUC, foi eleito e reeleito presidente do DCE. Já atuou na Câmara dos Deputados e também na Assembleia Legislativa do Estado. Em 2024, foi reeleito Vereador da cidade do Rio com mais de 15 mil votos.",
        votos: "+15 mil Votos",
        seguidores: "+42 mil Seguidores",
        instagram: "https://www.instagram.com/pedroduarterio/",
        youtube: "https://www.youtube.com/@PedroDuarteRio",
        x: "https://x.com/pedroduarterio",
        src: "https://framerusercontent.com/images/kn1EtWBVJBimqfhYJ4Z4KjkfjJ4.webp",
        tags: ["Sudeste", "Vereadores"],
    },
    {
        id: 23,
        name: "Sandro Filho",
        desc: "Vereador mais jovem da história de Salvador. Nascido e criado em Coutos, bairro periférico de Salvador. Formado pela Academia MBL.",
        votos: "+12,5 mil Votos",
        seguidores: "+164 mil Seguidores",
        instagram: "https://www.instagram.com/sandrofilhombl/",
        youtube: "https://www.youtube.com/@sandrofilhombl",
        x: "https://x.com/SandroFilhoMBL",
        src: "https://framerusercontent.com/images/mQbFKGlZhf1LIjMpiMu4K3mdsM.webp",
        tags: ["Nordeste", "Vereadores"],
    },
    {
        id: 24,
        name: "Andrei Castro",
        desc: "Advogado e Chefe de Gabinete do vereador Sandro Filho. Também atua como porta-voz do MBL, tendo como foco o combate à corrupção, a defesa do Estado de Direito e a mobilização de jovens para a renovação política.",
        votos: "+400 votos",
        seguidores: "+10 mil Seguidores",
        instagram: "https://www.instagram.com/andreicastrombl/",
        youtube: "https://www.youtube.com/@andreicastrombl",
        x: "https://x.com/andreicastrombl",
        src: "https://framerusercontent.com/images/skggbBhbMAo7jmvQv8czU7y0uc.webp",
        tags: ["Nordeste"],
    },
    {
        id: 25,
        name: "Arthur Scara",
        desc: "Advogado formado pela PUC-SP, cristão e ativista político. Coordenador do MBL, tem atuação marcada pela defesa da justiça social, combate à corrupção e promoção de valores liberais no debate público. Envolvido na formação política de jovens líderes.",
        votos: "+2,7 mil Votos",
        seguidores: "+107 mil Seguidores",
        instagram: "https://www.instagram.com/arthur.scara/",
        src: "https://framerusercontent.com/images/yWfEJqIgWwaYXTo7A4rNXbH9U.webp",
        tags: ["Sudeste"],
    },
    {
        id: 26,
        name: "Gustavo Camillo",
        desc: "Coordenador do MBL em Curitiba/PR, é um jovem ativista com forte posicionamento à direita. Defensor do punitivismo penal e crítico das pautas progressistas, atua principalmente em causas relacionadas à segurança pública e combate à impunidade.",
        votos: "+483 Votos",
        seguidores: "+13 mil Seguidores",
        instagram: "https://www.instagram.com/gu.camillo/",
        src: "https://framerusercontent.com/images/Ay0Vv1Hgsa0ZbkHPoyjTO7iEZV0.webp",
        tags: ["Sul"],
    },
    {
        id: 27,
        name: "Pedro Arthur",
        desc: "Estudante e influenciador político no Ceará, militante e porta-voz do MBL desde 2021. Formado pela Academia MBL. ",
        votos: "+2,8 mil Votos",
        seguidores: "+80 mil Seguidores",
        instagram: "https://www.instagram.com/pedroarthurce/",
        x: "https://x.com/PedroArthurMBL",
        src: "https://framerusercontent.com/images/8KNHy23Rl9NEtOmTXsrKUY7bkE.webp",
        tags: ["Nordeste"],
    },
    {
        id: 28,
        name: "Rafa Macris",
        desc: "Comentarista da Jovem Pan e empresário do agro voltado à robotização e automação de usinas de cana-de-açúcar. Inimigo número um dos Invasores de propriedade e defensor ferrenho do setor que move o Brasil.",
        votos: "+1,7 mil Votos",
        seguidores: "+147 mil Seguidores",
        instagram: "https://www.instagram.com/rafamacris/",
        x: "https://x.com/rafamacris",
        src: "https://framerusercontent.com/images/QxeTV5jPEAfAX4fETIUjG9JI8.webp",
        tags: ["Sudeste"],
    },
    {
        id: 29,
        name: "Sávio Rodrigues",
        desc: "Estudante de Economia e porta-voz do MBL em Recife/PE. Com forte atuação universitária, defende ideias liberais e o rompimento com estruturas políticas tradicionais no Nordeste. Atua na formação política de jovens e na organização de mobilizações públicas.",
        votos: "+1,9 mil Votos",
        seguidores: "+24 mil Seguidores",
        instagram: "https://www.instagram.com/saviorodripe/",
        src: "https://framerusercontent.com/images/EKUYIFpqBqTgeeISroikQfsE.webp",
        tags: ["Nordeste"],
    },
]);
    const [filteredPortaVozes, setFilteredPortaVozes] = useState(portaVozes);

    const [buttonPressed, setButtonPressed] = useState("Todos");

    function sortPortaVozesAZ() {
    returnToOriginalOrder();   
    setButtonPressed("A-Z");
    setFilteredPortaVozes((prevFilteredPortaVozes) => {
        const sorted = [...prevFilteredPortaVozes].sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
        return sorted;
    });
}

function returnToOriginalOrder() {
    setButtonPressed("Todos");
    setFilteredPortaVozes(() => {
        return [...portaVozes];
    });
}

function filterPortaVozesByTag(tag: string) {
    returnToOriginalOrder();
    setButtonPressed(tag);
    setFilteredPortaVozes((prevFilteredPortaVozes) => {
        const filtered = prevFilteredPortaVozes.filter((portaVoz) => portaVoz.tags.includes(tag));
        return filtered;
    });
}

  return (<div className="pvlist-container">
    <div className="pvlist-buttons">
        <p className={`${buttonPressed === "Todos" ? 'active' : ''}`} onClick={returnToOriginalOrder}>Todos</p>
        <p className={`${buttonPressed === "A-Z" ? 'active' : ''}`} onClick={sortPortaVozesAZ}>A-Z</p>
        <p className={`${buttonPressed === "Nacional" ? 'active' : ''}`} onClick={() => filterPortaVozesByTag("Nacional")}>Nacional</p>
        <p className={`${buttonPressed === "Nordeste" ? 'active' : ''}`} onClick={() => filterPortaVozesByTag("Nordeste")}>Nordeste</p>
        <p className={`${buttonPressed === "Sudeste" ? 'active' : ''}`} onClick={() => filterPortaVozesByTag("Sudeste")}>Sudeste</p>
        <p className={`${buttonPressed === "Sul" ? 'active' : ''}`} onClick={() => filterPortaVozesByTag("Sul")}>Sul</p>
        <p className={`${buttonPressed === "Dep. Federal" ? 'active' : ''}`} onClick={() => filterPortaVozesByTag("Dep. Federal")}>Dep. Federal</p>
        <p className={`${buttonPressed === "Dep. Estadual" ? 'active' : ''}`} onClick={() => filterPortaVozesByTag("Dep. Estadual")}>Dep. Estadual</p>
        <p className={`${buttonPressed === "Vice-Prefeita" ? 'active' : ''}`} onClick={() => filterPortaVozesByTag("Vice-Prefeita")}>Vice-Prefeita</p>
        <p className={`${buttonPressed === "Vereadores" ? 'active' : ''}`} onClick={() => filterPortaVozesByTag("Vereadores")}>Vereadores</p>
    </div>
    <div className="pvlist">
        { filteredPortaVozes.map((portaVoz, index) => (
            <PVcard
                key={index}
                name={portaVoz.name}
                desc={portaVoz.desc}
                votos={portaVoz.votos}
                seguidores={portaVoz.seguidores}
                instagram={portaVoz.instagram}
                youtube={portaVoz.youtube}
                x={portaVoz.x}
                src={portaVoz.src}
                tags={portaVoz.tags}
            />
        ))

        }
    </div>


  </div>);
}