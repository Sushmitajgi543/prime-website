import React from 'react';
import { FirstContainer } from './FirstContainer';
import "../../Assest/Scss/Home/Index.scss"
import { SecondContainer } from './SecondContainer';
import { ThirdSection } from './ThirdSection';
import { FourthSection } from './FourthSection';
import { FifthSection } from './FifthSection';
import { SixthSection } from './SixthSection';
import { Footer } from '../Footer/Footer';
import { FirstFooter } from '../Footer/FirstFooter';
export const Index = () => {
    return (
        <div>
            <FirstContainer/>
            <SecondContainer/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>
            <SixthSection/>
            <FirstFooter/>
            <Footer/>
        </div>
    );
    }