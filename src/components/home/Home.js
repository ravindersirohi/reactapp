import React from 'react';
import { Card, CardBody, CardTitle, CardFooter, Button } from 'reactstrap';
import './home.scss';
import Profile from '../profile/Profile';

function Home() {
  const submitHandler = event => {
    console.log('Submit Handler!');
  }
  return (
    <div className="home">
      <Card>
        <CardBody>
          <CardTitle>Profile</CardTitle>
          <Profile />
        </CardBody>
        <CardFooter>
          <Button>Cancel</Button>
          <Button type="submit" onClick={submitHandler}>Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Home;