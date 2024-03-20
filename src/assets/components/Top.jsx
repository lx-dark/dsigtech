import "./../../assets/css/Top.css";
import React, { useState } from 'react';
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";
import Baseboard from "./Baseboard";

function Top() {

    const [currentSection, setCurrentSection] = useState('home');

    const handleCurrentSection = (section) => {
        setCurrentSection(section);
    };

    const renderSection = () => {

        switch (currentSection) {
            case 'whoweare':
                return <WhoWeAre />;
            case 'services':
                return <Services />;
            case 'baseboard':
                return <Baseboard />;
            case 'home':
            default:
                return null;
        };
    };

    return (

        <header>

            <img src='/img/igtech-logo-white.png' alt="toplogoigtech" className='toplogoigtech' />

            <nav>
                <ul>
                    <li onClick = {() => handleCurrentSection('home')} className='menu-button'>HOME</li>
                    <li onClick = {() => handleCurrentSection('whoweare')} className='menu-button'>QUEM SOMOS</li>
                    <li onClick = {() => handleCurrentSection('services')} className='menu-button'>SERVIÇOS</li>
                    <li onClick = {() => handleCurrentSection('baseboard')} className='menu-button'>CONTATO</li>
                </ul>
            </nav>

            <div className = {`section active`}>
                {renderSection()}
            </div>
        </header>
    );
};
export default Top;