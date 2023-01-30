import React, { Component } from 'react'
import Navbar from "../Components/Navbar/Navbar.Component"

const DefaultLayoutHoc = 
(Component)=>
({...props})=>{
    return (
        <div>
            <Navbar />
            <Component {...props} />
            
        </div>
    )
}

export default DefaultLayoutHoc