import TimelineRoll from "@/components/TimelineRoll"
import "./index.css";

export default function mbl() {
    return (
    <div className="mbl-page">

        <div className="mbl-header">
            <div className="mbl-header-image">
                <div className="mbl-header-h1">
                    <h1>MBL</h1>
                </div>
                <div className="mbl-header-image-content">
                    <img src="https://framerusercontent.com/images/nvW0f3GvV8hPHn7bHKo8EpAXA.webp?scale-down-to=1024" alt="Imagem do Movimento Brasil Livre" />
                </div>
            </div>
        </div>
        <div className="mbl-content">
            <p>
                O Movimento Brasil Livre rapidamente se tornou um dos grupos de militância política mais relevantes do país e, em nossa trajetória de mais de uma década, expandimos nossa missão geracional para um partido político, escolas de formação intelectual, uma revista física e um aplicativo que reúne a elite do pensamento brasileiro, criando nossa própria tecnologia para promover conexões e transformações dentro da nossa comunidade.
            </p>
            <p>
                Enquanto movimento, somos uma organização independente que reúne milhares de membros em todos os estados da federação, com o propósito de tirar o país do atoleiro, formando, forjando e renovando os quadros que devem assumir posições de liderança na política local e nacional, deixando um legado extraordinário para a história do Brasil.
            </p>
            <p>
              Atualmente, contamos com mais de dez parlamentares que exercem seus mandatos com excelência e impactam efetivamente a vida das pessoas em suas cidades, estados e em todo o país. Em breve, eles serão os rostos orgulhosos do partido Missão.   
            </p>   
            <p>
               No campo cultural, produzimos programas diários que dialogam ao vivo com dezenas de milhares de pessoas e alcançam mais de dois milhões de espectadores todos os meses. 
            </p>   
            <p>
                Nossa revista impressa já soma dezenas de milhares de exemplares, sendo folheada mensalmente pela nova elite intelectual que estamos formando.
            </p>   
            <p>
               Com uma visão ousada e compromisso inabalável, seguimos transformando a política e a cultura do Brasil. O futuro já começou, e você pode fazer parte dessa mudança. 
            </p>   
        </div>

        <div className="mbl-bar">
            <div className="mbl-bar-image">
                <img src="https://framerusercontent.com/images/tzpF0RVLIyYeN8sUQkAd6uR2lQ.png" alt="dedo apontado pra você" />
            </div>
            <div className="mbl-bar-blank">
            </div>
            <div className="mbl-bar-cyan">
                <div className="mbl-bar-cyan-content">
                    <div className="mbl-bar-cyan-left">
                    </div>
                    <div className="mbl-bar-cyan-right">
                        <div className="mbl-bar-cyan-right-text">
                            <p>O MBL quer contratar você! <br/> Entre na Academia MBL</p>
                        </div>
                        <div className="academia-button">
                            <a href="https://academia.mbl.org.br/" target="_blank" rel="noopener noreferrer">
                            Inscreva-se para a próxima turma!
                            </a>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
            <TimelineRoll/>
    </div>
    );
}
