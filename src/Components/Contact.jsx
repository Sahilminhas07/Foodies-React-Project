import React from 'react'
import Nav from  './Nav';
import Footer from './Footer';
import Banner from './Banner';
import Form from './Form';

function Contact(props) {
  return (
    <>
      <Nav />
      <Banner value="src/assets/img/Banner/contact.jpg"/>
      <Form />

      <Footer />
    </>
  )
}

export default Contact