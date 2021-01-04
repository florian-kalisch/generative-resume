import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function CvSideBarContactEntry(props) {

  return (

  	<li><i><FontAwesomeIcon icon={props.contact.fa != 'globe' ? ['fab', props.contact.fa] : props.contact.fa} /></i> <span className="profile"><a href={props.contact.url}>{props.contact.url}</a></span></li>

  );
}

export default CvSideBarContactEntry;
