import React, { useState } from 'react'
import Heading from '../Heading'
import { products } from './Products';
import './ProjectItem.css'
import TopProducts from './TopProducts'
function TopHeading() {
    const [data, setData]= useState(products);
    const allCategories =["all", ...new Set(data.map((item)=>item.category))]
    const [category, setCategory] =useState(allCategories)
     
    const handleFilter =(category)=>{
        const newItem = products.filter((item)=>item.category===category)
        setData(newItem)

        if(category==='all')
        {
            setData(products)
            return
        }
    }

  return (
    <div className='container3'>
      <Heading title="Top Products" desc="check the hotest designog the week. These rising stars are worth your attention"/>
      <div className="category" style={{display: 'flex'}}>
      {
        category.map((category)=>(
            <button className="myCart" onClick={()=>handleFilter(category)}>
                {category}
            </button>
        ))
      }

      </div>
    <TopProducts data={data}/>

    </div>
  )
}

export default TopHeading