import React from 'react'
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url('https://media.istockphoto.com/id/1087973252/tr/foto%C4%9Fraf/pizza-ile-alev-yakacak-odun-f%C4%B1r%C4%B1nda.jpg?s=1024x1024&w=is&k=20&c=bRzsaMxtZ1jmT5qwfyG9zDRpBGzpbtdsx4q67p798fw=')`}}>

      </div>
      <div className='rightSide'>
        <h1>Contact Us</h1>

        <form id='contact-form' method='POST'>
          <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='Enter full name...' type='text' />
          <label htmlFor='email'>Email</label>
          <input name='email' placeholder='Enter email...' type='email' />
          <label htmlFor='message'>Message</label>
          <textarea
            rows='6'
            placeholder='Enter message...'
            name='message'
            required
          >
          </textarea>
          <button type='submit' >Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact