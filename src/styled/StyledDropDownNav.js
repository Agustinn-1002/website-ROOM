import styled,{keyframes} from 'styled-components'
import CloseMenuNav from '../images/icon-close.svg'

const mobile_L = '375';
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
    z-index:1000000;
}
`;
export const ColorNav = styled.div`   
    margin-top:${({dropDown})=>dropDown?'0':'-1100px'}; 
    z-index:100000;
    transition:all 0.4s;
    position:absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.55);

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