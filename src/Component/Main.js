import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from '../Navbar'
import Orderstatus from './OrderStatus';
import Products from './Products';
import ProductCart from './ProductCart';
import Dashboard from './Dashboard';

function Main() {
  return (
    <div>
        <Navbar />
        <div className='container-fluid'>
        <div className='row '>
            {/* <div className='col'> */}
            <Routes> 
                <Route path='/' element={<Dashboard />} />
                <Route path='/products' element={<Products />} />
                <Route path='/productcard' element={<ProductCart />} />
                 <Route path='/orderstatus' element={<Orderstatus />} />
            </Routes>
            {/* </div> */}
        </div>
        </div>
    </div>
  )
}

export default Main