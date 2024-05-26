import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function ProductCart() {

  const [data,setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/getproducts')
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))

  },[])
      console.log(data)
  return (
    <>
        <button className='btn '><NavLink to='/products'><i class="bi bi-plus-circle-fill h1"></i></NavLink></button>
      
        
        
       { data.map((singleData)=>{
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array((singleData.image.data.data)))
        );
        return(
          
          <div className='col col-lg-3 '> 
          <div className='card'>
            <div className='card-body'>
              <img src={`data:image/png;base64,${base64String}`} className='card-img-top' width={200} height={200} alt='...'/>
              <hr />
              <h5 className='card-title h5'>{singleData.title}</h5>
              <p className='card-text text-danger fw-bolder h5'>${singleData.price}</p>
              <p className='card-text fw-bold' style={{textIndent:'20px'}}>{singleData.desc}</p>
              <button className='btn btn-primary'>Add to Cart</button>
            </div>
            </div>
            </div>
          )
       }) }
        
       
        
           
        </>
  )
}

export default ProductCart