import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import axios from 'axios';
import './profile.scss';


const ListProfiles = () => {

    const [profiles, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/api/profile/')
            .then((result) => setData(result.data))
            .catch(error => console.log(error))
    }, []);
    const items = profiles.map(({ id, fullname, email }) => <ListGroupItem color="dark" key={id} >{fullname} ({email})</ListGroupItem>);
    return (
        <div className="profile">
            <Button color="success">Add</Button>
            <ListGroup>
                {items}
            </ListGroup>
        </div>
    );
}

export default ListProfiles;