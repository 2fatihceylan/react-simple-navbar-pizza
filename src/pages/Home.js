import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url('https://media.istockphoto.com/id/1087973252/tr/foto%C4%9Fraf/pizza-ile-alev-yakacak-odun-f%C4%B1r%C4%B1nda.jpg?s=1024x1024&w=is&k=20&c=bRzsaMxtZ1jmT5qwfyG9zDRpBGzpbtdsx4q67p798fw=')`}}>
        <div className='headerContainer' >
            <h1>Pizza Paradiso</h1>
            <p>A LOTS OF PIZZA</p>
            <Link to='/menu'>
                <button> ORDER NOW </button>
            </Link>
        </div>
    </div>
  )
}

export default Home