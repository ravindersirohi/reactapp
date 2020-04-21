import React from 'react';
import './profile.scss';
function Profile() {
    return (
        <div className="profile">
            <div className="input-group">
                <label className="input-group-text">Full Name</label>
                <input type="text" className="form-control" placeholder="James Bond" />
            </div>
            <div className="input-group">
                <label className="input-group-text">Email</label>
                <input type="text" className="form-control" placeholder="james@bond.com" />
            </div>
            <div className="input-group">
                <label className="input-group-text">Address</label>
                <input type="text" className="form-control" placeholder="7 Bond street, London" />
            </div>
        </div>
    );
}

export default Profile;