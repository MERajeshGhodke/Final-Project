import axios from 'axios';
import React from 'react'
import {useForm} from "react-hook-form";


const WishList=()=>{
   const {register, handleSubmit} = useForm()

   const getRegisterWishlist= (wishlistObj)=>{
    console.log(wishlistObj);
    axios.post("http://127.0.0.1:8000/buyer/wishlist/",wishlistObj)
    
   }
  return (<>
  <center>
   <div className="row">
        <div className="col-md-3">
            <h1 className="text-primary">Create Wishlist</h1>
            <form onSubmit={handleSubmit(getRegisterWishlist)}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Select User" {...register("user")}/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Select Auction" {...register("auctions")}/>
                </div>
                
                <div className="mb-3 text-center">
                    <input type="submit" value='Add To Wishlist'className="btn btn-outline-success"/>
                </div>
            </form>
        </div>
       </div>
       </center>
  </>)
}

export default WishList;