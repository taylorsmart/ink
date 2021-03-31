import React, {useState, useEffect} from 'react';
// import $ from 'jquery';
import axios from 'axios';


const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('FirstName: ', firstName, 'lastName: ', lastName, 'Email: ', email, 'Guests: ', guests);
    const formBody = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      guests: guests,
    }
    axios({
      method: 'post',
      url: '/rsvps',
      data: formBody,
    })
    .then((response) =>{
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const fetchRsvps = () => {
    axios({
      method: 'get',
      url: '/rsvps'})
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchRsvps();
  })


  return (
    <form>
      <label>
        FirstName:
        <input type="text" name="firstName" onChange={(e)=>{setFirstName(e.target.value)}} required/>
      </label>

      <label>
        FirstName:
        <input type="text" name="lastName" onChange={(e)=>{setLastName(e.target.value)}} required/>
      </label>

      <label>
        Email
        <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
      </label>

      <label>
        Number of Guests:
        <input type="number" name="guests" onChange={(e)=>{setGuests(e.target.value)}} required/>
      </label>
      <input type="submit" onClick={handleSubmit} value="submit"/>
    </form>

  )
}

export default App;
