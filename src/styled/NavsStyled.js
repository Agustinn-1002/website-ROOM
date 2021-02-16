import styled from 'styled-components';
import IconLogo from '../images/logo.svg';
import HamburgerLogo from '../images/icon-hamburger.svg';

const tablet = '800';
const mobile = '375';

export const Nav = styled.nav`
    position:absolute;
    display:flex;
    align-items:center;
    width:55%;
    z-index:100000000;
    height:100px;
    justify-content:start;

@media (max-width: ${tablet}px){
    top:5rem;
    left:5rem;
    align-items:start;
    flex-direction:column;
} 
@media (max-width: ${mobile}px){
    width:50%;
    left:2rem;
    flex-direction:row;
    justify-content:space-between;
}
`;
export const Logo = styled.img.attrs({ src:IconLogo})`
    padding-left:50px;
    margin-right:40px;
    /* transform:translate(-100%,0); */

@media (max-width: ${tablet}px){
    width:100px;
    padding-left:0;
    margin-bottom:40px;
} 
@media (max-width: ${mobile}px){
    margin:0;  
    width:auto;
    transform:translate(100%,0); 
}
`;

export const Hamburger = styled.div`

    display:none;

@media(max-width:${mobile}px){
    display:inline;
    background-image:url('${HamburgerLogo}');
    padding:0;
    margin:0;
    background-repeat:none;
    height:15px;
    width:20px;
}
`;
export const NavLink = styled.a`
    text-decoration:none;
    position:relative;
    color:#000;
    margin:0 1rem;
    color:#fff;
    font-size:1rem;
    transition:all 1s;
    padding-bottom:5px;
    &:hover{
        &:after{
            content:'';
            position:absolute;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width:15px;
            border-bottom:2px solid #fff;
        }
    }
@media (max-width: ${tablet}px){
    display:block;
    margin: 2rem 0;

} 
@media (max-width: ${mobile}px){

    display:none;
} 
`;