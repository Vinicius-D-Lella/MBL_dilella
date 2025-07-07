import "./index.css";

export interface NavItemInterface{
    label: string;
    url: string;
    isActive?: boolean;
}

// Esse target ai embaixo foi o copilot que recomendou, meritos dele, eu ia fazer um boolean na interface e fazer um if ternario, mas a ia foi mais inteligente que eu
export default function NavItem(props: NavItemInterface) {
    return (
                    <li className="nav-item">
                        <a
                        href={props.url} 
                        target={props.url.startsWith('http') ? '_blank' : '_self'}
                        className={`nav-link ${props.isActive ? 'active' : ''}`}>
                        {props.label}</a>
                    </li>
    );


}