import React, { useState } from 'react'
import Heading from '../Heading'
import ProductItem from './ProductItem'
import { products } from './Products';
import './ProjectItem.css'
function Project() {
    const [data, setData]= useState(products);
  return (
    <div className='container3'>
      <Heading title="Trendings Products" desc="check the hotest designog the week. These rising stars are worth your attention"/>
    <ProductItem data={data}/>

    </div>
  )
}

export default Project
