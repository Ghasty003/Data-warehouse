import './App.scss';
import logo from "./images/data-logo.png";
import logoTwo from "./images/data-logo2.png";
import dataOne from "./images/data-1.png";
import dataTwo from "./images/data-2.png";
import dataThree from "./images/data-3.png";
import dataFour from "./images/data-4.png";
import dataFive from "./images/data-5.png";
import dataSix from "./images/data-6.png";
import dataSeven from "./images/data-7.png";
import dataEight from "./images/data-8.png";
import dataNine from "./images/data-9.png";

import { useRef, useEffect, useState } from "react";

function App() {

  const ul = useRef();
  const bars = useRef();
  const slide = useRef();


  const func = () => {
    slide.current.left = "-100%";
  }
  setInterval(func, 1000);

  const handleToggle = () => {

    ul.current.classList.toggle("style");

    // if( bars.current.classList.contains("fa-bars") ) {
    //   bars.current.classList.replace("fa-bars", "fa-times");
    //   console.log("true");
    // } 
    // else if( bars.currentclassList.contains("fa-times")) {
    //   bars.current.classList.replace("fa-times", "fa-bars");
    //   console.log("also")
    // }
  }

  // alert(window.innerWidth)

  useEffect( () => {

    // const navToggle = document.querySelector(".fa");

    // navToggle.addEventListener("click", () => {
      
      
    // })
    
  }, []);

  return (
    <>
      <nav>
        <div className='logo'><img src={logo} alt="logo" /></div>

        {/* { show ?  : ""} */}
        <ul ref={ul}>

          <li><a href="#">About</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Feature</a></li>
          <li><a href="#">Sign up</a></li>

        </ul>

        <button className='btn'>Request Demo </button>

        <p onClick={handleToggle} ref={bars} ><i className='fa fa-bars'></i></p>
      </nav>


      {/* First section  */}

      <section className='first-section'>

        <div>
          <h1>Save your data storage here.</h1>

          <p>Data Warehouse is a data storage area that has been tested for security, 
            so you can store your data here safely but not be afraid of being stolen by others.
          </p>

          <button>Learn more</button>
        </div>

        <div>
          <img src={dataOne} alt="image" />
        </div>
        
      </section>

      {/* Second Section */}

      <section className="second-section">

        <div>
          <img src={dataTwo} alt="image" />
        </div>

        <div>
          <h2>We are a high-level data storage bank</h2>

          <p>The place to store various data that you can access at any time through the internet 
            and where you can carry it. This very flexible storage area has a high level of security. 
            To enter into your own data you must enter the password that you created when you registered 
            in this Data Warehouse.
          </p>
        </div>

      </section>


      {/* Third section  */}


      <section className="third-section">

        <div className='features'>
          <h2>Features</h2>
          
          <p>Some of the features and advantages that we provide for those 
            of you who store data in this Data Warehouse.
          </p>
        </div>

        <div className='container'>

          <div>
            <img src={dataThree} alt="image" />
            <div className='second-con'>
              <h3>Search Data</h3>
              
              <p>Don’t worry if your data is very large, the Data Warehouse provides a search engine, 
                which is useful for making it easier to find data effectively saving time.
              </p>

              <p>Learn more</p>
            </div>
          </div>

          <div>
            <img src={dataFour} alt="image" />
            <div className='third-con'>
              <h3>24 Hours Access</h3>
              
              <p>Access is given 24 hours a full morning to night and meet again in the morning, 
                giving you comfort when you need data when urgent..
              </p>

              <p>Learn more</p>
            </div>
          </div>

          <div>
            <img src={dataFive} alt="image" />
            <div className='third-con'>
              <h3>Print Out</h3>
              
              <p>Print out service gives you convenience if someday you need print data, just edit it all and just print it.
              </p>

              <p>Learn more</p>
            </div>
          </div>

          <div>
            <img src={dataSix} alt="image" />
            <div className='second-con'>
              <h3>Security Code</h3>
              
              <p>Data Security is one of our best facilities. Allows for your files to be safer. 
                The file can be secured with a code or password than you created, so only you can 
                open the file.
              </p>

              <p>Learn more</p>
            </div>
          </div>

        </div>

      </section>

      {/* Testimonial section */}


      <section className="testimonials">

        <h1>Testimonials</h1>

        <div className="testimonial-container">

          <div className='slide' ref={slide}>

            <img src={dataSeven} alt="johnfang" />

            <div>

              <div className='john'>
                <h2>John Fang</h2>
                <p>wordfaang.com</p>
              </div>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum iste aliquid laborum, 
                et sequi eaque ea error dolorum, est perferendis placeat minima temporibus magni recusandae 
                maxime ipsa quaerat pariatur fugiat.
              </p>

            </div>
          </div>

          <div className='slide'>

            <img src={dataEight} alt="johnfang" />

            <div>

              <div className='john'>
                <h2>John Fang</h2>
                <p>wordfaang.com</p>
              </div>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum iste aliquid laborum, 
                et sequi eaque ea error dolorum, est perferendis placeat minima temporibus magni recusandae 
                maxime ipsa quaerat pariatur fugiat.
              </p>

            </div>
          </div>

          <div className='slide'>

            <img src={dataNine} alt="johnfang" />

            <div>

              <div className='john'>
                <h2>John Fang</h2>
                <p>wordfaang.com</p>
              </div>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum iste aliquid laborum, 
                et sequi eaque ea error dolorum, est perferendis placeat minima temporibus magni recusandae 
                maxime ipsa quaerat pariatur fugiat.
              </p>

            </div>
          </div>

        </div>

      </section>

      <hr />


      {/* footer section */}

      <footer>

        <div className='container-one'>

          <div>
            <h1>Try for free!</h1>
            <p>Get limited 1 week free try our features!</p>
          </div>

          <div>
            <button>Learn more</button>
            <button>Request Demo</button>
          </div>

        </div>


        <div className="container-two">

          <div>

            <div>
              <img src={logoTwo} alt="logo" />
            </div>
            <h4>Warehouse Society</h4>
            <p>gbolahanajenikoko@gmail.com</p>
            <p>+2348101130376 (Main)</p>

          </div>

          <div>
            <h2>About</h2>
            <p>Profile</p>
            <p>Features</p>
            <p>Careers</p>
            <p>DW News</p>
          </div>


          <div>
            <h2>Help</h2>
            <p>Support</p>
            <p>Sign Up</p>
            <p>Guide</p>
            <p>Reports</p>
            <p>Q & A</p>
          </div>

          <div>
            <h2>Social Media</h2>
            <div>
              <p><i className='fa fa-youtube'></i></p>
              <p><i className='fa fa-instagram'></i></p>
              <p> <i className='fa fa-github'></i></p>
            </div>
          </div>

        </div>


        <div className='lastdiv'>
          <p> Copyright Datawarehouse™, &copy; Ghasty, 2022. Some rights reserved.</p>

          <p><i className='fas fa-comment-dots'></i></p>
        </div>

      </footer>

    </>

  );
}





export default App;