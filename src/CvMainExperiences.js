import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import CvMainExperiencesHighlights from './CvMainExperiencesHighlights';

function CvMainHeader(props) {

  return (

  	<section className="blocks">
      <div className="date">
      <span> <span className="calendar"><FontAwesomeIcon icon="calendar-alt" /></span> <Moment format='YYYY-MM'>{props.work.startDate}</Moment> </span> {Date.parse(props.work.endDate) ? <span><Moment format='YYYY-MM'>{props.work.endDate}</Moment></span> : <span>heute</span> }
        {/*<span><Moment format='YYYY-MM'>{props.work.startDate}</Moment> </span><span><Moment format='YYYY-MM'>{Date.parse(props.work.endDate) ? props.work.endDate : new Date()}</Moment></span>*/}
      </div>
      <div className="decorator">
      </div>
      <div className="details">
        <header>
          <h3>{props.work.position}</h3>
          <span className="place"> {props.work.company}</span>
          <span className="location"> <FontAwesomeIcon icon="map-marker-alt" /> {props.work.location}</span>
        </header>
        <span className="summary">
            {props.work.summary}
          </span>
        <div>
        
          {props.work.highlights ? 
            <ul>
              
               {props.work.highlights.map((value, index) => {
                return <CvMainExperiencesHighlights key={"workhighlight" + index} highlight={value} />
              })}

            </ul>
          : <span></span>}
          </div>
      </div>
    </section>
  );
}

export default CvMainHeader;
