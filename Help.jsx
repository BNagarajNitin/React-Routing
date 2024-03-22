import React from 'react'

function Help() {
  return (
    <div>
   
       <h3>KEY POINTS TO REMEMBER IN REACT ROUTING</h3> 
       <ol style={{display:"flex",alignItems:"flex-start",
    flexDirection:"column",marginTop:"30px",fontSize:"25px"}}>
        <li>Install React Router at root directory(npm install react-router-dom)</li>
        <li>Enclose App.js in BrowserRouter</li>
        <li>Define the routes</li>
        <li>In Main file Write Route And Enclose In Routes</li>
       </ol>
    </div>
  )
}

export default Help