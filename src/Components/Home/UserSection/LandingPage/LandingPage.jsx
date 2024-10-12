import React, { useEffect, useState } from 'react'
import "./LandingPage.css"
import { Link } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function LandingPage() {
   
   
   
  return (
    <main className='landingPage'>
      <div className='exploreNew'><p><Link>Men's Shoes</Link></p><p><Link>Women's Shoes</Link></p><p><Link>New Arrivals</Link></p></div>
      <div className="landingImgs">
        <div className="img"><img src="https://wallpapercave.com/wp/wp1866317.jpg" alt="" /></div>
      </div>
      <div className="landingCards">
        <div className="card">
            <div className="img"><img src="https://i.pinimg.com/736x/af/53/bb/af53bbbe2df640100f2fadecf925ebce--red-pumps.jpg" alt="" /></div>
            
               
        </div>
        <div className="card">
            <div className="img"><img src="https://pbs.twimg.com/media/FmuW3e7WQAEFlO0.jpg" alt="" /></div>
            
                
        </div>
        <div className="card">
            <div className="img"><img src="https://img.joomcdn.net/991226127c2607024cee7fdaaa68736e4d4501b5_original.jpeg" alt="" /></div>
            
              
        </div>
      </div>
      <div className="yellowLine">
            <div className="yellowTitle">
                <div><h1>WE MAKE BETTER THINGS IN A BETTER WAY</h1></div>
                <div><p>By looking to the world’s greatest innovator—Nature—we create shoes that deliver unrivaled comfort that you feel good in and feel good about.</p></div>
                <div><button>Shop Now</button></div>
            </div>
      </div>
      <div className="carousel">
            <div className="form">
                <div><h1>Want First Dibs?</h1></div>
                <div><p>Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.</p></div>
                <div>
                    <form>
                        <input type="text" placeholder='Enter Your Mail Here..' name='email' />
                        <textarea type="text" placeholder='Enter Your Enquary here..'/>
                        <input type="submit" className='btn' value={"Submit"}/>
                    </form>
                </div>
            </div>
      </div>
      <div className="carousel2">
        <div className='card'>
           <div><h2>Wear-All-Day Comfort</h2>
            <p>Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.</p></div>
            
        </div>
        <div className='card'>
           <div><h2>Sustainability In Every Step</h2></div> 
           <div>
            <p>From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now..</p></div>
            
        </div>
        <div className='card'>
           <div><h2>Materials From The Earth</h2>
            <p>We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugar cane. They’re soft, breathable, and better for the planet—win, win, win.</p></div>
            
        </div>
      </div>
    </main>
  )
}

export default LandingPage
