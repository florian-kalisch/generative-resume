import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useTranslation} from "react-i18next";


function CvSideBarContactEntry(props) {

	const {t, i18n} = useTranslation('resume');

  return (

  	<ul>
		<li><u>{props.skill.name}</u></li>
		<li><b>{t('resume.level')}: {props.skill.level}</b></li>

		{props.skill.keywords ? props.skill.keywords.map((value, index) => {
          return <li key={"skillkeyword" + index} >- {value}</li>
        }) : <p></p> }

		{/*<li>pandas</li>
		<li>sklearn</li>*/}
	</ul>

  );
}

export default CvSideBarContactEntry;
