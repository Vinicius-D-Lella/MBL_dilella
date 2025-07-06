import "./index.css";

export default function valete() {
    return (
    <div className="valete-container">
        <div className="valete-content">
            <div className="valete-header">
                <img
                    src="https://framerusercontent.com/images/wTomG2PjvAmrCgTVMV2sJUjslI.webp?scale-down-to=1024"
                    alt="Valete Banner"
                    className="valete-banner"
                    />
                <h1 className="valete-title">
                    Valete+
                </h1>
            </div>
            <div className="texts">
                <p className="valete-text">
                    O Valete Plus é um ecossistema digital criado para reunir as melhores mentes e oferecer uma jornada íntima e transformadora, combinando conhecimento, cultura e aprendizado.
                </p>
                <p className="valete-text">
                    Além de uma vasta biblioteca de conteúdo, com dossiês, documentários, filmes e cursos das áreas mais importantes para sua formação intelectual e cultural, essa plataforma oferece acesso aos bastidores exclusivos do Movimento Brasil Livre e disponibiliza uma rede social integrada, além de diversos recursos que serão lançados ao longo do tempo para conectar você a pessoas que pensam de forma semelhante e a criadores de conteúdo que você admira.
                </p>
                <p className="valete-text">
                    Além da tecnologia, você pode vivenciar a experiência premium da Valete, tornando-se assinante da revista física de política e cultura que mais cresce no país. Cada publicação discute os principais temas do passado, presente e futuro, com milhares de edições vendidas e distribuídas em bancas e livrarias de todo o Brasil.
                </p>
            </div> 
        </div>
        <div className="valete-bar">
            <div className="valete-bar-image">
                    <img
                    src="https://framerusercontent.com/images/P8XMF7jC9QtCltCf8Yv3GcefUM.webp?scale-down-to=512"
                    alt="Valete Image"
                    className="valete-image"
                    />
                </div>
            <div className="valete-bar-blank"></div> 
            <div className="valete-bar-content">
                <div className="valete-bar-left"></div>
                <div className="valete-bar-right">
                    <div className="valete-bar-text">
                    Você quer entender melhor como viver essa experiência intelectual?
                    </div>
                    <div className="valete-bar-button">
                        <a href="https://valete.org.br/" target="_blank" rel="noopener noreferrer">
                            Conheça melhor o Valete+
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}