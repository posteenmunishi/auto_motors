import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="nav__section">
        <div>
          <Link className="hover:text-white" to="/">
            <h2 className="font-bold text-2xl">AutoMotors</h2>
          </Link>
        </div>
        <div>
          <ul className="flex">
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
  )
}

export default Navbar