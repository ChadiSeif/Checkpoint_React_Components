import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'

const Adresse = () => {
    return (
        <div className ="Address">
                   <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn2.webmanagercenter.com/wmc/wp-content/uploads/2016/11/technopole-El-Ghazala.jpg" />
  <Card.Body>
    <Card.Title>Address:</Card.Title>
    <Card.Text>
      I live in Elghazela city
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="http://shorturl.at/cdekB">Go on GoogleMaps</Card.Link>
  </Card.Body>
</Card>
</div>
    );
};

export default Adresse;