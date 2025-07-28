'use client';




export interface NewsCardInterface{
    alt: string;
    title: string;
    subtitle:string;
    img:string;
    url:string;
}

function Link(url: string ) {
    window.location.href = url;
    return null;
}

export default function NewsCard(props: NewsCardInterface) {

    return (
    <div className="flex flex-col rounded-[20px] overflow-hidden w-80 h-120 gap-2.5 cursor-pointer shadow-2xl"
        onClick={() => {
            Link(props.url);
        }}
        >

        <div className="flex-none w-full h-[175px] relative">
            <img className='w-full h-full object-cover' src={props.img} alt={props.alt} />
        </div>
    
        <div className="flex flex-col p-7.5 gap-2.5">
            <h3 className='text-[22px]/6 font font-semibold pb-[10px]'>{props.title}</h3>
            <p className='text-[18px]/6 text-[#666] font-normal pb-[10px]'>{props.subtitle}</p>
            <div className="mt-auto bg-[#5cbcae] rounded-[10px] flex justify-center items-center gap-2.5 pt-2 pb-2 pr-3.75 pl-3.75 w-min whitespace-nowrap shadow-md shadow-gray-500">
                <a className='flex text-[16px] bg-transparent text-white font-semibold'>
                    Leia mais
                </a>
            </div>
        </div>

    </div>

    )

}