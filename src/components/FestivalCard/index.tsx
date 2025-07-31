export default function FestivalCard() {
    return (
    <div className="w-full">
        <div className="bg-[#ffd912] rounded-[20px] w-[1080px] pt-[20px] h-min relative flex flex-col items-center gap-2.5">
            <div className="w-[85%] flex">
                <div className="gap-5 justify-center flex flex-row">
                    <div className="flex justify-center w-[257px] h-[215px]">
                        <img className="w-full h-full" src="https://framerusercontent.com/images/P99MPAntxuwuVPWUB9IhiK24KU.svg"/>
                    </div>
                    <div className="h-min pt-2.5 pb-2.5 pr-12.5 pl-12.5 gap-2.5 flex justify-center items-center flex-col text-center">
                    <div>
                        <p className="text-[22px] font-semibold">
                            <strong>
                                O PRIMEIRO FESTIVAL DO MBL
                            </strong>
                        </p>
                    </div>
                    <div>
                        <p className="text-[18px] text-[#333]">
                            O tradicional Congresso Nacional do MBL agora é Festival: mais ideias, mais cultura, mais ação. Prepare-se para um evento que vai além da política!
                        </p>
                        <p className="text-[18px] font-medium">Dia 29 de Novembro | Local: Komplexo Tempo</p>
                    </div>
                    <div>
                        <div className="pt-1.5 pb-1.5 pr-7.5 pl-7.5 bg-[#5cbcae] rounded-[10px] hover:transition-[0.3s] hover:bg-[#eb894f]">
                            <a className="no-underline text-white text-[18px] font-semibold tracking-[-0.03em]" href="https://festival.mbl.org.br/?_gl=1*yjq6g3*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc.">Garantir Meu Ingresso Agora</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full">
                    <div className="w-full">
                        <img className="w-full h-full" src="https://framerusercontent.com/images/veHsBHzhoB12mXH4TyQBA4qQP8.svg"/>
                    </div>
                </div>
            </div>

        </div>
    </div>)
}