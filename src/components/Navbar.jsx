import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Collapse, initTWE } from 'tw-elements';
import "./Navbar.css"
initTWE({ Carousel, Collapse });


const Navbar = () => {
       

  return (
    <div>


    <div className="-800 p-4">
      
      <div className="nav__section">
        
        <div>
          <Link className="hover:text-white" to="/">
            <h2 className="font-bold text-2xl text-fill">AutoMotors</h2>
          </Link>
        </div>
        <button class="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" 
                    data-bs-target="#list"> 
                <span class="navbar-toggler-icon"></span> 
            </button> 
        <div id='li'class="li">
          <ul className="flex">
            <li className="p-4"><Link className="hover:text-white text-lg" to="">Sell a car</Link></li>
            <li className="p-4"><Link className="hover:text-white text-lg" to="">Buy a car</Link></li>
            <li className="p-4"><Link className="hover:text-white text-lg" to="">Contact us</Link></li>
            <li className="p-4"><Link className="hover:text-white text-lg" to="">Abouts</Link></li>

            <li className="p-4"><Link className="hover:text-white text-lg" to="">Signin</Link></li>
            <li className="p-4 bg-black rounded-md hover:bg-orange-500"><Link className="text-white text-lg" to="">Register</Link></li>
          </ul>
        </div>
        <div id='list'class="list">
          <ul className="text-center">
            <li className="p-4"><Link className="hover:text-white text-lg" to="">Sell a car</Link></li>
            <li className="p-4"><Link className="hover:text-white text-lg" to="">Buy a car</Link></li>
            <li className="p-4"><Link className="hover:text-white text-lg" to="">Contact us</Link></li>
            <li className="p-4"><Link className="hover:text-white text-lg" to="">Abouts</Link></li>

            <li className="p-4"><Link className="hover:text-white text-lg" to="">Signin</Link></li>
            <li className="p-4 bg-black rounded-md hover:bg-orange-500"><Link className="text-white text-lg" to="">Register</Link></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  
  )
}

export default Navbar