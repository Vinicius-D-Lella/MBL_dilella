import { title } from 'process';
import './index.css';

export interface TimelineCardInterface{
    year: string;
    color: string;
    image?: string;
    width:string;
    height:string;
    events: Array<{
        title: string;
        description: string;
    }>;
}




export default function TimelineCard(props: TimelineCardInterface) {
    const anoSeparado = props.year.split("")
    return (
        <div id='timeline-card' className={`timeline-card-${props.year}`} style={{ backgroundColor: props.color }}>
            <div id='timeline-card-color' className={`timeline-card-${props.year}-color`} >
                <div className='image-container'>
                    {props.image && <img src={props.image} alt={`Timeline ${props.year}`} />}
                </div>
                <h2 className='timeline-card-year'>{anoSeparado[0]}{anoSeparado[1]}<br/>{anoSeparado[2]}{anoSeparado[3]}</h2>

            </div>
            <div className={`timeline-card-${props.year}-content`} id='timeline-card-content'>
                {props.events.map((event, index) => (
                    <h2>
                        <strong>{event.title}</strong><br/>
                        {event.description}
                    </h2>
                ))
                }

                <div className={`timeline-card-${props.year}-content-texts`} id='timeline-card-content-texts'>
    
                </div>
            </div>
        </div>
    );
}
