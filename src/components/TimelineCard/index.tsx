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
        <div className='flex w-full h-min items-center justify-center gap-10'>
        <div className='flex self-stretch flex-row w-125 h-auto relative gap-5' style={{ backgroundColor: props.color }}>
            <div className='flex justify-center items-center h-full overflow-visible' >
                <div>
                    <div className='w-[350px] h-min'>
                        <div className={`absolute left-[-130px] bottom-0 w-[${props.width}] h-[${props.height}]`} style={{ width: props.width, height: props.height }}>
                            {props.image && <img src={props.image} className='mix-blend-multiply w-full h-full object-cover object-[center_top]' alt={`Timeline ${props.year}`} />}
                        </div>
                    </div>
                </div>
                <h1 className='h-min'>
                    <span className='text-[140px]/[100px] font-bold text-white'>{anoSeparado[0]}{anoSeparado[1]}</span>
                        <span><br/></span>
                        <span className='text-[140px]/[100px] font-bold text-white'>{anoSeparado[2]}{anoSeparado[3]}</span></h1>

            </div>
        </div>
        <div className='w-80 h-min gap-5 flex flex-col p-[20px_0]' id='timeline-card-content' style={{ padding: props.padding }}>
                {props.events.map((event, index) => (
                    <h2 className='text-[#888] font-normal text-[20px]/[1.2em] tracking-[-0.4px] w-80 ' key={index}>
                        <span className='text-black font-medium text-[32px]/[1.2em]'>
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
