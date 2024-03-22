import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Profile() {
    
  return (
    <div className='container mt-5' style={{boxShadow:"0 0 10px black", height:"400px"}}>
        <div className="row  h-100">
            <div className="col-4 bg-black " style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
                <Link  className="text-white text-decoration-none" to="electronics">Electronics</Link>
                <Link  className="text-white  text-decoration-none" to="jewelery">Jewelery's</Link>
                <Link  className="text-white  text-decoration-none" to="mensclothing">Men's Clothing</Link>
                <Link  className="text-white  text-decoration-none" to="womensclothing">Women's Clothing</Link>
            </div>
            <div className="col-8">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Profile