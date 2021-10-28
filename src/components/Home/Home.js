import React, { useEffect, useState } from 'react';
import AllEvents from '../AllEvents/AllEvents';

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('./volunteer-fake-data.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div className="container mb-5">
            <h1 className="text-center my-5">Our Events</h1>
            <div className="row row-cols-2 row-cols-md-4 g-2">
                {
                    events.map(event => <AllEvents
                        key={event.id}
                        event={event}
                    ></AllEvents>)
                }
            </div>
        </div>
    );
};

export default Home;