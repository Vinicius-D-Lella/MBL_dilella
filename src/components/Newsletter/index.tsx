import './index.css';

export default function Newsletter() {
    return (
        <section id="newsletter">
            <div className="newsletter-left">
                <div className="newsletter-image">
                    <img height={30} width={30} src="newsletter.svg" alt="Newsletter Image" />
                    <h2>Assine a nossa newsletter</h2>
                </div>
                <p>Como assinante da nossa newsletter, você recebe análises exclusivas
                    sobre temas relevantes para sua vida e informações em primeira mão 
                    sobre diversas ações do MBL e da Valete.
                </p>
            </div>
            <div className="newsletter-right">
                <div className="newsletter-inputs">
                    <label>
                        <p>Nome</p>
                        <input type="text" name="Nome" placeholder="João Silva" required />
                    </label>
                    <label>
                        <p>Email</p>
                        <input type="email" name="Email" placeholder="jsilva@gmail.com" required />
                    </label>
                </div>
                <label className="newsletter-checkbox">
                    <input type="checkbox" defaultChecked></input>
                    <p>Concordo em receber a newsletter do MBL e parceiros. Podendo cancelar a  qualquer momento. Confira a nossa Política de Privacidade.</p>
                </label>
                <div className="newsletter-button">
                    <button>Assine gratuitamente agora</button>
                </div>
            </div>
        </section>
    );
}