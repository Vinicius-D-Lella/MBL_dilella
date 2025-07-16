import './index.css';

export interface TimelineCardInterface{
    year: string;
    color: string;
    events: Array<{
        title: string;
        description: string;
    }>;
    width?:string;
    height?:string;
    image?: string;
    padding?: string;
}




export default function TimelineCard(props: TimelineCardInterface) {
    const anoSeparado = props.year.split("")
    return (
        <div className='timeline-row'>
        <div id='timeline-card' className={`timeline-card-${props.year}`} style={{ backgroundColor: props.color }}>
            <div id='timeline-card-color' className={`timeline-card-${props.year}-color`} >
                <div className='card-size'>
                    <div className='card-position'>
                        <div className='image-container' style={{ width: props.width, height: props.height }}>
                            {props.image && <img src={props.image} id={`Timeline${props.year}`} alt={`Timeline ${props.year}`} />}
                        </div>
                    </div>
                </div>
                <h1 className='timeline-card-year'>
                    <span>{anoSeparado[0]}{anoSeparado[1]}</span>
                        <span><br/></span>
                        <span>{anoSeparado[2]}{anoSeparado[3]}</span></h1>

            </div>
        </div>
        <div className={`timeline-card-${props.year}-content`} id='timeline-card-content' style={{ padding: props.padding }}>
                {props.events.map((event, index) => (
                    <h2 key={index}>
                        <span>
                            <strong>{event.title}</strong><br/>
                        </span>
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
