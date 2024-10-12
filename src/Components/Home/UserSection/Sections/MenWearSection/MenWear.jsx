import React, { useContext } from 'react'
import "./MenWear.css"
import axios from 'axios'
import { UserContext } from '../../../../../../Contexts/userContext'
function MenWear() {
    const {products} = useContext(UserContext);
    console.log(products);
    
  return (
    <section className='menWear'>
      <div className="headForMenWear">
        {/* Search Any Product */}
        <div><input type="text" placeholder='Search Product'/></div>

        {/* All Brands Selection*/}
        <div>
            <select>
                <option value="allBrands">Get All Brands</option>
                <option value="UCB">UCB</option>
                <option value="Levi's">Levi's</option>
                <option value="Tommy Hilfiger">Tommy Hilfiger</option>
                <option value="U.S. Polo Assn">U.S. Polo Assn.</option>
                <option value="FILA">FILA</option>
                <option value="GAP">GAP</option>
                <option value="Roadster">Roadster</option>
                <option value="Jack & Jones">Jack & Jones</option>
                <option value="Nautica">Nautica</option>
                <option value="Mast & Harbour">Mast & Harbour</option>
                <option value="American Crew">American Crew</option>
                <option value="Aeropostale">Aeropostale</option>
                <option value="Adidas Originals">Adidas Originals</option>
                <option value="Allen Solly">Allen Solly</option>
                <option value="Duke">Duke</option>
                <option value="Ed Hardy">Ed Hardy</option>
                <option value="Highlander">Highlander</option>
                <option value="H&M">H&M</option>
            </select></div>
        {/* All Category Selection*/}
            <div>
                <select>
                    <option value="All Categories">All Categories</option>
                    <option value="Shirts">Shirts</option>
                    <option value="T-shirts">T-shirts</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Jacket">Jacket</option>
                    <option value="Kurta">Kurta</option>
                    <option value="Suits & Blazzer">Suits & Blazzer</option>
                </select>
            </div>

              {/*Sort By Price*/}
              <input type="Number" placeholder='Enter Price Value'/>

      </div>
      <div className="bodyForMenWear">
        {
            !products ? <h1>Sorry Due to some reasons we can't show you products</h1> 
            : products.map((data)=>{
                return  <div className="card">
                <div className="img"><img src={data.photo} alt="" /></div>
                <div className='about'>
                    <div>Name</div>
                    <div>Details</div>
                    <div>Price</div>
                    <div className='btns'>
                        <button>Buy</button>
                        <button>Add To Cart</button>
                    </div>
                    <div>Wishlist</div>
                </div>
            </div>
            })
            
        }
           
      </div>
    </section>
  )
}

export default MenWear
