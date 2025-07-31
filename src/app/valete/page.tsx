import Newsletter from "@/components/Newsletter";

export default function valete() {
    return (
    <div className="flex justify-center items-center flex-col w-full h-full bg-[#f9f9f9]">
        <div className="flex flex-col items-center justify-center w-245 p-5">
            <div className="flex flex-row items-center w-full">
                <img
                    src="https://framerusercontent.com/images/wTomG2PjvAmrCgTVMV2sJUjslI.webp?scale-down-to=1024"
                    alt="Valete Banner"
                    className="w-[98%]"
                    />
                <h1 className="flex absolute text-[#cc0000] text-[80px] font-semibold ml-10">
                    Valete+
                </h1>
            </div>
            <div className="flex flex-col items-center justify-center w-[90%] pt-10 font-normal text-[14px]">
                <p className="pb-5 text-[18px]">
                    O Valete Plus é um ecossistema digital criado para reunir as melhores mentes e oferecer uma jornada íntima e transformadora, combinando conhecimento, cultura e aprendizado.
                </p>
                <p className="pb-5 text-[18px]">
                    Além de uma vasta biblioteca de conteúdo, com dossiês, documentários, filmes e cursos das áreas mais importantes para sua formação intelectual e cultural, essa plataforma oferece acesso aos bastidores exclusivos do Movimento Brasil Livre e disponibiliza uma rede social integrada, além de diversos recursos que serão lançados ao longo do tempo para conectar você a pessoas que pensam de forma semelhante e a criadores de conteúdo que você admira.
                </p>
                <p className="pb-5 text-[18px]">
                    Além da tecnologia, você pode vivenciar a experiência premium da Valete, tornando-se assinante da revista física de política e cultura que mais cresce no país. Cada publicação discute os principais temas do passado, presente e futuro, com milhares de edições vendidas e distribuídas em bancas e livrarias de todo o Brasil.
                </p>
            </div> 
        </div>
        <div>
            <div className="absolute left-[calc(31.6667%-175px)]">
                    <img
                    src="https://framerusercontent.com/images/P8XMF7jC9QtCltCf8Yv3GcefUM.webp?scale-down-to=512"
                    alt="Valete Image"
                    className="w-87.5"
                    />
                </div>
            <div className="w-full h-25"></div> 
            <div className="flex flex-row items-center bg-black w-dvw h-min">
                <div className="flex flex-col items-center w-[50%] p-5"></div>
                <div className="flex flex-col items-start p-[25px_15px] w-112.5">
                    <div className="text-white text-[22px]/[1.2em] font-semibold mb-2.5">
                    Você quer entender melhor como viver essa experiência intelectual?
                    </div>
                    <div className="mt-2.5 bg-[#cc0000] text-white border-0 p-[15px_20px] rounded-[10px] cursor-pointer">
                        <a className="text-white font-semibold" href="https://valete.org.br/" target="_blank" rel="noopener noreferrer">
                            Conheça melhor o Valete+
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Newsletter/>
    </div>
    );
}