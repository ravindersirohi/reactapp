import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardFooter, CardSubtitle, Button } from 'reactstrap';
import './home.scss';
function Home() {
  return (
    <div className="home">
      <Card>
        <CardBody>
          <CardTitle>Profile</CardTitle>
          <CardText>Your information</CardText>
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