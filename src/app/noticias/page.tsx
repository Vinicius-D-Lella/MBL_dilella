import NewsCard from "@/components/NewsCard";
import "./index.css";
import NewsRoll from "@/components/NewsRoll";

export default function noticias() {
    return (
        <div className="noticias-container">
            <h1>Notícias</h1>

            <div className="noticias-list">
                <NewsRoll />  
            </div>

    </div>
    );
}