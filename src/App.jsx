import React from 'react';
import Top from './assets/components/Top';
import Banner from './assets/components/Banner';
import WhoWeAre from './assets/components/WhoWeAre';
import Services from './assets/components/Services';
import Baseboard from './assets/components/Baseboard';

function App () {

    return (

        <div className = 'App'>
            <Top/>
            <Banner/>
            <WhoWeAre/>
            <Services/>
            <Baseboard/>
        </div>
    );
};
export default App;