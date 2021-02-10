import styled from 'styled-components';
import ArrowRigth from '../images/icon-arrow.svg';

const mobile = '375';

export const ImagenData = styled.div`
    display:flex;
@media(max-width:${mobile}px){
    flex-direction:column;
} 
`;
export const ImagenShop = styled.div`
    height:480px;
    width:800px;
    background-image:url(${props => props.desktop});
    background-repeat:none;
    background-size:cover;
    background-position:center;
    
@media(max-width:${mobile}px){
    background-image:url(${props => props.mobile});
    height:360px;
    width:375px;
};
`;
export const InfoImg = styled.div`
    width:380px;
    height:480px;
    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction:column;
    padding:0 90px;

@media(max-width:${mobile}px){
    width:375px;
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
`

