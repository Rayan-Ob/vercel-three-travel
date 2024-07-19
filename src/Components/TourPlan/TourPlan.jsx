import React from 'react'
import "./TourPlan.css"
import { Link, NavLink } from 'react-router-dom'

function TourPlan({subtitle,title,desc,image,direction,displaybtn,displaydiv,padding}) {
  return (
    <div className='Tour-plan' style={{flexDirection:direction,padding:padding}}>
        <div className="Tour-plan-right">
        <h5>{subtitle}</h5>
        <h2>{title}</h2>
        <p>{desc}</p>
        <button style={{display:displaybtn} }> <a href="/packages">View Packages</a> </button>
        <div className='tour-plan-honeymoon' style={{display:displaydiv}}>
            <div>
                <p className='num'>78%</p>
                <p className='activate'>Vacations</p>
            </div>
            <div>
                <p className='num'>55%</p>
                <p className='activate'>Honeymoon</p>
            </div>
        </div>
        </div>
        <div className='Tour-plan-img'>
            <img src={image} alt="" />

        
        </div>

    </div>
  )
}

export default TourPlan