import './index.css';

export interface EventCardInterface{
    title: string;
    date: string;
    img: string;
    rua:string;
    regiao:string;
    cep:string;
    horario: string;
    link: string;
    nomeLocal?:string;

}

export default function EventCard(props: EventCardInterface) {
    return (
        <div className="event-card">
            <div className="event-card-header">
                <div className="event-card-title">
                <h4>{props.title}</h4>
                </div>
                <div className="event-card-subtitle">
                <p className='date'>{props.date}</p>                       
                </div>
            </div>
            <div className="event-card-infos">
                <div className="event-card-banner">
                    <div className="event-card-image-container">
                        <img src={props.img} alt={props.title}></img>
                    </div>
                </div>
                <div className="event-card-info">
                    <div className="event-card-info-container">
                        <p className='local'>
                            {props.nomeLocal && <strong>{props.nomeLocal}</strong>}
                            {props.nomeLocal && <br/>}
                            {props.rua}<br/>
                            {props.regiao}<br/>
                            {props.cep}

                        </p>
                        <p className='hour'><strong>Horário:</strong> {props.horario}</p>
                    </div>
                </div>
                <div className="event-card-button">
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        Quero ir!
                    </a>
                </div>
            </div>
            <div className="event-card-bar"/>
        </div>
    )
}