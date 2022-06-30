import React from 'react'
import { GoLocation } from "react-icons/go";

const About = ({company}) => {
  return (
    <div className='about'>
        <h2>About</h2>
        <p>{company.Description}</p>
        <div>
            <div>
                <GoLocation/>
                <p>Address</p>
            </div>
            <p style={{textAlign: "end"}}>{company.Address}</p>
        </div>
    </div>
  )
}

export default About