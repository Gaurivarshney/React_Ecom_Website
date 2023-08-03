import React from 'react'
import { price } from '../Data'
import './Price.css'
function PriceContainer() {
  return (
    <div className='price_container' >
      <div className="price_box" style={{display: 'flex'}}>
        {
            price.map((items)=>(
                <>
                    <div>
                        <h2>{items.name}</h2>
                       <h1> 
                       <span>$</span>
                       {items.price}
                       <label htmlFor="">/user per month</label>
                       </h1>
                       <p>{items.desc}</p>
                       <button className='btn-price'>Get Started</button>


                       <ul>
                        {
                            items.list.map((item)=>(
                                <li>
                                    <i style={{color: 'green', paddingRight: 12}}>{item.icon}</i>
                                    <i>{item.para}</i>
                                </li>
                            ))
                        }
                       </ul>
                    </div>
                </>
            ))
        }
      </div>
    </div>
  )
}

export default PriceContainer
