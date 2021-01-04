import 'normalize.css';
import './App.css';
import './Print.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase, faMapMarkerAlt, faFolderOpen, faGraduationCap, faGlobe, faEnvelope, faCertificate, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faKaggle, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import CvMainHeader from './CvMainHeader';
import CvSidebar from './CvSidebar';
import {useTranslation} from "react-i18next";


library.add(faBriefcase, faMapMarkerAlt, faFolderOpen, faGraduationCap, faLinkedin, faTwitter, faGlobe, faKaggle, faGithub, faEnvelope, faCertificate, faCalendarAlt);

function App() {

	const {t, i18n} = useTranslation('cv');

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	 }

  const languages = t('languages', { returnObjects: true})  

  return (

    <span id="rootsection">

    {t('basics.banner') !== 'basics.banner' ? 
    <span id="heading"><img alt="banner" src={t('basics.banner')}/></span>
    : <span></span>}

    {languages.length > 1 ?
    <div id="menue">

      {languages.map((value, index) => {
          return <div><button key={"lng" + index} onClick={() => changeLanguage(value.code)}>CV-{value.code}</button></div>
      })}
      <div><button onClick={() => window.print()}>Print</button></div>
    </div> : <span></span>}

    {t('basics.photo') != 'basics.photo' ? 
      <span id="photo"><img alt="profile photo" src={t('basics.photo')}/></span>
    : <span></span>}

    <CvMainHeader name={t('basics.name', { returnObjects: true})} label={t('basics.summary', { returnObjects: true})} work={t('work', { returnObjects: true})} projects={t('projects', { returnObjects: true})} education={t('education', { returnObjects: true})} certificates={t('certificates', { returnObjects: true})}/>
    <CvSidebar contact={t('basics', { returnObjects: true})} skills={t('skills', { returnObjects: true})} languages={t('languages', { returnObjects: true})} />

    </span>

  );
}

export default App;
