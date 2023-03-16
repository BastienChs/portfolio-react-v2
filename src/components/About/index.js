import './style.css'
import profile_pic from '../../assets/img/bastien_chies.jpg'
import {useEffect, useState} from "react";
import 'animate.css'
import SkillsStars from "./SkillsStars";
import about from "../../datasources/about.json";

const About = () => {
    const [indexToDisplay, setIndexToDisplay] = useState(0)
    useEffect(() => {
        let textToDisplay = document.querySelectorAll('#global-info .info-text')
        textToDisplay.forEach((el) => {
            if(el !== textToDisplay[indexToDisplay])
                el.classList.remove('animate__animated', 'animate__fadeInRight')
                el.classList.add('animate__animated', 'animate__fadeOutLeft')
        });
        textToDisplay[indexToDisplay].classList.remove('animate__fadeOutLeft')
        textToDisplay[indexToDisplay].classList.add('animate__fadeInRight')
    }, [indexToDisplay])


    const onClickInfoCategory = (e) => {
        let categories = document.querySelectorAll('#global-info-categories li')
        categories.forEach((category) => {
            category.classList.remove('selected')
        });
        e.target.classList.add('selected')
        setIndexToDisplay(e.target.getAttribute('keyindex'))
    }

    return (
        <div id={'about-section'} className={'grid grid-cols-1'}>
            {/*We'll have three part, first the profile pic, then global info (short introduction, hobbies, etc), then skills*/}
            {/*Profile pic*/}
            <div id={'profile-pic'}>
                <img src={profile_pic} alt="Bastien Chies" className={'profile-pic circle'}/>
            </div>

            <div id={'info-container'} className={'w-1/2'}>
                {/*Global information*/}
                <div id={'global-info'} className={'p-5'}>
                    <h3 className={'text-center font-oswald text-6xl mt-2 text-gray-200'}>- About me</h3>
                    <ul id={'global-info-categories'} className={'text-gray-200 pl-2 pr-2'}>
                        <li className={'selected pl-2 pr-2'} onClick={onClickInfoCategory} keyindex={0}>Info</li>
                        <li className={'pl-2 pr-2'} onClick={onClickInfoCategory} keyindex={1}>Hobbies</li>
                        <li className={'pl-2 pr-2'} onClick={onClickInfoCategory} keyindex={2}>Fun facts</li>
                    </ul>
                    <div id={'global-info-content'} className={'h-40 relative'}>
                        <p className={'info-text text-gray-300 absolute'}>Hello, I'm Bastien! I work as a <span className={'keyword'}>software engineer for five years</span> now,
                            more than just a job, it's a passion to me. I love solving problems and learning how things work, being challenged whether by time,
                            technology or business complexity. I like to keep an eye on the IT innovations and topics, for this I like to use tools such as Medium,
                            Twitter or even Google news. As for my soft skills, I'm <span className={'keyword'}>empathic</span>, I like helping others when they're in need,
                                I'm <span className={'keyword'}>patient</span> and <span className={'keyword'}>organized</span>, I like to work in team and being able to learn from others and I'm very curious.</p>
                        <p className={'info-text text-gray-300 absolute'}>First things to know, I'm <span className={'keyword'}>huge consumer of music</span>, Spotify is my best friend,
                            I listen to music every day. On my free time, I like to <span className={'keyword'}>read books</span>,
                            I'm really interested by mythology and especially the Norse one.
                            I also like to <span className={'keyword'}>write little stories</span>, a good way for me to express my creativity.
                            I like to <span className={'keyword'}>play video games</span> too and I'm also a huge consumer of Netflix, Amazon Prime Video and Disney+.
                            I also like to <span className={'keyword'}>go out with my friends</span>, I like to go to the movies, to the bar or to the restaurant.</p>
                        <p className={'info-text text-gray-300 absolute'}>I never took a plane before 2022, this year I took it three times, once for going to Lisboa, one for doing a parachute jump and one for going to the Canada.</p>
                    </div>
                </div>

                {/* Skills */}
                <div id={'skills'} className={'p-5 grid grid-cols-2'}>
                    <div>
                        <h4 className={'text-left font-oswald text-gray-200 text-2xl mt-2 pb-5 font-bold text-center'}>Skills</h4>
                        <table>
                            <tbody>
                                {/*loop over skills*/}
                                {Object.values(about.skills).map((skill, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className={'text-gray-300'}>{skill.label}</td>
                                            <SkillsStars nbOfStars={skill.value}/>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h4 className={'text-left font-oswald text-gray-200 text-2xl mt-2 pb-5 font-bold text-center'}>Tools</h4>
                        <ul className={'columns-2'}>
                                {/*Loop over tools*/}
                                {Object.values(about.tools).map((tool, index) => {
                                    return (
                                        <li key={index} className={'text-gray-300'}>{tool}</li>
                                    )
                                })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
