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
