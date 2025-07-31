export default function AltNewsletter() {
    return (
        <section id="newsletter" className='flex gap-2.5 h-min w-full relative p-7.5 items-center justify-center'>
            <div className="flex flex-row relative h-min gap-15 items-center">
                <div className="w-90.5 relative h-[395px] aspect-[0.916456/1]">
                    <div className="absolute">
                        <img className="block w-full h-full object-cover object-[center_center]" src="https://framerusercontent.com/images/Tmh1qHzVJnhk3CfSPAtogOZQrc.png?scale-down-to=1024"/>
                    </div>
                </div>
                <div>
                    <form className="flex flex-col items-start gap-5 h-min relative w-full">
                        <div>
                            <h2 className="text-[24px] font-bold">Receba nossa Newsletter</h2>
                        </div>
                        <div className="flex flex-row gap-5">
                            <label className="flex flex-col gap-2.5">
                                <div>
                                    <p className="text-[#999] text-[18px]/[1.5em] tracking-normal ">Nome</p>
                                </div>
                                <div className="h-10 w-full relative text-[18px] text-[#333] bg-[#f2f2f2] rounded-[8px] ">
                                    <input placeholder="João Silva" className="p-3 h-full rounded-[inherit]"></input>
                                </div>
                            </label>
                           <label className="flex flex-col gap-2.5">
                                <div>
                                    <p className="text-[#999] text-[18px]/[1.5em] tracking-normal">Email</p>
                                </div>
                                <div className="h-10 w-full relative text-[18px] text-[#333] bg-[#f2f2f2] rounded-[8px]">
                                    <input placeholder="jane@gmail.com" className="p-3 h-full rounded-[inherit]"></input>
                                </div>
                            </label>
                        </div>
                        <div className="w-full h-10 relative">
                            <button className="rounded-[8px] w-full h-full bg-[#5cbcae] hover:bg-[#924953]  hover:transition-[0.3s] text-white font-semibold">
                                <div>
                                    <p>Entre Gratuitamente</p>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        
        </section>
    );
}