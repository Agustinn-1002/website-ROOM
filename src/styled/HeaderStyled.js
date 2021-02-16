import styled,{css} from 'styled-components';
import ArrowRigth from '../images/icon-arrow.svg';
import BtnArrowSliderLeft from '../images/icon-angle-left.svg';
import BtnArrowSliderRight from '../images/icon-angle-right.svg';

const mobile = '375';
const tablet = '800';


export const PageHeader = styled.div`
    display:flex;
    overflow:hidden;
`;
export const ImagenData = styled.div`
    display:flex;
    width:100%;
@media(max-width:${mobile}px){
    flex-direction:column;
    width:100%;
} 
`;
export const ImagenShop = styled.div`
    position:relative;
    height:480px;
    background-image:url(${props => props.desktop});
    background-repeat:none;
    background-size:cover;
    background-position:center;
    width:550vh;
    
@media(max-width:${mobile}px){
    position:relative;
    background-image:url(${props => props.mobile});
    height:360px;
    width:375px;
};
`;
export const InfoImg = styled.div`
    position:relative;
    height:480px;
    width:1600px;
    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction:column;
    padding:0 90px;

@media(max-width:${mobile}px){
    position:relative;
    width:100%;
    height:300px;
    margin:20px 0;
    padding:0;
};
`;
export const TituloImg = styled.h2`
     font-size:1.8rem;

@media(max-width:${mobile}px){
    padding:0 40px;
};
`;
export const Info = styled.p`
    color:#A0A0A0;
    font-size:0.9rem;
    margin-bottom:30px;
    line-height:1.4rem;

@media(max-width:${mobile}px){
    font-size:0.92rem;
    margin-top:-5px;
    padding:0 40px;
};
`;
export const ButtonShop = styled.a`
    display:inline;
    height:30px;
    background:none;
    width:185px;
    letter-spacing:8px;
    font-size:0.6rem;
    cursor:pointer;

@media(max-width:${mobile}px){
    padding:0 40px;
    font-size:1rem;
};
&:hover{
    opacity:0.6;
};
`;
export const Arrow = styled.img.attrs({src:ArrowRigth})`
`;

const arrowsSlider = css`
    object-fit:contain;
    width:2rem;
    height:1.5rem;
    border:none;
    outline:none;
`
export const SlideBtns = styled.div`
    display:flex;
    position:absolute;
    bottom:0;
    left:0;


@media (max-width: ${tablet}px){
    right:0;
} 
@media(max-width:${mobile}px){    
    position:absolute;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    top:-399px;
}

`;
export const ContainerBtnSlider = styled.div`
    background:#000;
    padding:1.5rem 1.5rem;
    cursor:pointer;
    margin-right:-1px;
&:hover{
    background:#454545;
}
`
export const BtnArrowLeft = styled.img.attrs({src:BtnArrowSliderLeft})`
    ${arrowsSlider};
    padding-right:5px;
`;
export const BtnArrowRight = styled.img.attrs({src:BtnArrowSliderRight})`
    ${arrowsSlider}
    padding-left:5px;
`;
