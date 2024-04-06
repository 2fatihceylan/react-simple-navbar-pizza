import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url('https://media.istockphoto.com/id/1087973252/tr/foto%C4%9Fraf/pizza-ile-alev-yakacak-odun-f%C4%B1r%C4%B1nda.jpg?s=1024x1024&w=is&k=20&c=bRzsaMxtZ1jmT5qwfyG9zDRpBGzpbtdsx4q67p798fw=')`}}>

      </div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  )
}

export default About