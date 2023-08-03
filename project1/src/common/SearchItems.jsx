import React, { useState } from 'react'
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { products } from './Project/Products';

function SearchItems({value, products, onSearch}) {
    const [openImg, setOpenImg]= useState(false);
    const [img, setImg]= useState ("");
    const onOpenImg =(src)=>{
        setImg(src)
        setOpenImg(src)
    }

  return (
    <div>
    <div className="search_items">
        <div className="product_items">
            {
                products.filter((item)=>{
           const searchKey = value.toLowerCase()
           const title = item.title.toLowerCase()
           return searchKey && title.startsWith(searchKey) && title !== searchKey
            }).slice(0,10).map((item)=>(
                <div className="box" key={item.id} >
                <div >
                <div className="img">
                    <img src={item.cover} alt="..img" className='product-img'/>
                    <div className="overlay">
                       <span>
                       <button className='btn'>
                            <LocalMallSharpIcon/>
                        </button>
                        <button className='btn'>
                            <FavoriteBorderSharpIcon/>
                        </button>
                        <button className='btn' onClick={()=> onOpenImg(item.cover)}>
                            <SearchSharpIcon/>
                        </button>
                       </span>
                    </div>
                </div>
            <div className="details">
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <h4>Price: ${item.price}</h4>
            </div>
                </div>
            </div>
            ))
            }   
        </div>
    </div>
      
    </div>
  )
}

export default SearchItems
