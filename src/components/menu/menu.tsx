import { Link, useLocation, useNavigate } from 'react-router-dom'
import './style.scss'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'


const menuItems = [
    ['Home', '/'],
    ['About','/about'],
    ['Projects','/#projects'],
    ['Awards','/#awards'],
    ['Contact','/contact']
];

export const Menu = () => {
    const menuRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLImageElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const iconRef = useRef<SVGSVGElement>(null);
    const hamburgerRef = useRef<HTMLButtonElement>(null)
    const { state: locationState } = useLocation()

    const [isMenuOpen, setIsMenuOpen] = useState(locationState?.menuState ?? false)

    const navigate = useNavigate();

    const [scrollPosition, setScrollPosition] = useState(0)

    console.log(`isMenuOpen state: ${isMenuOpen}`)

    useEffect(() => {
        const nav = navRef.current

        if (nav) {
            isMenuOpen ? nav.style.left = '0%' : nav.style.left = '-100%'
        }

    }, [isMenuOpen, locationState])

    const handleScroll = () => {
        const menu = menuRef.current
        const avatar = avatarRef.current
        const nav = navRef.current

        setScrollPosition(Math.round(window.scrollY))
                
        if (menu && avatar && nav) {

            if (scrollPosition >= 40 && screen.width > 840) {
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

    const linkAction = (e: MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault()
        setIsMenuOpen(false)
        navigate(link)
    }

    const navItems = menuItems.map( (item, index) => 
        <li key={index}>
            <Link 
                onClick={(e) => linkAction(e, item[1].toLocaleLowerCase())}
                to={item[1].toLocaleLowerCase()}
                state={{
                    menuState: false
                }}
            >{item[0]}</Link>
        </li>
    )

    return (
        <div className="Menu" ref={menuRef}>
            <Link id="avatar" to="/" state={{
                menuState: false
            }}><img src='src/assets/khalil.png'  ref={avatarRef}/></Link>
            <nav ref={navRef}>
                {navItems}
            </nav>
            <button ref={hamburgerRef} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <FontAwesomeIcon ref={iconRef} icon={isMenuOpen ? faX : faBars} />
            </button>
        </div>
    )

}

export default Menu;
