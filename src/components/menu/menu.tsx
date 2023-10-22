import { Link } from 'react-router-dom'
import './style.scss'
import { useEffect, useRef } from 'react'


const menuItems = ['About', 'Projects', 'Awards', 'Contact', 'Blog']

export const Menu = () => {
    const menuRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLImageElement>(null);

    const handleScroll = () => {
        const menu = menuRef.current
        const avatar = avatarRef.current
                
        if (menu && avatar) {
            const nav = menu.querySelector('nav');

            if (window.scrollY > 40 ) {
                menu.style.height = "60px";
                nav ? nav.style.lineHeight = '60px': null;
                menu.style.fontSize = '1.2em';
                //console.log(`scroll height: ${window.scrollY} > 80`)
            } else {
                menu.style.height = "100px";
                nav ? nav.style.lineHeight = '100px': true;
                menu.style.fontSize = '1.5em';
                //console.log(`scroll height ${window.scrollY} < 80`)
            }
        }     

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }

    useEffect(handleScroll, [menuRef]);

    const navItems = menuItems.map( (item, index) => 
        <li key={index}><Link to={item.toLocaleLowerCase()}>{item}</Link></li>
    )

    return <div className="Menu" ref={menuRef}>
        <nav>
            <Link id="avatar" to="/"><img src='src/assets/khalil.png'  ref={avatarRef}/></Link>
            {navItems}
        </nav>
    </div>;

}

export default Menu;
