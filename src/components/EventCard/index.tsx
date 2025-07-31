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
        <div className="place-content-center items-center flex gap-y-7.5 relative w-full flex-col">
            <div className="items-start flex flex-col gap-0 h-min overflow-hidden p-0 relative w-full">
                <div className="outline-none flex flex-col justify-start transform-none">
                <h4 className='text-[28px]/[1.4em] font-bold text-black text-start tracking-[-0.04em]'>{props.title}</h4>
                </div>
                <div>
                <p className='font-normal text-[18px] text-[#888] text-start'>{props.date}</p>                       
                </div>
            </div>
            <div className="flex w-full items-center flex-row justify-between">
                <div className="h-31.25 max-w-full relative w-62.5 rounded-[12px]">
                    <div className="rounded-[12px] w-full h-full">
                        <img className='w-full h-full rounded-[12px] object-cover' src={props.img} alt={props.title}></img>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="text-[#666] text-[18px]">
                        <p className='local'>
                            {props.nomeLocal && <strong className='font-extrabold'>{props.nomeLocal}</strong>}
                            {props.nomeLocal && <br/>}
                            {props.rua}<br/>
                            {props.regiao}<br/>
                            {props.cep}

                        </p>
                        <p className='mt-20px'><strong>Horário:</strong> {props.horario}</p>
                    </div>
                </div>
                <div>
                    <a className='pt-1 pb-1 pr-7.5 pl-7.5 bg-[#5cbcaa] hover:bg-[#eb894f] rounded-[6px] text-[18px] font-semibold text-white transition-[0.3s] text-deco no-underline tracking-[-0.03em]' href={props.link} target="_blank" rel="noopener noreferrer">
                        Quero ir!
                    </a>
                </div>
            </div>
            <div className="items-center bg-[#dddddd] flex-row gap-2.5 h-0.5 overflow-hidden p-0 relative w-[75%]"/>
        </div>
    )
}