import { Link } from 'react-router-dom'
import './style.scss'
import { SetStateAction, useEffect, useRef, useState } from 'react'


const menuItems = ['About', 'Projects', 'Awards', 'Contact', 'Blog']

export const Menu = () => {
    const menuRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLImageElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0)

    const handleScroll = () => {
        const menu = menuRef.current
        const avatar = avatarRef.current
        const nav = navRef.current

        setScrollPosition(Math.round(window.scrollY))
                
        if (menu && avatar && nav) {

            if (scrollPosition >= 40 ) {
                menu.style.height = "60px";
                nav.style.lineHeight = '60px';
                menu.style.fontSize = '1.2em';
                //console.log(`scroll height: ${scrollPosition} > 40`)
            } else {
                menu.style.height = "100px";
                nav.style.lineHeight = '100px';
                menu.style.fontSize = '1.5em';
                //console.log(`scroll height ${scrollPosition} < 40`)
            }
        }     
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }
    useEffect(handleScroll, [scrollPosition]);

    const navItems = menuItems.map( (item, index) => 
        <li key={index}><Link to={item.toLocaleLowerCase()}>{item}</Link></li>
    )

    return <div className="Menu" ref={menuRef}>
        <nav ref={navRef}>
            <Link id="avatar" to="/"><img src='src/assets/khalil.png'  ref={avatarRef}/></Link>
            {navItems}
        </nav>
    </div>;

}

export default Menu;
