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
