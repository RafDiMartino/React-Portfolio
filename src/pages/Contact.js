import React from 'react'
import ContactForm from '../components/contact-form/ContactForm'
import "../styles/contact.css"
import SocialMedia from '../components/social-media/SocialMedia'

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-wrapper'>
        <h2>CONTACT ME</h2>
        <p>You can contact me through the links below or send me a message through the form</p>
        <div className='social-media'>
          <SocialMedia />
        </div>
        <div className='form-wrapper'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact