import {StarIcon} from "@heroicons/react/24/solid";
import {StarIcon as StarIconOutline} from "@heroicons/react/24/outline";
const SkillsStars = (props) => {
    const {nbOfStars} = props
    const nbOfOutlineStars = 5 - nbOfStars
    return(
            <td className={''}>
                {/*Nb of stars represents the plain stars*/}
                {[...Array(nbOfStars)].map((e, i) => {
                    return <StarIcon key={i} className={'star-skill inline-block'}/>
                })}
                {/* We also want to complete it by outline stars, ie if i've 4 stars, i'll display 1 outline*/}
                {[...Array(nbOfOutlineStars)].map((e, i) => {
                    return <StarIconOutline key={i} className={'star-skill inline-block'}/>
                })}
            </td>
    )
}

export default SkillsStars
