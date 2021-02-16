import React from 'react'
import {
    NavMoble,
    CloseMenuMobile,
    LinksMenus,
    ColorNav
} from '../styled/StyledDropDownNav'
import {navLinks} from '../data/dataNavsLinks'

const DropDownNav = (props) => {
    return ( 
        <div>
            <NavMoble onClick={() => props.dropNav()} dropDown={props.dropDown}>
                <div>
                    <CloseMenuMobile onClick={() => props.dropNav()}></CloseMenuMobile>
                </div>
                <div>
                    {navLinks.map((item, index)=>
                        <LinksMenus key={index} href={'#'+index}>{item.title}</LinksMenus>
                    )}
                </div>
            </NavMoble>
            <ColorNav onClick={() => props.dropNav()} dropDown={props.dropDown}/>
        </div>

     );
}
 
export default DropDownNav;