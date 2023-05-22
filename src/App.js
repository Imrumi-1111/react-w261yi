import React from "react";
import "./style.css";
import  React,{ useState } from 'react'


export default function Form(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (firstName && lastName && email && password) {
      // Perform your desired actions here, such as submitting the form or making an API request
      console.log('Form submitted!');
    } else {
      // Show alert if any field is empty
      alert('Please fill in all fields.');
    } 
  };

  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{ textTransform: 'capitalize' }}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={{ textTransform: 'capitalize' }}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
          required
        />
      </div>
      <button onClick={handleSubmit} type="submit">Submit</button>
    </form>
  );
};



