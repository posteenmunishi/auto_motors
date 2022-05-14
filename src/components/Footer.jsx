import React from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 ">
        <div>
          <h2 className="text-yellow-500 font-bold pb-4">Automotors</h2>
          <p className="max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div>
          <h2 className="text-yellow-500 font-bold pb-4">Links</h2>
          <ul>
            <li> <Link className="text-yellow-300" to="#">Home</Link></li>
            <li> <Link to="#">About us</Link></li>
            <li><Link to="#">Terms & conditions</Link></li>
            <li><Link to="#">Privacy policy</Link></li>

          </ul>
        </div>
        <div>
          <h2 className="text-yellow-500 font-bold pb-4">Follw us on</h2>
          <ul className="flex">
            <li className="pr-4"><Link className="text-yellow-300" to="#"><BsTwitter /></Link></li>
            <li className="pr-4"><Link className="text-yellow-300" to="#"><FaFacebook/></Link></li>
            <li className="pr-4"><Link className="text-yellow-300" to="#"><FaLinkedin /></Link></li>
            <li className="pr-4"><Link className="text-yellow-300" to="#"><FaInstagram /></Link></li> 
          </ul>
        </div>
      </div>
      <div className="py-6">
        <p className="text-center text-yellow-300">&copy;copyright 2022, All rights reserved by Automotors</p>
      </div>
    </div>
  )
}

export default Footer