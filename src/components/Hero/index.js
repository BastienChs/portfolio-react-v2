import './style.css';
import Lottie from "lottie-react";
import animationData from '../../assets/lottie/ai-assistant-animation.json'
import React, {useEffect, useState} from 'react'
import Typed from 'typed.js';
import 'animate.css'

const Hero = () => {

    const [buttonsHero, setButtonsHero] = useState(false);
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Hi I\'m <strong>Bastien</strong> <br/> I\'m a <strong>Fullstack developer</strong>'],
            typeSpeed: 60,
            onComplete: (self) => {
                setButtonsHero(true);
            }
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        if(buttonsHero){
            let btns = document.querySelectorAll('.btn-call-to-action');
            btns.forEach((btn) => {
                if(btn.id === 'left-btn')
                    btn.classList.add('animate__animated', 'animate__fadeInLeft', 'inline-block');
                else
                    btn.classList.add('animate__animated', 'animate__fadeInRight', 'inline-block');
                btn.classList.remove('hidden');
            })
        }
    }, [buttonsHero])

    const onClickNavElem = (e) => {
        e.preventDefault()
        let sectionId = e.target.getAttribute('href')
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div id={'hero-section'}>
            <nav id={'nav-hero'}>
                <ul id={'brand'}>
                    <li><strong>BCH</strong></li>
                </ul>
                <ul id={'anchors'}>
                    <li onClick={onClickNavElem}><a href="#about-section">About</a></li>
                    <li onClick={onClickNavElem}><a href="#works-section">Works</a></li>
                    <li onClick={onClickNavElem}><a href="#experiences-section">Experiences</a></li>
                    <li onClick={onClickNavElem}><a href="#contact-section">Contact</a></li>
                </ul>
            </nav>
            <div id={'hero-content'}>
                <div id={'hero-animation'}>
                    <Lottie animationData={animationData} className={'laptop-animation'} loop={true} height={'80px'} width={'80px'} alt={'Credit to JNTKWRKS'}/>
                </div>
                <div id={'hero-text'}>
                    <h1><span ref={el}/></h1>
                </div>
                <div id={'hero-call-to-action'}>
                    <button id={'left-btn'} className={'btn-call-to-action hidden'} anchor={'#'}>My work</button>
                    <button id={'right-btn'} className={'btn-call-to-action hidden'} anchor={'#'}>Contact me</button>
                </div>
            </div>
        </div>
    );
}
export default Hero;
