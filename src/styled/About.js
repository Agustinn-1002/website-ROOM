import styled from 'styled-components'

const mobile = '375';
const tablet = '1000';

export const AboutContainer = styled.div`
    display: flex;
    justify-content:space-between;
@media(max-width:${tablet}px){
    flex-direction:column;
}
@media(max-width:${mobile}px){
    flex-direction:column;
}
`;

export const ImageOne = styled.img`
    max-width:400px;

@media(max-width:${tablet}px){
   
}    
`;
export const InfoAbout = styled.div`
    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction:column;
    padding:3rem 50px;
    
    h2{
        text-transform:uppercase;
        font-size:1rem;
        letter-spacing:4px;
        margin-bottom:-0.1rem;
    }
    p{
        color:#A0A0A0;
        line-height:1.5rem;
        font-size:0.9rem;
    }
@media(max-width:${mobile}px){
    margin:20px 0;
    padding:3rem 40px;
}
`;
export const ImageTwo = styled.img`
    max-width:420px;
@media(max-width:${tablet}px){
    
}
`;