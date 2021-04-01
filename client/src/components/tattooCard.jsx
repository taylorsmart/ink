import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Navbar, Container, Row, Col, Grid, Modal, Button, Card, ListGroup, ListGroupItem
} from 'react-bootstrap';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const TattooCard = ({ tattooId }) => {
  const [photoCard, setPhotoCard] = useState({})
  const [shopInfo, setShopInfo] = useState({})
  const [artistInfo, setArtistInfo] = useState({})


  // const styles = {
  //   card: {
  //     backgroundColor: '#343a40',
  //     borderRadius: 5,
  //     padding: '1rem'
  //   },
  //   cardImage: {
  //     objectFit: 'cover',
  //     height: '1rem',
  //     borderRadius: 55,
  //     radius:55
  //   }
  // }

  const fetchShop = (id) =>{
    axios({
      method: 'get',
      url:`/shop/${id}`
    })
    .then((result) => {
      console.log('fetchingShop')
      console.log(result.data.rows[0]);
      setShopInfo(result.data.rows[0]);
    })
    .catch((error) => {
      console.log(error)
    })
  }
  const fetchArtist = (id) =>{
    axios({
      method: 'get',
      url:`/artist/${id}`
    })
    .then((result) => {
      console.log('fetchingArtist')
      console.log(result.data.rows[0]);
      setArtistInfo(result.data.rows[0]);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const fetchCard = (id) =>{
    axios({
      method: 'get',
      url:`/tattoo/${id}`
    })
    .then((result) => {
      console.log(result.data.rows[0]);
      setPhotoCard(result.data.rows[0]);
      fetchShop(result.data.rows[0].shop_id)
      fetchArtist(result.data.rows[0].artist_id)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchCard(tattooId);
  },[])

  useEffect(() => {
    fetchCard(tattooId);
  },[tattooId])


  return (
    <div id="tattoo-card shadow-sm">
      {/* <Card style={styles.card}> */}
      <Card className="text-white bg-dark">
        <Card.Body className="bg-secondary">
          <Card.Title className="text-uppercase">{photoCard.name}</Card.Title>
          <Card.Text>
            {photoCard.story}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush text-dark">
          <ListGroupItem action target="_blank" rel="noopener noreferrer" href={`https://www.instagram.com/kayadawg/`} className="list-group">{`Artist Name: ${artistInfo.first_name}`}</ListGroupItem>
          <ListGroupItem action target="_blank" rel="noopener noreferrer" href={`http://www.google.com/maps/place/${photoCard.location}`} className="list-group">{`City: ${photoCard.location}`}</ListGroupItem>
          <ListGroupItem action target="_blank" rel="noopener noreferrer" href={`https://www.yelp.com/search?find_desc=${shopInfo.name}`} className="list-group">{`Shop Name: ${shopInfo.name}`}</ListGroupItem>
        </ListGroup>
        {/* <Card.Body>
          <Card.Link href="#">Like</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body> */}
        <Card.Img variant="bottom" src={photoCard.url} />

      </Card>
    </div>
  )
}

export default TattooCard;
