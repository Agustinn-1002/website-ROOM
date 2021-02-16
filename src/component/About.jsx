import React from 'react'
import {
    AboutContainer,
    ImageOne,
    InfoAbout,
    ImageTwo
} from '../styled/About'
import imageAboutOne from '../images/image-about-dark.jpg'
import imageAboutTwo from '../images/image-about-light.jpg'

const About = () => {
    return (
        <AboutContainer>
            <ImageOne src={imageAboutOne} />
            <InfoAbout>
                <h2>About our furniture</h2>
                <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
            </InfoAbout>
            <ImageTwo src={imageAboutTwo} />
        </AboutContainer>
    )
}

export default About