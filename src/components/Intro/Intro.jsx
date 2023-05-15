/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Intro.css'

const Intro = () => {
  return (
    <div className='intro'>
      <span className='intro-stack'>
        <img src='https://www.wingstechsolutions.com/wp-content/uploads/2022/03/full-stack-development.gif'></img>
        </span>
        <div className='i-left'>
            <div className='i-name'>
                <span className='lm'>Hi there,</span> <span className='mm'>I am Tarun </span>
                <span className='rm'>A Fullstack Expert! 
                with a high level of web development and producing Quality work.
                As an expert fullstack MERN web developer, I possess comprehensive skills and experience in building robust and scalable web applications using the MERN stack. MERN stands for MongoDB, Express.js, React, and Node.js, which are all powerful technologies for developing modern web applications.
With proficiency in each component of the MERN stack, I can handle both the frontend and backend development aspects of a project. 
</span>
            </div>
        </div>
    </div>
  )
}

export default Intro
