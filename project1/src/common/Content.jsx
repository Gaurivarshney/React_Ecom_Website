import React, { useState } from 'react'
import './Content.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import SearchItems from './SearchItems';
// import { products } from './Products';
import { products } from './Project/Products';
function Content() {
  const [value, setValue] = useState("");
  const onChanage=(e)=>{
    setValue(e.target.value);
  }
  const onSearch =(key)=>{
    setValue(key)
    console.log("search", key)
  }
  return (
    <div>
      <div className="container">
      <div className='content'>
      <h1>Over <span style={{color:'orange'}}>6,500</span> Curated Design </h1>
        <h1>Resources, <span style={{color:'orange'}}>Graphic & Website</span>Templates</h1>
        <p>Hign-Quality Design Themes for personal and commercial use contains 6k+ items in 100 categories</p>
       <div className='input'>
       <p>All Categories</p>
        <input type="text" placeholder='search anything.....' onChange={onChanage} value={value}/>
        <button onClick={()=> onSearch(value)}><SearchSharpIcon/></button>
       </div>
      <SearchItems product={products} value={value} onSearch={onSearch}/>
       <p style={{paddingTop:30}}>Lorem ipsum dolor sit amet consectetur. </p>

      </div>
      </div>
    </div>
  )
}

export default Content
