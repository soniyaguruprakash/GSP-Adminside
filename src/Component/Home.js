import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar'
import { Routes,Route  } from 'react-router-dom';

import Main from '../Component/Main'

function Home() {
  return (
  <>
        <div className='container-fluid'>  
            <div className="row">
                <div className="col-auto min-vh-100 bg-light text-primary" >
                <Sidebar />    
                </div>
                <div className='col bg-light'>
                    <Main />
                    {/* <div className='row bg-primary p-2'>
                        <div className='col '>
                            <input type='search' />
                        </div>
                    </div> */}
                    {/* // <div className='row'>
                    // 
                    // </div> */}



                     
                    
                    
                    </div>
                </div>
            </div> 
        

   
  </>
  )
}

export default Home