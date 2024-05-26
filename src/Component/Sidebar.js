import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from 'react-router-dom';
import '../Stylesheet/side.css'


function Sidebar() {
  return (
    <>
      
      <label className='h2 px-1 pt-3 mt-2'><i class="bi bi-emoji-smile-fill"></i>Shivaya</label> 
      <hr />
        <ul style={{listStyle:'none', margin:'0', padding:'0'}}>
          <li className='list-item'>
            <NavLink to='/' className=' nav-link px-2 py-2' >
              <button className='btn' type='button' data-toggle='tooltip' data-placement='right' title='Dashboard'>
              <i class="bi bi-speedometer2 h4"></i></button>
               <span className=' d-none d-sm-inline fw-medium'> Dashboard</span>
            </NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='/productcard' className='nav-link px-2 py-2 ' >
            <button className='btn' type='button' data-toggle='tooltip' data-placement='right' title='Products'>
            <i class="bi bi-brilliance h4 "></i>
            </button>
              <span className=' d-none d-sm-inline fw-medium' >Products</span>
            </NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='/orderstatus' className='nav-link px-2 py-2'>
            <button className='btn' type='button' data-toggle='tooltip' data-placement='right' title='Order Status'>
            <i class="bi bi-receipt h4"></i> 
            </button>
              <span className='d-none d-sm-inline fw-medium'> Order Status</span>
            </NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='/accountdetails' className='nav-link px-2  py-2 ' >
            <button className='btn' type='button' data-toggle='tooltip' data-placement='right' title='Account Details'>
            <i class="bi bi-person-add h4"></i>
            </button>
              <span className=' d-none d-sm-inline fw-medium'> Account Details</span>
            </NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='/setting' className='nav-link px-2 py-2'>
            <button className='btn' type='button' data-toggle='tooltip' data-placement='right' title='Settings'>
            <i class="bi bi-gear h4"></i>
            </button>
            <span className='d-none d-sm-inline fw-medium' >Settings</span>
            </NavLink>
          </li>
        </ul>
       
    </>
  )
}

export default Sidebar