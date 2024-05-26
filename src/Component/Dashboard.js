import React from 'react'

function Dashboard() {
  return (
    <>
        {/* <div className='row d-flex justify-content-around'> */}
        <div className='col pt-4  d-sm-block'> 
        <div className='card bg-primary p-2 text-light' >
            <div className='card-body'>
                <div className='card-title'>
                <i class="bi bi-tag-fill fs-4 p-4"> Category</i> 
                </div>
            </div>
        </div>
        </div>
        <div className='col pt-4 d-sm-block'>
        <div className='card bg-success p-2 text-light'>
            <div className='card-body'>
                <div className='card-title'>
                <i class="bi bi-exclamation-diamond-fill fs-4 p-4"> Alert</i>  
                </div>
            </div>
        </div>
        </div>
        <div className="col pt-4 d-sm-block">
        <div className='card bg-warning p-2 text-light'>
            <div className='card-body'>
                <div className='card-title'>
                <i class="bi bi-receipt fs-5 p-4"> Sales Revenue</i>   
                </div>
            </div>
        </div>

    </div>
    {/* </div> */}
    </>
  )
}

export default Dashboard