import React from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import "../../Assest/Scss/Contact/index.scss";
import { FirstSection } from './FirstSection';
import { SecondSection } from './SecondSection';
import { ThirdSection } from './ThirdSection';
export const Contact = () => {
    return(
        <>
        <Header/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <Footer/>
        </>
        
    )
}