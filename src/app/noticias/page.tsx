import Newsletter from "@/components/Newsletter";
import NewsRoll from "@/components/NewsRoll";

export default function noticias() {
    return (
        <div className="flex flex-col gap-8 items-center justify-center">
            <h1 className="font-semibold text-4xl pt-5">Notícias</h1>

            <div className="flex flex-col gap-4">
                <NewsRoll />  
            </div>
        <Newsletter/>
    </div>
    
    );
}