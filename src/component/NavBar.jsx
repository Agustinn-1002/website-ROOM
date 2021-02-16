import React from 'react'
import {navLinks} from '../data/dataNavsLinks'
import {
    Nav, 
    NavLink,
    Logo,
    Hamburger,
} from '../styled/NavsStyled';
import DropDownNav from '../component/DropDownNav'

const Navbar = (props) => {
    return ( 
        <div>
            <DropDownNav dropDown={props.dropDown} dropNav={props.dropNav}></DropDownNav>
            <Nav>
                <Hamburger onClick={props.dropNav}></Hamburger>
                <Logo></Logo>
                <div>
                    {navLinks.map((items, index) => ( 
                        <NavLink key={index} href={items.route}>{items.title}</NavLink>
                    ))}
                </div>
            </Nav>
        </div>
     );
}
 
export default Navbar;