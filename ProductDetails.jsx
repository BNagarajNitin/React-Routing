import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  let pathparams=useParams();
  let[product,setProduct]=useState({
    category:"",
    description:"", 
    image:"", 
    price:"" ,
    title:"",
    rating:{
      rate:"",
      count:""
    }
  })
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${pathparams.id}`).then((res)=>{
      console.log(res);
      setProduct(res.data);
    })
  },[])
  return (
    <div>
     <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className='text-primary mt-5'>{product.category.toUpperCase()}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <img src={product.image} height={400} width="100%"/>
        </div>
        <div className="col-8">
          <dl style={{display:"flex", alignItems:"flex-start",flexDirection:"column",marginTop:"50px"}}>
            <dt>Product Title</dt>
            <dd>{product.title}</dd>
            <dt>Product Price</dt>
            <dd>${product.price}</dd>
            <dt>Product Description</dt>
            <dd>{product.description}</dd>
            <dt>Product Rating</dt>
            <dd>{product.rating.rate}</dd>
            <dt>Reviews</dt>
            <dd>{product.rating.count}</dd>
            
          </dl>

        </div>
      </div>
     </div>
    </div>
  )
}

export default ProductDetails