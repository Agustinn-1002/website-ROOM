import React from 'react'
import {navLinks} from '../data/dataNavsLinks'
import {
    Nav, 
    NavLink,
    Logo,
    Hamburger,
} from '../styled/NavsStyled';

const Header = () => {
    return ( 
            <Nav>
                <Hamburger></Hamburger>
                <Logo></Logo>
                <div>
                    {navLinks.map((items, index) => ( 
                        <NavLink key={index} href={items.route}>{items.title}</NavLink>
                    ))}
                </div>
            </Nav>
     );
}
 
export default Header;