import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CvSideBarContactEntry from './CvSideBarContactEntry';
import {useTranslation} from "react-i18next";

function CvSideBarContact(props) {

  const {t, i18n} = useTranslation('resume');

  return (

    <div className="side-block" id="contact">
        
        <h2>
          {t('resume.contact')}
        </h2>
        <ul>
          <li><i><FontAwesomeIcon icon="envelope"/></i> <span><a href={props.email}>{props.email}</a></span></li>
        </ul>

        <h2>
          {t('resume.profiles')}
        </h2>
        <ul>

        {props.contact ? props.contact.map((value, index) => {
          return <CvSideBarContactEntry key={"sidebarentry" + index} contact={value} />
        }) : <p>none</p> }

        </ul>
      </div>

  );
}

export default CvSideBarContact;
