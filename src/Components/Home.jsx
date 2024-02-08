import React from 'react'
import vg from "../Assets/icon.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className='home'>
        <main>
          <h1>Techstar</h1>
          <p>Solution to all your problems.</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magni adipisci iste distinctio! Molestias veniam ad deleniti 
            unde rerum possimus dolore minus blanditiis corrupti esse praesentium 
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque, fugit consequatur iure quasi fuga, magni molestias
            nihil velit dolore dolorum accusantium error! Minus ipsam 
            impedit accusantium esse, culpa debitis deserunt, commodi 
            sint sapiente libero aspernatur laboriosam atque reprehenderit
            possimus repudiandae.
          </p>
        </div>
      </div>
      <div className="home4" id='brands' >
        <div>
          <p>Our Brands</p>
          <article>
            <div style={{animationDelay:"0.3s",}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s",}}>
              <AiFillAmazonCircle/> 
              <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.8s",}}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{animationDelay:"1s",}}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;