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
import Moment from 'react-moment';

function CvMainCertificates(props) {

  return (

    <section className="blocks">
          <div className="date">
            <span><span className="calendar"><FontAwesomeIcon icon="calendar-alt" /></span><Moment format='YYYY-MM'>{props.certificate.date}</Moment></span>
          </div>
          <div className="decorator">
          </div>
          <div className="details">
            <header>
              <h3>{props.certificate.name}</h3>
              <span className="place">{props.certificate.issuer}</span>
              <span className="location"></span>
            </header>
          </div>
        </section>
  );
}

export default CvMainCertificates;
