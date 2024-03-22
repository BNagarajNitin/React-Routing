import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function MensClothing() {
    const [getmensdata,setGetMensData]=useState([]);
    useEffect(()=>{
        getmens();
    },[])
    const getmens=()=>{
    axios.get("https://fakestoreapi.com/products/category/men's clothing").then((res)=>{
        console.log(res.data);
        setGetMensData(res.data);


    })
    .catch(()=>{
        alert("Not able fetch data");
    })
}
  return (
    <div>
        <h2>Men's Clotting List</h2>
        <ul style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
        {
            getmensdata.map((product)=>{
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

export default MensClothing