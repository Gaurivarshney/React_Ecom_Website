import React, { useState } from 'react'
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import './Products'
import './ProjectItem.css'
import { useDispatch } from 'react-redux';
import { Add } from '../../controller/action';
function ProductItem({data}) {
    const [openImg, setOpenImg]=useState(false);
    const [img, setImg]= useState ("");
    const onOpenImg =(src)=>{
        setImg(src)
        setOpenImg(src)
    }

const dispatch = useDispatch()
const addToCart =(e)=>{
    dispatch(Add(e))
}


  return (
    <>
    <div className='product-items' style={{display:"flex", flexWrap: "wrap"}}>
     {
        data.map((item)=>(
            <div className="box" key={item.id} >
                <div >
                <div className="img">
                    <img src={item.cover} alt="..img" className='product-img'/>
                    <div className="overlay">
                       <span>
                       <button className='btn'>
                            <LocalMallSharpIcon onClick={()=> addToCart(item)}/>
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

     <div className={openImg? "modelopen": "modelClose"}>
        <div className="onClickImage">
        <img src={img} alt="..img" />
        <button className='button' onClick={()=> setOpenImg(false)}>
     <CloseSharpIcon/>
        </button>

        </div>
     </div>
     </>
  )
}

export default ProductItem
