import experiences from '../../datasources/experiences.json'
import Tag from "../shared/Tag";
import React, {useEffect, useRef} from "react";
import Typed from "typed.js";

import {ClockIcon, MapPinIcon} from "@heroicons/react/24/outline";

const Experiences = () => {

    const experiencesHasLoaded = useRef(false)
    // const [experiencesList, setExperiencesList] = useState([])
    const writingChapter = React.useRef(null);

    useEffect(() => {
        experiencesHasLoaded.current = true
    }, [experiencesHasLoaded])

    useEffect(() => {
        const typed = new Typed(writingChapter.current, {
            strings: ['Collecting stardust...', 'Collecting unicorn hair...', 'Collecting dragon scales...', 'Collecting phoenix feathers...', 'Collecting mermaid tears...', 'Collecting fairy dust...'],
            typeSpeed: 60,
            loop: true,
            onComplete: (self) => {
            }
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    const displaySkillsInvolved = (skillCategories) => {
        let counter = 0
        let colors = ['bg-teal-500', 'bg-teal-500', 'bg-teal-600', 'bg-teal-700', 'bg-teal-800']
        return Object.values(skillCategories).map((skillCategory) => {
            counter++
            return skillCategory.map((skill, index) => {
                return (<Tag key={index} tagLabel={skill} tagBgColor={colors[counter-1]} tagTextColor={'text-gray-200'} tagFontSize={'text-[10px]'}/>)
            })
        })
    }

    return (
        <div id={'experiences-section'} className={"min-h-screen"}>
            <h3 className={'text-center font-oswald text-6xl mt-2 text-gray-200'}>- My Experiences</h3>
            <div id={'experiences-container'} className={'gap-4 mt-10 grid columns-2'}>
                {
                    Object.values(experiences).sort((a,b) =>b.start_date.localeCompare(a.start_date)).map((experience, index) => {
                    let rightOrLeft = index % 2 === 0 ? 'col-start-3' : 'col-start-2';
                    let period = experience.end_date !== "" ?  experience.start_date + ' to ' + experience.end_date : 'Since ' + experience.start_date;
                    let isCurrentJob = experience.end_date === "";
                    return (
                            <div className={`experience-container col-span-2 ${rightOrLeft}`} key={index}>
                                <div className={`border-2 border-sky-900 w-1/2 mx-auto grid grid-cols-7 p-2`}>
                                    <h4 className={'col-span-7 text-2xl font-bold text-teal-600'}><strong className={'text-gray-200'}>{experience.position}</strong> @ <a target={'_blank'} rel={'noreferrer'} href={experience.company_website} className={'transition ease-in-out duration-300 hover:text-teal-500'}>{experience.company}</a></h4>
                                    <div className={'col-span-5'}>
                                        <div className={'experience-title pt-2'}>
                                            <h5 className={'text-sm text-gray-200 h-6'}><ClockIcon className={'inline-block text-teal-600 h-6 w-6'}/><span className={'inline-block align-top pl-1 align-middle'}>{period}</span></h5>
                                            <h5 className={'text-sm text-gray-200 h-6'}><MapPinIcon className={'inline-block text-teal-600 h-6 w-6'}/><span className={'inline-block align-top pl-1 align-middle'}>{experience.job_location}</span></h5>
                                            {/*<h6 className={'text-sm text-gray-300'}> {experience.contract_type}</h6>*/}
                                        </div>
                                        <div className={'experience-description mt-3 text-gray-400'}>
                                            {
                                                isCurrentJob && <><p className={'text-sm text-gray-400 text-justify inline-block'}>I'm currently gathering important ingredients to write this chapter of my career.</p> <p ref={writingChapter} className={'text-sm text-gray-400 text-justify inline-block italic'}></p></>
                                            }
                                            {
                                                !isCurrentJob && <p className={'text-sm text-gray-400 text-justify'}>{experience.job_description}</p>
                                            }
                                        </div>
                                        <div className={'experience-technologies mt-3'}>
                                            {experiencesHasLoaded && displaySkillsInvolved(experience.skills_involved)}
                                        </div>
                                    </div>
                                    <div className={'experience-logo justify-self-center self-center col-span-2'}>
                                        <img src={experience.company_logo} alt={experience.company} className={'w-20 h-20 rounded-full'}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default Experiences
