import React, {useEffect, useState}from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Electronic() {
    const [getelctronicsdata,setGetElectronicsData]=useState([]);
    useEffect(()=>{
        getelectronics();
    },[])
    const getelectronics=()=>{
    axios.get("https://fakestoreapi.com/products/category/electronics").then((res)=>{
        console.log(res.data);
        setGetElectronicsData(res.data);


    })
    .catch(()=>{
        alert("Not able fetch data");
    })
}
  return (
   
    <div>
        <h3>Electronics List</h3>
        <ul style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
        {
            getelctronicsdata.map((product)=>{
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

export default Electronic