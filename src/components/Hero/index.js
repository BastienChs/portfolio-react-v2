import './style.css';
import Lottie from "lottie-react";
import animationData from '../../assets/lottie/ai-assistant-animation.json'
import React, {useEffect, useState} from 'react'
import Typed from 'typed.js';
import 'animate.css'

const Hero = () => {

    const [buttonsHero, setButtonsHero] = useState(false);
    const [introHero, setIntroHero] = useState(false);
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);


    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Hi I\'m <strong>Bastien</strong> <br/> I\'m a <strong>Fullstack developer</strong>'],
            typeSpeed: 60,
            onComplete: (self) => {
                setButtonsHero(true);
                setIntroHero(true);
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

    useEffect(() => {
        if(introHero){
            let paragraph = document.querySelector('#paragraph-introduction');
            paragraph.classList.remove('hidden');
            paragraph.classList.add('animate__fadeInUp');
        }
    }, [introHero])

    const onClickNavElem = (e) => {
        e.preventDefault()
        let sectionId = e.target.getAttribute('href')
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div id={'hero-section'}>
            <nav id={'nav-hero'} className={'pt-5 flex flex-row '}>
                <ul id={'brand'} className={'basis-1/2'}>
                    <li><strong>BCH</strong></li>
                </ul>
                <ul id={'anchors'} className={'basis-1/2 flex justify-end items-center'}>
                    <li className={'inline-block ml-2 mr-2'} onClick={onClickNavElem}><a href="#about-section">About</a></li>
                    <li className={'inline-block ml-2 mr-2'} onClick={onClickNavElem}><a href="#works-section">Works</a></li>
                    <li className={'inline-block ml-2 mr-2'} onClick={onClickNavElem}><a href="#experiences-section">Experiences</a></li>
                    <li className={'inline-block ml-2 mr-5'} onClick={onClickNavElem}><a href="#contact-section">Contact</a></li>
                </ul>
            </nav>
            <div id={'hero-content'}>
                <div id={'hero-animation'}>
                    <Lottie animationData={animationData} className={'laptop-animation'} loop={true} height={'80px'} width={'80px'} alt={'Credit to JNTKWRKS'}/>
                </div>
                <div id={'hero-text'}>
                    <h1 className={'text-white font-bold text-6xl'}><span ref={el}/></h1>
                    <p id={'paragraph-introduction'} className={'text-white pt-5 text-center text-xl animate__animated hidden'}>I'm passionate about technologies and I'm currently exploring the fascinating world of AI.</p>
                </div>
                <div id={'hero-call-to-action'}>
                    <button id={'left-btn'} className={"transition ease-in-out duration-300 py-2 px-3 mr-1 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 focus:outline-none hover:bg-cyan-500 hover:shadow-cyan-500/50 hidden btn-call-to-action"} anchor={'#'}>My works</button>
                    <button id={'right-btn'} className={'transition ease-in-out duration-300 py-2 px-3 ml-1 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 focus:outline-none hover:bg-cyan-500 hover:shadow-cyan-500/50 hidden btn-call-to-action'} anchor={'#'}>Contact me</button>
                </div>
            </div>
        </div>
    );
}
export default Hero;
