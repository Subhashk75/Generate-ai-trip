import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import HashalshImage from "../../assets/photoes/hashlash.png"
import GdscImage from "../../assets/photoes/gdsc.jpeg"
const ClubCard = () => {
  return (
    <div style={{marginTop:"100px"}}>
    <div>
    <Card style={{ width: '100vw',  display:"flex" ,flexDirection:"row"}}>
      <Card.Img variant="top" src={HashalshImage}  style={{width:"30vw"}}/>
      <Card.Body style={{width:"60vw"}}>
        <Card.Title> Hackslash Club</Card.Title>
        <Card.Text style={{objectFit:"cover"}}>
        As an organization affiliated with Mozilla, HackSlash Student Developers Group shares the club's mission of promoting openness, innovation, and user empowerment on the web. HackSlash aims to foster a vibrant community of student developers to thrive in a rapidly evolving tech landscape through hands-on projects, workshops, and networking opportunities. It serves as a platform for students to learn, experiment, and make meaningful contributions to tech-savvy projects, particularly focusing on Machine Learning, Web and Application Development and existing relevant technological advancements. Through community engagement via workshops, webinars, and real-world relevant projects, students have had the opportunity to enhance their technical abilities and stay updated with the latest advancements across the vast technologies spanning in computer science.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
  <div style={{marginTop:"30px"}}>
    <Card style={{ width: '100vw' , display:"flex" ,flexDirection:"row" }}>
      <Card.Img variant="top" src={GdscImage} style={{width:"30vw"}} />
      <Card.Body style={{width:"60vw"}}>
        <Card.Title> GDSC Club </Card.Title>
        <Card.Text style={{objectFit:"cover"}}>
        Google Developer Student Clubs NIT Patna is a community of NIT Patna undergraduate and graduates interested in Google developer technologies under the guide of Mr. Suyel Namasudra. GDSC provides an opportunity for students to enhance their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community. The GDSC organizes numerous events ranging from small meetups for working on projects to large-scale hackathons. The club is open to anyone in the university who wants to work and learn together, be it a fresher or a senior who wants to brush up his/her developing abilities.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default ClubCard
