import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Job1 from './jobs/Job1';
import Job2 from './jobs/Job2';
import Job3 from './jobs/Job3';
import Job4 from './jobs/Job4';
import Job5 from './jobs/Job5';
import Job6 from './jobs/Job6';



  

export default function Experience(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
       
      };
    

    return(
        <div className="experienceMain">
<div className="sliderBox"><Slider {...settings}>

<div className="slide"><Job1/></div>
<div className="slide"><Job2/></div>
<div className="slide"><Job3/></div>
<div className="slide"><Job4/></div>
<div className="slide"><Job5/></div>
<div className="slide"><Job6/></div>
</Slider></div>

      </div>
    )
}