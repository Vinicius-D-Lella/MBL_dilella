import EventCard from '@/components/EventCard';
import './index.css';

const eventos = [
  {
    title: "MBL na Estrada - Minas Gerais",
    date: "19 de jul. de 2025",
    img: "https://framerusercontent.com/images/U6TGnKdjH8Cbh3sWQCurCc0TQj0.jpg?scale-down-to=512",
    rua:"R. Álvares Maciel, 628",
    regiao:"Santa Efigênia - Belo Horizonte/MG",
    cep:"CEP 30150-250",
    horario:"14h as 19h",
    link:"https://www.eventbrite.com.br/e/mbl-na-estrada-minas-gerais-tickets-1320494146539",
    nomeLocal:"Centro Universitário Dom Helder",
  },
    {
    title: "Forúm Nacional de Liberdade do Humor",
    date: "7 de ago. de 2025",
    img: "https://framerusercontent.com/images/wVGGTCi2xXPOfBv42xBILO6J24.jpg?scale-down-to=512",
    rua:"Av. Pedro Álvares Cabral, 201",
    regiao:"Ibirapuera - São Paulo/SP",
    cep:"CEP 04097-900",
    horario:"19h00 às 20h30",
    link:"https://www.eventbrite.com.br/e/forum-nacional-de-liberdade-do-humor-tickets-1442470651549",
  },
    {
    title: "Sunset MBL CEARÁ na praia!",
    date: "9 de ago. de 2025",
    img: "https://framerusercontent.com/images/sfjk7rFxdpQs55WmisVjGwZjk.jpg?scale-down-to=512",
    rua:"R. da Praia Cumbuco, 55",
    regiao:"Cumbuco - Caucaia/CE",
    cep:"CEP 61619-241",
    horario:"15h30 às 19h",
    link:"https://www.eventbrite.com.br/e/sunset-mbl-ceara-na-praia-tickets-1486517637269",
  },
    {
    title: "MBL na Estrada - Rio de Janeiro",
    date: "16 de ago. de 2025",
    img: "https://framerusercontent.com/images/jjKl6NqxZLaHKigaRW1McgiZWo.jpg?scale-down-to=512",
    rua:"Rua Riachuelo, 124",
    regiao:"Centro - Rio de Janeiro/RJ",
    cep:"CEP 20230-014",
    horario:"14h às 19h",
    link:"https://www.eventbrite.com.br/e/mbl-na-estrada-rio-de-janeiro-tickets-1355035370269",
  },
    {
    title: "MBL na Estrada - Rio Grande do Norte",
    date: "30 de ago. de 2025",
    img: "https://framerusercontent.com/images/cy6QV0TvUmZIvEVdC1beAIZadz4.jpg?scale-down-to=512",
    rua:"Av. Engenheiro Roberto Freire, 3800",
    regiao:"Centro - Natal/RN",
    cep:"CEP 59078-600",
    horario:"14h às 19h",
    link:"https://www.eventbrite.com.br/e/mbl-na-estrada-rio-grande-do-norte-tickets-1289767071029",
  },
    {
    title: "Festival MBL",
    date: "29 de nov. de 2025",
    img: "https://framerusercontent.com/images/xmD5UIfgIR66hNvskI8tuJKUKZg.webp?scale-down-to=512",
    rua:"Av. Henry Ford, 511",
    regiao:"Parque da Mooca - São Paulo/SP",
    cep:"CEP 03109-001",
    horario:"10h às 22h",
    link:"https://festival.mbl.org.br/?_gl=1*1awy7oz*_gcl_au*MTQzNTE2NzQ1LjE3NDk3NDM4MDc.",
    nomeLocal:"Komplexo Tempo",
  },
  

]

export default function Eventos() {
  return (
        <div className="eventos-container">
          <div className='title-container'>
            <h1>Eventos</h1>
          </div>
            {
            eventos.map((evento,index) => ( 
              <EventCard
              key={index}
              title={evento.title}
              date={evento.date}
              img={evento.img}
              rua={evento.rua}
              regiao={evento.regiao}
              cep={evento.cep}
              horario={evento.horario}
              link={evento.link}
              nomeLocal={evento.nomeLocal}/>
          ))
            }
        </div>
    );
}