import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () =>{
    return (
        <div>
            <h2>Developed By: Melonnie Hicks</h2>
            <div id='about-me-logo'>
            <img id='my-avi' src="https://avatars.githubusercontent.com/u/76574880?v=4" alt="Melonnie" />
            <div>
                <Link to="https://github.com/Melonnie13"><i className="fab fa-github"></i></Link>
            </div>
            <div>
                <Link to="https://www.linkedin.com/in/melonniehicks/"> <i className="fab fa-linkedin"></i></Link>
            </div>
            </div>
        </div>
    )
}

export default AboutMe;
