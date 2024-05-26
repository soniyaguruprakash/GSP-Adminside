import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary d-flex justify-content-lg-between justify-content-md-center justify-content-sm-between">
        <div>
        <input type='search' className='form-control-sm ms-3' placeholder='search..' />
        </div>
        <div className='me-3'>
        <i class="bi bi-house-door-fill px-3 h4"></i>
        <i class="bi bi-chat-square-dots-fill px-3 h4"></i>
        <i class="bi bi-bell-fill px-3 h4"></i>
        </div>
        
        </nav>
  )
}

export default Navbar