import React from 'react'
import {
    InfoImg,
    ImagenData,
    TituloImg,
    ButtonShop,
    ImagenShop,
    Info,
    Arrow
} from '../styled/HeaderStyled';
import { InfoImgSlider } from '../data/ImagenesDataSlider';

const Header = () => {
    return ( 
        <div style={{display:'flex'}}>
            {InfoImgSlider.map((items,index)=>(
                <ImagenData key={index}>
                        <ImagenShop mobile={items.imageMobile} desktop={items.imageDesktop}></ImagenShop>
                    <InfoImg>                               
                        <TituloImg>{items.title}</TituloImg>
                        <Info>{items.info}</Info>
                        <ButtonShop>SHOP NOW<Arrow></Arrow></ButtonShop>
                    </InfoImg>
                </ImagenData>
            ))}

        </div>
     );
}
 
export default Header;