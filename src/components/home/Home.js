import React, { useRef } from 'react';
import { Card, CardBody, CardTitle, CardFooter, Button } from 'reactstrap';
import './home.scss';
import Profile from '../profile/Profile';

function Home() {
  const profileRef = useRef();
  const saveEvent = event => {
    const info = profileRef.current();
    console.log(info);
    //Todo - API call to save form data.
  }
  const resetEvent = event => {
    profileRef.current('reset');
  }
  return (
    <div className="home">
      <Card>
        <CardBody>
          <CardTitle>Profile</CardTitle>
          <Profile ref={profileRef} />
        </CardBody>
        <CardFooter>
          <Button type="button" onClick={resetEvent}>Reset</Button>
          <Button type="submit" onClick={saveEvent}>Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Home;