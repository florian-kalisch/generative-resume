/*generative-resume
Copyright 2016 Min-Zhong "John" Lu
Copyright 2021 Florian Kalisch
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.*/
/* Min-Zhong "John" Lu developed the basic html structure  */
/* Florian Kalisch migrated html to jsx and adapted it to his requirements. */

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
