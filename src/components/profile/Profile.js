import React, { useState, useEffect } from 'react';
import './profile.scss';

const Profile = React.forwardRef((props, ref) => {
    const [info, setInfo] = useState({ fullName: '', email: '', address: '' });
    const setFullName = event => setInfo({ ...info, fullName: event.target.value });
    const setEmail = event => setInfo({ ...info, email: event.target.value });
    const setAddress = event => setInfo({ ...info, address: event.target.value });
    useEffect(() => {
        ref.current = event => {
            if (event === 'reset')
                setInfo({ fullName: '', email: '', address: '' });
            else
                return info;
        }
    }, [ref, info]);
    return (
        <div className="profile">
            <div className="input-group">
                <label className="input-group-text">Full Name</label>
                <input type="text" value={info.fullName} className="form-control" placeholder="James Bond"
                    onChange={setFullName} />
            </div>
            <div className="input-group">
                <label className="input-group-text">Email</label>
                <input type="text" value={info.email} className="form-control" placeholder="james@bond.com"
                    onChange={setEmail} />
            </div>
            <div className="input-group">
                <label className="input-group-text">Address</label>
                <input type="text" value={info.address} className="form-control" placeholder="7 Bond street, London"
                    onChange={setAddress} />
            </div>
        </div>
    );
})

export default Profile;