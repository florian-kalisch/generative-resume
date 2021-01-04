import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CvSideBarContact from './CvSideBarContact';
import CvSideBarSkills from './CvSideBarSkills';
import CvSideBarLanguages from './CvSideBarLanguages';


function CvSidebar(props) {

  return (

    <aside id="sidebar">

      <CvSideBarContact contact={props.contact.profiles} email={props.contact.email}/>
      
      <CvSideBarLanguages languages={props.languages}/>
      
      <CvSideBarSkills skills={props.skills}/>


    </aside>
  );
}

export default CvSidebar;
