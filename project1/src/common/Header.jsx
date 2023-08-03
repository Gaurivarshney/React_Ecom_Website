import React, { useEffect, useState } from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import {NavLink} from 'react-router-dom'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import './Header.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE } from '../controller/action';

const Header=()=> {
 const [showIcons, setIcons]= useState(false);
 const getData = useSelector(state=> state.AddReducer.carts)

 const [cartList , setCartList] =useState(false)
const handleClose =()=>{
    setCartList(null)
}
const dispatch = useDispatch()
const delet =(id)=>{
  dispatch(DELETE(id))
}

const [price, setprice] =useState(0)
const totals =()=>{
  let price =0;
  getData.map((e,i)=>(
    price = parseFloat(e.price)*e.qty + price

  ))
  setprice(price)
}
useEffect(()=>{
  totals()
}, [totals])
return (
    
      <header className='header'>
        <div className='logo'>
        <div className="left-logo">
            <a href="#" onClick={() => setIcons(!showIcons)}>
              <MenuSharpIcon/>
            </a>
          </div>
            <div className="logo-right">
            Gauri<span style={{color: "orange"}}>Ecom</span>
            </div>
        </div>
        <div className="center">
        <div
          className={
            showIcons ? "center-left mobile-menu-link" : "center-left"
          }>
          <ul>
            <li>
              <NavLink exact to="/home">HOME</NavLink>
            </li>
            <li>
              <NavLink exact to="/about">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink exact to="/blog">BLOG</NavLink>
            </li>
            <li>
              <NavLink exact to="/shop">SHOP</NavLink>
            </li>
            <li>
              <NavLink exact to="/contact">CONTACT US</NavLink>
            </li>
          </ul>
        </div>

            <div className="center-right">
            <input type="text" placeholder='Search Products...' />
            <SearchSharpIcon/>
            </div>
        </div>
        <div className="right">
        <div className="icons">
    <PersonSharpIcon style={{paddingRight: 20}}/>
    <FavoriteSharpIcon/>
        </div>
            <div className="myCart" >
            <ShoppingCartSharpIcon/>
                <button onClick={()=> setCartList(!cartList)}>Mycart({getData.length})</button>
            </div>
            <div className={cartList? "showCart": "hideCart"}>
            {
              getData.length?(
                <section className='show_details'>
                  <div className="details_title">
                    <h3>photo</h3>
                    <h4>name</h4>

                  </div>
                    <hr style={{width: 100}}  />
                  {
                    getData.map((e)=>(
                      <div className="details_content">
                        <div className="details_content_img">
                         <Link to={`/cart/${e.id}`} onClick={handleClose}>
                         <img src={e.cover} alt="...img" />
                         </Link>
                        </div>
                      <div className="details_content_con" style={{display: 'flex', flexDirection: 'column', lineHeight: 0, justifyContent: 'start'}}>
                        <p>{e.title.slice(0,19)}...</p>
                        <p>Quantity : {e.qty}</p>
                        <p>Price :{e.price}</p>
                      </div>
                      <div className="details_content_delete">
                        <i onClick={()=>delet(e.id)}>
                        <DeleteForeverRoundedIcon className='icony'/>
                        </i>
                      </div>
                      </div>
                    ))
                  }
                  <div className="total_price" style={{paddingLeft: 20}}>
                    <h3>Total: ${price}</h3>
                  </div>
                </section>
              ): <div className="empty">
              <img src="https://th.bing.com/th/id/OIP.lpHB3XYGkoJW8AhFFfuLSQHaG8?w=209&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                <p>Your Cart is empty</p>
              </div>
            }

            </div>
        </div>
      </header>
  
  )
}
const mapToProps = (state)=>{
  return{
    amount: state.amount
  }
}

export default connect(mapToProps)(Header)
