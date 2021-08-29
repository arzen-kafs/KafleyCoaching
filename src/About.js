import React from 'react'
import Common from './Common'
import web from '../src/images/main.svg'

const About = () => {
    return (
        <div>
             <Common
             name="We are the best Faculty" 
             imgsrc={web}
             btnName="Contact Us"
             visit="/contact"
             />
        </div>
    )
}

export default About
