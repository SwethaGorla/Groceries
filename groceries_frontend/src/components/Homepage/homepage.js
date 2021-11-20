import React from 'react';
import './homepage.css';
import Navbar from '../NavBar/homeNavbar'

    
    function Homepage() {
        return(
            <div className="container">
                <Navbar/>
                <div id="text">GREAT DEALS</div>
                <div id="text1">100% ORGANIC</div>
                <div id="text2">CONTACTLESS DELIVERIES</div>
                <div className="mb-5">
                    <a href="/login" onClick={e=>this.enterSite(e)}><button id="button1" className="shadow-lg rounded">Get Your Groceries Now</button></a>
                      
                </div>
            </div>
        )
    }
export default Homepage;
    

