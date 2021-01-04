import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CvSideBarSkillEntry from './CvSideBarSkillEntry';
import {useTranslation} from "react-i18next";


function CvSideBarSkills(props) {

  const {t, i18n} = useTranslation('resume');

  return (

    <div className="side-block" id="skills">
        <h2>
          {t('resume.skills')}
        </h2>

        <span id="schema">[<a href="https://bit.ly/skill-lvl">bit.ly/skill-lvl</a>]</span>

        {props.skills ? props.skills.map((value, index) => {
          return <CvSideBarSkillEntry key={"skill" + index} skill={value} />
        }) : <span></span> }
        
    </div>

  );
}

export default CvSideBarSkills;
