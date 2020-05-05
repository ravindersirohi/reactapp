import React, { useEffect } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions/ProfileActions';
import './profile.scss';


const ListProfiles = ({ userProfiles, fetchUserProfiles }) => {
    useEffect(() => {
        fetchUserProfiles()
    }, [fetchUserProfiles])

    const items = userProfiles ?
        userProfiles.map(({ id, name, email }) => <ListGroupItem color="dark" key={id} >{id})  {name}  ({email})</ListGroupItem>)
        : <ListGroupItem color="dark">No user profile found!</ListGroupItem>;
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
        userProfiles: state.UserData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserProfiles: () => dispatch(actions.fetchUserProfiles())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListProfiles);