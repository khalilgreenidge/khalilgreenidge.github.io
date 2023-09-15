import { Link } from 'react-router-dom'
import './style.scss'


const menuItems = ['About', 'Projects', 'Awards', 'Contact', 'Blog']

export const Menu = () => {
    const navItems = menuItems.map( (item, index) => 
        <li key={index}><Link to={item.toLocaleLowerCase()}>{item}</Link></li>
    )

    return <div className="Menu">
        <nav>
            {navItems}
        </nav>
    </div>;

}

export default Menu;
