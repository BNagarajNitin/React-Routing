import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function WomensClothing() {
    const [getwomensdata,setGetWomensData]=useState([]);
    useEffect(()=>{
        getwomens();
    },[])
    const getwomens=()=>{
    axios.get("https://fakestoreapi.com/products/category/women's clothing").then((res)=>{
        console.log(res.data);
        setGetWomensData(res.data);


    })
    .catch(()=>{
        alert("Not able fetch data");
    })
}
  return (
    <div>
        <h2>Women's Clotting List</h2>
        <ul style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
        {
            getwomensdata.map((product)=>{
                return (
                    <li className='mt-3 '>
                        <Link to={`/productdetails/${product.id}`} className='text-decoration-none '>{product.title}</Link>
                    </li>
                )

            })
        }
        </ul>
    </div>
  )
}

export default WomensClothing