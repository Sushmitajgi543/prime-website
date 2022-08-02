import React from 'react';
import { Header } from '../Header/Header';
import"../../Assest/Scss/About/index.scss"
import { Footer } from '../Footer/Footer';
import { FirstFooter } from '../Footer/FirstFooter';
import { FirstSection } from './FirstSection';
import { SecondSection } from './SecondSection';
import { ThirdSection } from './ThirdSection';
import { FourthSection } from './FourthSection';
import { FifthSection } from './FifthSection';
export const About = () => {
    return(
        <>
        <Header/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <FirstFooter/>
        <Footer/>
        </>
    )
}
