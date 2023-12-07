
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Job1 from "./jobs/Job1";
import Job2 from "./jobs/Job2";
import Job3 from "./jobs/Job3";
import Job4 from "./jobs/Job4";
import Job5 from "./jobs/Job5";
import Job6 from "./jobs/Job6";

export default function ReactSlider() {


  return (
   
      <div className="sliderBox">
        <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}>

          <SwiperSlide>
            <Job1 />
          </SwiperSlide>
          <SwiperSlide>
            <Job2 />
          </SwiperSlide>
          <SwiperSlide>
            <Job3 />
          </SwiperSlide>
          <SwiperSlide>
            <Job4 />
          </SwiperSlide>
          <SwiperSlide>
            <Job5 />
          </SwiperSlide>
          <SwiperSlide>
            <Job6 />
          </SwiperSlide>
        </Swiper>
      </div>
  
  );
}