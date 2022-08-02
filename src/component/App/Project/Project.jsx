import React from 'react';
import { Footer } from '../Footer/Footer';
import {FirstFooter} from '../Footer/FirstFooter';
import { Header } from '../Header/Header';
import "../../Assest/Scss/Project/index.scss";
import { FirstSection } from './FirstSection';
import { SecondSection } from './SecondSection';
import { ThirdSection } from './ThirdSection';
import { FourthSection } from './FourthSection';

export
const Project = () => {
    return(
        <>
        <Header/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FirstFooter/>
        <Footer/>
        </>
        
    )
}