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
import CvMainExperiences from './CvMainExperiences';
import CvMainProjects from './CvMainProjects';
import CvMainEducation from './CvMainEducation';
import CvMainCertificates from './CvMainCertificates';
import {useTranslation} from "react-i18next";

function CvMainHeader(props) {

  const {t, i18n} = useTranslation('resume');

  return (

    <section id="main">
      <header id="title">
        <h1>{props.name}</h1>

        <span className="subtitle">{props.label}</span>
        {/*<div><button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button></div>*/}
      </header>

      {props.work ?
      <section className="main-block" id="work">
        <h2>
          {/*<i class="fa fa-suitcase"></i> Experiences*/}
          <i><FontAwesomeIcon icon="briefcase" /></i> {t('resume.work')}
        </h2>

        {props.work.map((value, index) => {
          return <CvMainExperiences key={"work" + index} work={value} />
        })}

     </section> : <span></span>}

     {props.projects.length ?
     <section className="main-block" id="projects">
        <h2>
          <i><FontAwesomeIcon icon="folder-open" /></i> {t('resume.projects')}
        </h2>

        {props.projects.map((value, index) => {
          return <CvMainProjects key={"projects" + index} project={value} />
        }) }

     </section> : <span></span>}


     {props.certificates.length ?
     <section className="main-block" id="certificates">
        <h2>
          <i><FontAwesomeIcon icon="certificate" /></i> {t('resume.certificates')}
        </h2>

        {props.certificates.map((value, index) => {
          return <CvMainCertificates key={"cert" + index} certificate={value} />
        })}

     </section>  : <span></span>}


     <section className="main-block concise" id="education">
        <h2>
          <i><FontAwesomeIcon icon="graduation-cap" /></i> {t('resume.education')}
        </h2>

        {props.education.map((value, index) => {
          return <CvMainEducation key={"edu" + index} education={value} />
        })}

     </section>

    </section>
  );
}

export default CvMainHeader;
