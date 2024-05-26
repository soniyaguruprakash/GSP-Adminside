import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'

function Products() {
    const [ title,setTitle] = useState('')
    const [ price,setPrice] = useState('')
    const [ desc,setDesc] = useState('')
    const [ image,setImage] = useState()

    console.log(title,price,desc,image)
    const handleSubmit = async(e)=>{
        e.preventDefault();
       
          const formData =  new FormData();
          formData.append('title',title);
          formData.append('price',price);
          formData.append('desc',desc);
          formData.append('image',image);
        const result = await axios.post('http://localhost:5000/addproduct',formData)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        alert('Product Details saved Successfully')
        console.log(result)    
          
    }
    
  return (
    <>  
          <button className='btn '><NavLink to='/productcard'><i class="bi bi-arrow-left-circle-fill h1 "></i></NavLink></button>
        <div className='col col-lg-6 bg-primary p-4 '>
        <h3>Adding Products</h3>
          <form onSubmit={handleSubmit} encType='multipart/form-data' >
            <div className='form-group'>
            <label for='title'>Title</label>
            <input type='text' id='title' required name='title'  onChange={(e)=>setTitle(e.target.value)} placeholder='Product title' className='form-control' />
            </div>
            <div className='form-group'>
            <label for='price'>Price</label>
            <input type='number' id='price' required name='price' onChange={(e)=>setPrice(e.target.value)} className='form-control' placeholder='$ product price' />
            </div>
            <div className='form-group'>
            <label for='desc'>Description</label>
            <textarea className='form-control' required name='desc' id='desc' onChange={(e)=>setDesc(e.target.value)} placeholder='Description..'></textarea>
            </div>
            <div className='form-group'>
            <label for='image'>Upload Image</label>
            <input 
            type='file'
            id='image' 
            required 
            accept='image/*' 
            name='image'  
            onChange={(e)=>{setImage(e.target.files[0])}} 
            className='form-control' />
            </div>
            <button type='submit' className='btn m-2 bg-success fw-bold text-light'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Products