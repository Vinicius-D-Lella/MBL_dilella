'use client';

import './index.css';



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
    <div className="news-card"
        onClick={() => {
            Link(props.url);
        }}
        >

        <div className="news-card-image">
            <img src={props.img} alt={props.alt} />
        </div>
    
        <div className="news-card-content">
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
            <div className="news-card-button">
                <a>
                    Leia mais
                </a>
            </div>
        </div>

    </div>

    )

}