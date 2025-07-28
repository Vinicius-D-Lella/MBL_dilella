
export interface NavItemInterface{
    label: string;
    url: string;
    isActive?: boolean;
}

// Esse target ai embaixo foi o copilot que recomendou, meritos dele, eu ia fazer um boolean na interface e fazer um if ternario, mas a ia foi mais inteligente que eu
export default function NavItem(props: NavItemInterface) {
    return (
                    <li className="w-min whitespace-nowrap">
                        <a
                        href={props.url} 
                        target={props.url.startsWith('http') ? '_blank' : '_self'}
                        className={`no-underline text-[16px] tracking-tight w-min hover:text-[#47d1bc] hover:border-b-[#47d1bc] hover:border-b-[2px] hover:border-solid  ${props.isActive ? 'text-[#47d1bc] border-b-[#47d1bc] border-b-[2px] border-solid' : 'text-[#666]'}`}>
                        {props.label}</a>
                    </li>
    );


}