import React from 'react';
import { Card, CardBody, CardTitle, CardFooter, Button } from 'reactstrap';
import './home.scss';
import Profile from '../profile/Profile';
function Home() {
  return (
    <div className="home">
      <Card>
        <CardBody>
          <CardTitle>Profile</CardTitle>
          <Profile />
        </CardBody>
        <CardFooter>
          <Button>Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Home;