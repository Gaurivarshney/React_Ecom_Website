import React from 'react'
import {Data} from './Data'
import './Card.css'
function Card() {
  return (
    <div>
     <div className="container2">
       {
        Data.map((item)=>(
            <div className="card" key={item.id}>
                <div className="left">
                  <span>  <img src={item.cover} alt="..photo" /></span>
                </div>
                <div className="right">
                    <h4>{item.name}</h4>
                    <p>{item.items}</p>
                </div>
            </div>
        ))
       }
        </div>
     </div>
  
  )
}

export default Card
