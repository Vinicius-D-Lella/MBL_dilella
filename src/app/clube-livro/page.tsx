export default function ClubeLivro() {
    return (
        <div className="flex flex-col items-center pt-12.5">
            <div className="h-75 w-245 flex justify-start flex-row">
                <img 
                src="https://framerusercontent.com/images/bk9AHiHCq4E8clUwZzXxMGcsr3c.webp?scale-down-to=2048" alt="clube do livro valete" 
                className="w-full h-full"/>
                <div className="pl-12.5 pt-15 absolute">
                    <h1 className="text-[90px]/[0.9em] font-bold">Clube do<br/>Livro Valete</h1>
                </div>
            </div>
            <div className="w-215 p-[40px_20px_20px_20px]">
                <p className="text-[18px] mb-[1rem]">O Clube do Livro Valete é parte essencial de uma das grandes revoluções culturais que o Brasil viverá no século 21.</p>
                <p className="text-[18px] mb-[1rem]">Este clube entrega uma edição de colecionador de grandes clássicos por mês, na sua casa, com obras que convidam você a mergulhar nos pensamentos, visões e práticas que modelam a civilização em que vivemos, afiando seu olhar, expandindo seu repertório e aproximando-o da elite intelectual do país.</p>
                <p className="text-[18px] mb-[1rem]">A sua assinatura também torna você um investidor da editora da Valete, com selos que nasceram para serem o lar de futuros originais que se tornarão fenômenos e clássicos brasileiros.</p>
            </div>
            <div>
                <div className="absolute left-[calc(31.6667%-175px)]">
                    <img
                    src="https://framerusercontent.com/images/wH9i7y6lIJvzBijmHEMsPAFobcU.webp?scale-down-to=512"
                    alt="Clube do Livro Image"
                    className="w-87.5"
                    />
                </div>
                <div className="w-full h-30"></div> 
                <div className="flex flex-row items-center bg-[#ffe] w-dvw">
                    <div className="flex flex-col items-center w-[50%] p-5"></div>
                    <div className="flex flex-col items-start p-[25px_15px] w-112.5">
                        <div className="text-black text[22px] font-semibold mb-2.5">
                            Você quer entender melhor como se tornar parte deste movimento cultural?
                        </div>
                        <div className="mt-2.5 bg-[#cc0000] text-white border-none p-[15px_20px] rounded-[8px] cursor-pointer hover:bg-[#b30000]">
                            <a className="text-white font-semibold text-[18px]" href="https://clube.valete.org.br/" target="_blank" rel="noopener noreferrer">
                                Conheça melhor o Clube do Livro Valete
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}