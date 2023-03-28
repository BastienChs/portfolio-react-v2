import './style.css'
import works from "../../datasources/works.json";
import React from "react";

const Works = () => {
    function displayWorkDetails(e) {
        //get the first child who has class global-container
        let targetElem = e.target.parentElement

        let globalContainer = targetElem.querySelector('.global-container')
        globalContainer.classList.remove('hidden', 'animate__fadeOutUp')
        globalContainer.classList.add('animate__animated', 'animate__fadeInDown', 'overflow-x-hidden')
    }

    function hideWorkDetails(e) {
        let globalContainer = e.target
        if(e.target.classList.contains('global-container')) {
            globalContainer.classList.remove('animate__fadeInDown')
            globalContainer.classList.add('animate__fadeOutUp')
            setTimeout(() => {
                globalContainer.classList.add('hidden')
            }, 1000)
        }
    }

    return (
        <div id={'works-section'} className={"min-h-screen"}>
            <h3 className={'text-center font-oswald text-6xl mt-2 text-gray-200'}>- My Works</h3>
            {/* We will display projects on a grid of 3x3 */}
            {/* Each project will have a title, description, and a link to the project */}
            {/* We will add a hover effect to display this information*/}
            <div className={'w-2/3 mx-auto grid grid-cols-3 place-items-center place-items-stretch items-stretch gap-4 mt-10'}>
                {
                    Object.values(works).map((work, index) => {
                      return(
                          <div className={'overflow-y-hidden overflow-x-hidden relative h-52 w-full relative'} key={index} onMouseEnter={displayWorkDetails} onMouseLeave={hideWorkDetails}>
                              <img src={work.project_image} className={'absolute object-cover h-full w-full'} alt={work.project_image_credit}/>
                              <div className={'absolute z-10 h-full w-full bg-black/80 flex flex-col place-content-center hidden global-container absolute'}>
                                  <h4 className={'self-center text-teal-600 font-bold text-3xl'}>{work.project_name}</h4>
                                  <a target={'_blank'} rel={'noreferrer'} href={work.project_github_link} className={'transition ease-in-out duration-300 mx-auto mt-2 w-1/3 text-sm text-white text-center border-2 hover:bg-white hover:text-teal-600'}>Github</a>
                              </div>
                          </div>
                      )
                    })
                }
            </div>
        </div>
    )
}

export default Works
