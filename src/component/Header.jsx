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
    const lenth = InfoImgSlider.length;         //traer valor cantidad de objetos en la data... (3)
    const numHeroSlider = lenth-1;              //restar un numero ya que el map() empieza desde el 0... length = (2)
    const [heroSlider , setHeroSlider] = useState(0)       //creamos variable para realizar el cambio de estado

    const leftArrow = () =>{
        setHeroSlider(heroSlider === 0? numHeroSlider : heroSlider - 1);  //restamos un numero en caso de que el num del estado no sea 0, si es 0 vulve a la cantidad de numHeroSlider..
    }
    const rigthArrow = () =>{
        setHeroSlider(heroSlider === numHeroSlider? 0 : heroSlider + 1);  //sumamos un numero en caso de que el num del estado no sea el mismo que la cantidad de numHeroSlider, si es asi vuelve a 0...
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