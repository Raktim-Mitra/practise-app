import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/1.jpg"
import img2 from "../Assets/2.jpg"
const Services = () => {
  return (
    <div >
         <Carousel
       infiniteLoop
       autoPlay
       showStatus={false}
       showThumbs={false}
       interval={1000}
      >
        <div>
          <img src={img1}  alt="Item1" style={{ width: '75%', height: '100vh' }}/>
          <p className='legend'>Full Stack</p>
        </div>
        <div>
          <img src={img2}  alt="Item2" style={{ width: '75%', height: '100vh' }}/>
          <p className='legend'>Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services