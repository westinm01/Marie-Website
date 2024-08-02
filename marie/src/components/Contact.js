import React, {useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b6707ko', 'template_a4p7aoh', form.current, {
        publicKey: 'n5gWnwBY2oOscqHFN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Message sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <>
    <div className = "contactWrapper">
      <div className = "contact">
        
        <p className = "contact-email">Email me</p>
        <form ref = {form} onSubmit = {sendEmail}>
            <input type="text" placeholder="Name" name = "user_name"/>
            <input type="email" placeholder="Email" name="user_email" />
            <textarea placeholder="Message" name = "message" />
            <button className = "retroFont email-button" type="submit" value = "send">Submit</button>
        </form>
        
      </div>

      <img className = "contactImage" src = "./marie_pc.gif" alt = "contact"/>

    </div>
    
    </>
  )
}

export default Contact