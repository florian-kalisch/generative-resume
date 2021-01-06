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

function CvMainHeader(props) {

  return (

    <section className="blocks">
          <div className="date">
            {props.project.startDate && <span>{props.project.startDate}</span>} {props.project.startDate && <span>{props.project.endDate}</span>}
          </div>
          {/*<div className="decorator">
          </div>*/}
          <div className="details">
            <header>
              <h3>{props.project.name}</h3>
              {/*<span class="place"></span>*/}
            </header>
            <div>
              {props.project.summary}
              {props.project.url !== "" ?
              <ul>
                <li><a href={props.project.url}>{props.project.url}</a></li>
              </ul> : <span></span>}
            </div>
          </div>
        </section>
  );
}

export default CvMainHeader;
