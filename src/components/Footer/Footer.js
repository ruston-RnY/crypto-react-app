import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='col'>
          <h2 className='text-footer'>Indo<span className='primary'>crypto</span></h2>
          <ul className='addres-footer'>
            <li>Jalan abc no.25</li>
            <li>Jakarta Barat, Indonesia</li>
            <li>021-23456</li>
          </ul>
        </div>
        <div className='col'>
          <h5>Support</h5>
          <span className='bar'></span>
          <a href='/'>Contact Us</a>
          <a href='/'>Chat</a>
          <a href='/'>Help Center</a>
          <a href='/'>FAQ</a>
        </div>
        <div className='col'>
          <h5>Developers</h5>
          <span className='bar'> </span>
          <a href='/'>Cloud</a>
          <a href='/'>Commerce</a>
          <a href='/'>Pro</a>
          <a href='/'>API</a>
        </div>
        <div className='col'>
          <h5>Company</h5>
          <span className='bar'> </span>
          <a href='/'>About</a>
          <a href='/'>Information</a>
          <a href='/'>Legal</a>
          <a href='/'>Privacy</a>
        </div>
        <div className='col sosial'>
          <h5>Sosial Media</h5>
          <span className='bar'> </span>
          <a href='/'><FaFacebook/> <span>Facebook</span></a>
          <a href='/'><FaInstagram/> <span>Instagram</span></a>
          <a href='/'><FaLinkedin/> <span>Linkedin</span></a>
        </div>
      </div>
    </div>
  )
}
