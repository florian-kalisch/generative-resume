import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';

function CvMainEducation(props) {

  return (

    <section className="blocks">
          <div className="date">
            <span><span className="calendar"><FontAwesomeIcon icon="calendar-alt" /></span><Moment format='YYYY-MM'>{props.education.startDate}</Moment> </span> {Date.parse(props.education.endDate) ? <span><Moment format='YYYY-MM'>{props.education.endDate}</Moment></span> : <span>heute</span> }
          </div>
          <div className="decorator">
          </div>
          <div className="details">
            <header>
              <h3>{props.education.area} ({props.education.studyType})</h3>
              <span className="place">{props.education.institution}</span>
              <span className="location"> <FontAwesomeIcon icon="map-marker-alt" /> {props.education.location}</span>
            </header>
            {props.education.description ? <div>{props.education.description}</div> : <div></div>} 
          </div>
        </section>
  );
}

export default CvMainEducation;
