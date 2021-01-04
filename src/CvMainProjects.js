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
