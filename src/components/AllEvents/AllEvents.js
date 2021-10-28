import React from 'react';
import { Card, Button } from 'react-bootstrap';

const AllEvents = ({ event }) => {
    const { name, img } = event;

    return (
        <div className="col mb-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Button variant="danger">{name}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllEvents;