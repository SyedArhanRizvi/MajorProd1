import axios from 'axios';
import React, { useState } from 'react'
import "./AddProds.css"
function AddProds() {
  // const {productName, productDetails, price}
  const [productName, setProductName] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [price, setPrice] = useState();
  const [photo, setPhoto] = useState();

  const addingProductHandler = async (e)=>{
    e.preventDefault();
    const data = new FormData();
    data.append('productName', productName)
    data.append('productDetails', productDetails)
    data.append('price', price)
    data.append('photo',photo )
    try {
      const result = await axios.post("http://localhost:4000/api/product/addProduct", data, {
      withCredentials: true,
    });
    console.log(result);
    
    } catch (error) {
      console.log("Sorry we cant add your product due to this err ", error);
    }
    
  }

  return (
    <section className='productForm'>
        <div>
            <form onSubmit={addingProductHandler} encType='multipart/form-data'>
              <input type="text" name='productName' placeholder='Enter your product name here..' onChange={(e)=>setProductName(e.target.value)}  className='file'/>
              <input type="text" name='productDetails' placeholder='Enter your product details here..' onChange={(e)=>setProductDetails(e.target.value)}  className='file'/>
              <input type="Number" name='price' placeholder='Enter your product price here..' onChange={(e)=>setPrice(e.target.value)}  className='file'/>
              <input type="file" onChange={(e)=>setPhoto(e.target.files[0])}/>
              <input className='btn' type="submit" value={"Submit"}/>
            </form>
        </div>
    </section>
  )
}

export default AddProds
