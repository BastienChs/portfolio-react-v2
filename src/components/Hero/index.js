import './style.css';
import Lottie from "lottie-react";
import animationData from '../../assets/lottie/ai-assistant-animation.json'
import React, {useEffect, useState} from 'react'
import Typed from 'typed.js';
const Hero = () => {

    const [buttonsHero, setButtonsHero] = useState(false);
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Hi I\'m <strong>Bastien</strong> <br/> I\'m a <strong>Fullstack developer</strong>'],
            typeSpeed: 60,
            onComplete: (self) => {
                console.log('onComplete');
                console.log(self);
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
                btn.classList.remove('fade-out');
                btn.classList.add('fade-in');
            })
        }
    }, [buttonsHero])

    return (
        <div id={'hero-section'}>
            <nav id={'nav-hero'}>
                <ul id={'brand'}>
                    <li><strong>BCH</strong></li>
                </ul>
                <ul id={'anchors'}>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Experiences</a></li>
                    <li><a href="#">Contact</a></li>
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
                    <a className={'btn-call-to-action fade-out'} href={'#'}>My work</a>
                    <a className={'btn-call-to-action fade-out'} href={'#'}>Contact me</a>
                </div>
            </div>
        </div>
    );
}
export default Hero;
