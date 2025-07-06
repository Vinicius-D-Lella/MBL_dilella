import "./index.css";

export default function ClubeLivro() {
    return (
        <div className="clube-livro-container">
            <div className="clube-livro-header">
                <img 
                src="https://framerusercontent.com/images/bk9AHiHCq4E8clUwZzXxMGcsr3c.webp?scale-down-to=2048" alt="clube do livro valete" 
                className="clube-livro-header-image"/>
                <div className="clube-livro-title-container">
                    <h1 className="clube-livro-title">Clube do<br/>Livro Valete</h1>
                </div>
            </div>
            <div className="clube-livro-content">
                <p>O Clube do Livro Valete é parte essencial de uma das grandes revoluções culturais que o Brasil viverá no século 21.</p>
                <p>Este clube entrega uma edição de colecionador de grandes clássicos por mês, na sua casa, com obras que convidam você a mergulhar nos pensamentos, visões e práticas que modelam a civilização em que vivemos, afiando seu olhar, expandindo seu repertório e aproximando-o da elite intelectual do país.</p>
                <p>A sua assinatura também torna você um investidor da editora da Valete, com selos que nasceram para serem o lar de futuros originais que se tornarão fenômenos e clássicos brasileiros.</p>
            </div>
            <div className="clube-livro-bar">
                <div className="clube-livro-bar-image">
                    <img
                    src="https://framerusercontent.com/images/wH9i7y6lIJvzBijmHEMsPAFobcU.webp?scale-down-to=512"
                    alt="Clube do Livro Image"
                    className="clube-livro-image"
                    />
                </div>
                <div className="clube-livro-bar-blank"></div> 
                <div className="clube-livro-bar-content">
                    <div className="clube-livro-bar-left"></div>
                    <div className="clube-livro-bar-right">
                        <div className="clube-livro-bar-text">
                            Você quer entender melhor como se tornar parte deste movimento cultural?
                        </div>
                        <div className="clube-livro-bar-button">
                            <a href="https://clube.valete.org.br/" target="_blank" rel="noopener noreferrer">
                                Conheça melhor o Clube do Livro Valete
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}