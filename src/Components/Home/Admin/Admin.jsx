import React, { useContext, useEffect, useState } from 'react'
import "./Admin.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../../../../Contexts/userContext'

function Admin() {
  // const [products, setProducts] = useState();
  const {products, setProducts} = useContext(UserContext)
  const logoutHandler = async ()=>{
    
    try {
      const result =  await axios.post("http://localhost:4000/api/logoutUser", {},
      {
      withCredentials: true,
    }
  );
    // console.log(result);
    } catch (error) {
      console.log(error);
    }
  
  }

  const getAllProducts = async ()=>{
    try {
       const data = await axios.get("http://localhost:4000/api/product/getAllProduct");
       setProducts(data.data)
        // console.log(data);
    } catch (error) {
      console.log("There is some issus to getting all prods ", error);
    }
  }
  useEffect(()=>{
    getAllProducts()
  }, []);

  const deleteProd = async (prodID)=>{
    try {
      const deletedProd =  await axios.delete("http://localhost:4000/api/product/delete/"+ prodID, {}, 
      {withCredentials:true});
      getAllProducts()
      console.log(deleteProd);
    } catch (error) {
      console.log("Sorry we can't delete your product due to this err ", error);
    }
  }

  return (
    <section className='adminSection'>
      <div className="headForAdmin">
        <div>
            <p>Orders 0</p>
        </div>
        <div>
            <p>Today's Sells 0</p>
        </div>
        <div>
            <p>Buyers Messages 0</p>
        </div>
        <div>
            <p>Costumers Feedbacks 0</p>
        </div>
        <div>
           <select name="" id="">
            <option value="allProducts">All Products</option>
            <option value="menWears">Men Wears</option>
            <option value="menShoes">Men Shoes</option>
            <option value="womenWears">Women Wears</option>
            <option value="womenShoes">Women Shoes</option>
           </select>
        </div>
        <div>
            <Link to={"/addProducts"}>Add More Products</Link>
        </div>
        <div>
            <p>Total Revenue 0</p>
        </div>
        <div>
            <button onClick={logoutHandler}>Logout</button>
        </div>
      </div>
      <div className="bodyForAllProds">
      {
        !products ? <h4>You have't add any product</h4> : products.map((data)=>{
          return   <div className="prodCard">
          <div className="img"><img src={data.photo} alt="" /></div>
          <div><h2>{data.productName}</h2></div>
          <div><h5>{data.productDetails}</h5></div>
          <div><p>@{data.price}</p></div>
          <div className="btns">
            <button> <Link to={{ pathname: "/updateProd", state: { productData: data } }}>Edit</Link></button>
            <button onClick={()=>deleteProd(data._id)}>Delete</button>
          </div>
        </div>
        })
      } 
      </div>
    </section>
  )
}

export default Admin
