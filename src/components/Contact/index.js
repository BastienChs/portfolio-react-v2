import React from "react";
import {PhoneIcon, EnvelopeIcon} from "@heroicons/react/24/outline"
import arrow from '../../assets/img/svg/arrow-with-scribble-svgrepo-com.svg'
const Contact = () => {
    return (
        <div id={'contact-section'} className={"min-h-screen"}>
            <h3 className={'text-center font-oswald text-6xl mt-2 text-gray-200'}>- Contact</h3>
            <div className={'mx-auto w-1/2 grid grid-cols-4 gap-y-4 mt-10'}>
                {/*French phone number*/}
                <div className={'border-2 border-teal-600 h-full w-full text-center'}>
                    <PhoneIcon className={'inline-block h-full w-6 text-gray-200'}/>
                </div>
                <div className={'col-start-2 col-span-3 flex flex-row bg-teal-600'}>
                    <a href={'tel: +33 6 21 67 14 38'} className={'block font-oswald text-gray-200 w-fit place-self-center mx-auto'}>+33 6 21 67 14 38</a>
                </div>
                {/*Canadian phone number*/}
                <div className={'border-2 border-teal-600 h-full w-full text-center'}>
                    <PhoneIcon className={'inline-block h-full w-6 text-gray-200'}/>
                </div>
                <div className={'col-start-2 col-span-3 flex flex-row bg-gradient-to-r bg-teal-600'}>
                    <a href={'tel: +1 438 304 6039'} className={'block font-oswald text-gray-200 w-fit place-self-center mx-auto'}>+1 (438) 304-6039</a>
                </div>
                {/*Email*/}
                <div className={'border-2 border-teal-600 h-full w-full text-center'}>
                    <EnvelopeIcon className={'inline-block h-full w-6 text-gray-200'}/>
                </div>
                <div className={'col-start-2 col-span-3 flex flex-row bg-gradient-to-r bg-teal-600'}>
                    <a href={'mailto:bastien.chies@gmail.com'} className={'block font-oswald text-gray-200 w-fit place-self-center mx-auto'}>bastien.chies@gmail.com</a>
                </div>
                {/*LinkedIn*/}
                <div className={'border-2 border-teal-600 h-full w-full text-center transition ease-in-out duration-300 hover:bg-teal-600'}>
                    <a href={'https://www.linkedin.com/in/bastien-chies'} target={'_blank'} rel={'noreferrer'} className={'block w-full font-oswald text-gray-200 place-self-center mx-auto'}>In</a>
                </div>
                <div className={'border-2 border-teal-600 h-full w-full text-center transition ease-in-out duration-300 hover:bg-teal-600'}>
                    <a href={'https://github.com/BastienChs/'} target={'_blank'} rel={'noreferrer'} className={'block w-full font-oswald text-gray-200 place-self-center mx-auto'}>Github</a>
                </div>
                <div className={'border-2 border-teal-600 h-full w-full text-center transition ease-in-out duration-300 hover:bg-teal-600'}>
                    <a href={'https://www.kaggle.com/bastienchies'} target={'_blank'} rel={'noreferrer'} className={'block w-full font-oswald text-gray-200 place-self-center mx-auto'}>Kaggle</a>
                </div>
                <div className={'border-2 border-teal-600 h-full w-full text-center transition ease-in-out duration-300 hover:bg-teal-600'}>
                    <a href={'https://www.twitter.com/chsbastien'} target={'_blank'} rel={'noreferrer'} className={'block w-full font-oswald text-gray-200 place-self-center mx-auto'}>Twitter</a>
                </div>
                <div className={'col-span-4'}>
                    <p className={'text-teal-700 text-6xl font-fasthand'}>And this is where I live for now</p>
                </div>
                <div className={'col-span-4'}>
                    <img src={arrow} className={'mx-auto w-1/4'} alt={'arrow'}/>
                </div>
                {/*Finally we want to display a map with our current location*/}
                <div className={'col-start-1 col-span-4'}>
                    {/*We want an iframe with the coordinates of Montreal Quebec*/}
                    <iframe title={'Current city map'} width="100%" height="450" style={{border: 0}} loading="lazy" allowFullScreen
                            src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=Montr%C3%A9al,%20Quebec,%20Canada+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </div>
    )
}
export default Contact
