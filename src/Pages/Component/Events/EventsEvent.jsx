import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

EventsEvent.propTypes = {
    url: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
}


export function EventsEvent({ url = 0, name = '', description = '' }) {
    return (
        <li className="events__event">
            <Link to={'/events/' + url} className="events__eventLink">{name}</Link>
            <p className="events__eventDescription">{description}</p>
        </li>
    )
}