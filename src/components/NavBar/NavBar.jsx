import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">DevTown <span className='n-span'>HomeWork</span></div>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Testimonials</li>
                    <li>Services</li>
                    </ul>
                    </div>

                    </div>     
    </div>
  )
}

export default NavBar
