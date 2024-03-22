import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Jewelery() {
    const [getjewelerydata,setGetJeweleryData]=useState([]);
    useEffect(()=>{
        getjewelery();
    },[])
    const getjewelery=()=>{
    axios.get("https://fakestoreapi.com/products/category/jewelery").then((res)=>{
        console.log(res.data);
        setGetJeweleryData(res.data);


    })
    .catch(()=>{
        alert("Not able fetch data");
    })
}
  return (
    <div>
        <h2>Jewelery Product List</h2>
        <ul style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
        {
            getjewelerydata.map((product)=>{
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

export default Jewelery