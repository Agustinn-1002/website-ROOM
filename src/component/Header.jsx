import React,{useState} from 'react'
import {
    PageHeader,
    InfoImg,
    ImagenData,
    TituloImg,
    ButtonShop,
    ImagenShop,
    Info,
    Arrow,
    SlideBtns,
    BtnArrowLeft,
    BtnArrowRight,
    ContainerBtnSlider
} from '../styled/HeaderStyled';
import { InfoImgSlider } from '../data/ImagenesDataSlider';

const Header = () => {

    const lenth = InfoImgSlider.length;

    const numHeroSlider = lenth-1;

    const [heroSlider , setHeroSlider] = useState((lenth - lenth))
    // console.log(heroSlider)
    const leftArrow = () =>{
        heroSlider === 0? setHeroSlider(numHeroSlider) : setHeroSlider(heroSlider - 1);  
    }
    const rigthArrow = () =>{
        heroSlider === numHeroSlider? setHeroSlider(0) : setHeroSlider(heroSlider + 1);
    }
    return ( 
            <PageHeader>
            {
                InfoImgSlider.map((items,index)=>{
                    return(
                            <ImagenData key={index}>
                                {index === heroSlider && (
                                    <>
                                        <ImagenShop mobile={items.imageMobile} desktop={items.imageDesktop}></ImagenShop>
                                        <InfoImg>                               
                                            <TituloImg>{items.title}</TituloImg>
                                            <Info>{items.info}</Info>
                                            <ButtonShop>SHOP NOW<Arrow></Arrow></ButtonShop>
                                            <SlideBtns>
                                                <ContainerBtnSlider onClick={leftArrow}>
                                                    <BtnArrowLeft />
                                                </ContainerBtnSlider>
                                                <ContainerBtnSlider onClick={rigthArrow} >
                                                    <BtnArrowRight />
                                                </ContainerBtnSlider>
                                            </SlideBtns>
                                        </InfoImg>
                                    </>
                                )}

                            </ImagenData>
                        )
            })}

            </PageHeader>
 
     );
}
 
export default Header;