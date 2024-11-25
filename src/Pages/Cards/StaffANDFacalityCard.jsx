import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Profile from "../../assets/photoes/Profile.jpg"
const StaffANDFacalityCard = (props) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Profile} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.Desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default StaffANDFacalityCard
