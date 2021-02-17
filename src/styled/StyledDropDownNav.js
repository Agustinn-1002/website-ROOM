import styled from 'styled-components'
import CloseMenuNav from '../images/icon-close.svg'

const mobile_L = '425';
const mobile_M = '300';

export const NavMoble = styled.div`
    display:none;

@media(max-width:${mobile_L}px){
    margin-top:${({dropDown})=>dropDown?'0':'-110px'};
    display:flex;
    align-items:center;
    transition:all 0.3s;
    justify-content:space-between;
    position:absolute;
    width:100%;
    height:110px;
    background:#fff;
    color:#fff;
    z-index:1000000000;
}
`;
export const ColorNav = styled.div`    
    transition:all 0.3s;
    top:${({dropDown})=>dropDown?'0':'-100%'};
    opacity:${({dropDown})=>dropDown?'.55':'0'};
    z-index:100000;
    position:absolute;
    width:100%;
    height:100%;
    background:#000;
`

export const CloseMenuMobile = styled.div`
    display:none;
@media(max-width:${mobile_L}px){
    display:block;
    background-image:url(${CloseMenuNav});
    background-repeat:none;
    background-position:center;
    background-size:cover;
    height:15px;
    width:20px;
    margin-left:2rem
}
`;
export const LinksMenus = styled.a`
 display:none;
 @media(max-width:${mobile_L}px){
    display:inline;
    text-decoration:none;
    font-size:0.9rem;
    color:#000;
    margin-right:2rem
}; 
@media(max-width:${mobile_M}px){
    font-size:0.8rem;
    margin-right:1.3rem
}
`;