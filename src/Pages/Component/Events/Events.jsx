import React from 'react';
import PropTypes from 'prop-types';

import {EventsEvent} from './EventsEvent';

Events.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
}

// Færum birtingu í sér component, getum unnið nánar með, brugðist við ef gögn
// vantar, bætt við stílum o.s.fr.
// T.d. er `0` ekki gott sjálfgefið gildi fyrir `time` eða `mag`
export function Events({ events }) {
    return (
        <section className="events">
            <h2 className="events__title">Viðburðir á næstunni</h2>
            <ul className="events__list">
                {events.length === 0 && (
                    <li>Engir viðburðir</li>
                )}
                {events.length > 0 && events.map((event, i) => {
                    const {
                        id, name, description
                    } = event;
                    return (
                        <EventsEvent
                          key={i}
                          url={id}
                          name={name}
                          description={description}
                        />
                      )
                    })}
            </ul>
        </section>
    )
}
