import React from 'react'
import './Card.css'


const Card = () => {
  return (
    <div className='card'>
      <div className='c-left'>
        <img src='https://media.istockphoto.com/id/1363104915/photo/presentation-in-multi-ethnic-office-conference-room-meeting-of-diverse-young-entrepreneurs.jpg?s=612x612&w=0&k=20&c=AiIsOa78mSwtrgdxpfXZF0ScwLhwxWUisT6QQ-95jBk=' alt='People'></img>
         
            
         </div> 
        <div className='c-right'>
        <div className='c-l-top'><span className='c-header'> Consult us here in  </span>
                 <span className='c-span'> ITSolutions </span>
                 <span className='c-c1'> Far far away, behind the word mountains Far from the </span>
                 <span className='c-c2'>  countries Vokalia and Consonantia </span>
                 <div class="c-l-top">
                 <span className='c-n1'> 750 Projects Completed </span>
                 <span className='c-n2'> 558 <span classname='cust'>Happy Clients</span> </span>
                 <span className='c-n3'> 478 <span classname='c-cust'>Business Partners</span></span>
                 <span className='c-n4'> 780 <span classname='c-cust'>IT Consultant</span> </span>
                 </div>
                    </div>
        </div>
              
    </div>
  )
}

export default Card

