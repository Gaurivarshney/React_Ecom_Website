import React from 'react'
import{ banner }from '../Data'
import './Banner.css'
function Banner() {
  return (
    <div>
      <div className="container4" >
        <div className="banner_items"  style={{display: 'flex'}}>
            {
                banner.map((items)=>(
                    <> <div className='box3'>
                    <img src={items.cover} alt="" />
                    <div className="details_banner">
                        <h5>{items.title1}</h5>
                        <h5>{items.title2}</h5>
                        <p>{items.desc}</p>
                    </div>
                    </div>
                    </>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Banner
