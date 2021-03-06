import React from 'react'
import './Footer.css'


const Footer = () => (
  <div className="footer-dark">
  <footer>
      <div className="container">
          <div className="row">
              <div className="col-sm-6 col-md-3 item">
                  <h3>Services</h3>
                  <ul> 
                      <li><a href="/service/#lipblush__anchor__tag">Lip Blush</a></li>
                      <li><a href="/service/#powderBrow__anchor__tag">Ombre Brows</a></li>
                      <li><a href="/service/#microblading__anchor__tag">Microblading</a></li>
                      <li><a href="/service/#combo__anchor__tag">Microblading & Microshading (Combo)</a></li>
                  </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                  <h3>Contact Info</h3>
                  <ul>
                      <li><a href="mailto:browsjungle@gmail.com" target="_blank">browsjungle@gmail.com</a></li>
                      <li><a href="facetime:17472247451‬" target="_blank">(747) 224-7451‬</a></li>
                      <li><a href="https://goo.gl/maps/7yrrtxaKQ3K2vevY9" target="_blank">29229-A, Central Ave, Lake Elsinore, CA 92532</a></li>
                  </ul>
              </div>
              <div className="col-md-6 item text">
                  <h3>Brows Jungle</h3>
                  <p>
                  Microblading, Powder Brows, Lip Blushing in Lake Elsinore. Three times certified, fully licensed and insured. I use only superior products to enhance and highlight my client’s natural beauty.
                  </p>
              </div>
              <div className="col item social">
                <a href="https://www.facebook.com/browsjungles" target="_blank">  <i className="fab fa-facebook-f icon"></i></a>
                <a href="mailto:browsjungle@gmail.com" target="_blank"><i className="fa fa-envelope icon" ></i></a>
                <a href="https://www.instagram.com/browsjungle/" target="_blank"><i className="fab fa-instagram icon"></i></a>
                <a href="https://goo.gl/maps/CjQfJHT7Wm3AWKge7" target="_blank"><i className="fab fa-google icon"></i></a>
                </div>
          </div>
          <p className="copyright">Brows Jungle LLC © 2022</p>
      </div>
  </footer>
</div>
  );

export default Footer
