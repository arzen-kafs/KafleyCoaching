
import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../src/images/main2.svg'

import Common from './Common'

const Home = () => {
    return (
        <>
           <Common name="Come and Learn From the" 
           imgsrc={web}
           btnName="Get Started"
           visit="/services"/>
        </>
    )
}

export default Home;
