import React from 'react'
import "./UbdateProd.css"
import { useLocation } from 'react-router-dom';
function UbdateProd() {
    const location = useLocation();
     const { productData } = location.state || {};

    console.log(productData, "For updating");
    
  return (
    <section className='ubdateProd'>
     
            <div className="card">
                <div className="img"><img src="" alt="" /></div>
                <div><input type="text" value={"Name"}/></div>
                <div><input type="text" value={"Details"}/></div>
                <div><input type="text" value={"Price"}/></div>
                <div><button>Done</button></div>
            
      </div>
    </section>
  )
}

export default UbdateProd
