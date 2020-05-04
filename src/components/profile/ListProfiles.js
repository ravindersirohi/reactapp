import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as profileActions from '../../actions/ProfileActions';
import axios from 'axios';
import './profile.scss';


const ListProfiles = ({profiles}) => {
    console.log(profiles);
    const items = profiles.map(({ id, name, email }) => <ListGroupItem color="dark" key={id} >{name} ({email})</ListGroupItem>);
    return (
        <>
            <Button color="success">Add</Button>
            <ListGroup>
                {items}
            </ListGroup>
        </>
    );
}

const mapStateToProps = state => {
    return {
        profiles: state.UserData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProfile: () => dispatch(profileActions.addProfile({})),
        getProfiles: () => dispatch(profileActions.getProfiles)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListProfiles);