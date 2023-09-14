import './style.scss'


const menuItems = ['About', 'Contact', 'Blog']

export const Menu = () => {
    const navItems = menuItems.map(item => 
        <li><a href="#">{item}</a></li>
    )

    return <div className="Menu">
        <nav>
            {navItems}
        </nav>
    </div>;

}

export default Menu;
