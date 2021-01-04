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
