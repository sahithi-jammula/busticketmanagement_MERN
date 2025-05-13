import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function BusTickets() {
  return (
    <>
    
    <div>
        <nav>
        <Link to="find-routes">findroutes</Link>
       
        
        </nav>
        
    </div>
    <div>
        <Outlet/>
    </div>
    </>
   
  )
}

