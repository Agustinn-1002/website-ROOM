import styled from 'styled-components';
import IconLogo from '../images/logo.svg';
import HamburgerLogo from '../images/icon-hamburger.svg';

const mobile = '375'

export const Nav = styled.nav`
    position:absolute;
    display:flex;
    align-items:center;
    width:55%;
    height:100px;
    justify-content:start;
@media (max-width: ${mobile}px){
    width:375px;
    justify-content:space-evenly;
}
`;
export const Logo = styled.img.attrs({ src:IconLogo})`
    padding-left:50px;
    margin-right:40px;
    /* transform:translate(-100%,0); */

@media (max-width: ${mobile}px){
    padding-left:0;
    transform:translate(20%,0); 
}
`;

export const Hamburger = styled.div`

    display:none;

@media(max-width:${mobile}px){
    display:block;
    background-image:url('${HamburgerLogo}');
    padding:0;
    margin:0;
    background-repeat:none;
    background-size:cover;
    background-position:center;
    height:20px;
    width:20px;
    /* transform:translate(-100%,10%);  */
}
`;
export const NavLink = styled.a`
    text-decoration:none;
    color:#000;
    margin:0 1rem;
    color:#fff;
    font-size:1rem;
    padding-bottom:10px;
    transition:all 1s;
    &:hover{
        border-bottom:1px solid #fff;
    }


@media (max-width: ${mobile}px){
    display:none;
} 
`;