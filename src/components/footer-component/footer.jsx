import React,{useState} from 'react'
import "./footer.css"
import medico from "..//..//assets/medico.logo.webp";
import facebook from "..//..//assets/facebook.png";
import instagram from "..//..//assets/instagram.png";
import tiktok from "..//..//assets/tik-tok.png";
function Footer() {
  const [emailPlaceholder, setEmailPlaceholder] = useState('Your Email Address');

  return (
    <>
      <div className='footer'>
        <div className='footer-1'>
          <img class="medico" src={medico} alt="" />
          <ul>
            <li><a href="">Follow us on Instagram</a></li>
            <li><a href="">Follow us on Facebook</a></li>
            <li><a href="">Follow us on Twitter</a></li>
            <li><a href="">Follow us on Tik Tok</a></li>
          </ul>
          <div className='icons'>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={tiktok} alt="" />
          </div>


        </div>
        <div className='footer-2'>
          <h4 className='title'>Quick Links</h4>
          <ul>
            <li><a href="">About us</a></li>
            <li><a href="">Department</a></li>
            <li><a href="">Online payment</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Department</a></li>
          </ul>

        </div>

        <div className='footer-3'>
          <h4 className='title'>Explore</h4>
          <ul>
            <li><a href="">In the community</a></li>
            <li><a href="">IU health foundation</a></li>
            <li><a href="">Family support</a></li>
            <li><a href="">Business solution</a></li>
            <li><a href="">Community clinic</a></li>
          </ul>

        </div>
        <div className='footer-4'>
          <h4 className='title'>Resources</h4>
          <ul>
            <li><a href="">Lights were season</a></li>
            <li><a href="">Their is let wherein</a></li>
            <li><a href="">which given over</a></li>
            <li><a href="">Without given She</a></li>
            <li><a href="">Isn two signs think</a></li>
          </ul>

        </div>
        <div className='footer-5'>
          <p className='title'>Newsletter</p>
          <p className='seed'>Seed good winged wherein which night multiply midst does not fruitful</p>
          <div className='input-button'>
            <input className='footer-input' id="myInput" type="email" placeholder={emailPlaceholder}
              onFocus={() => setEmailPlaceholder('')}
              onBlur={() => setEmailPlaceholder('Your Email Address')} />
            <button className='footer-button'></button>
          </div>

        </div>

      </div>

    </>
  )
}

export default Footer
