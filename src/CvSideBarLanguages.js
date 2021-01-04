import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useTranslation} from "react-i18next";


function CvSideBarLanguages(props) {

  const {t, i18n} = useTranslation('resume');

  return (

    <div className="side-block" id="languages">
        <h2>
          {t('resume.languages')}
        </h2>

        <ul>

          {props.languages ? props.languages.map((value, index) => {
              return <li key={"langentry" + index} >{value.language} [{value.fluency}] </li>
          }) : <p></p> }

        </ul>
        
    </div>

  );
}

export default CvSideBarLanguages;
