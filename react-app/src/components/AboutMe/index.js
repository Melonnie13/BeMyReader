import React from 'react';
import './AboutMe.css';

const AboutMe = () =>{
    return (
        <div id='about-me-container'>
            <h2 id='about-me-intro'>Developed By: Melonnie Hicks with accessibility in mind. Font and color choices made with consideration for dyslexic and colorblind user experiences.</h2>
            <div id='about-me-logo'>
            <img id='my-avi' src="https://avatars.githubusercontent.com/u/76574880?v=4" alt="Melonnie" />
            <div id='about-me-links-container'>
                <div>
                    <label htmlFor='github-link'></label>
                    <a className='about-me-links' name='github-link' href="https://github.com/Melonnie13"><i className="fab fa-github fa-2x"></i></a>
                </div>
                <div>
                    <label htmlFor='linkedIn-link'></label>
                    <a className='about-me-links' name='linkedIn-link' href="https://www.linkedin.com/in/melonniehicks/"> <i className="fab fa-linkedin fa-2x"></i></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AboutMe;
