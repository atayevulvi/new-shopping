
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import girl1 from '../assets/girls/girl1.jpg'
import girl2 from '../assets/girls/girl2.jpg'
import girl3 from '../assets/girls/girl3.webp'
import girl4 from '../assets/girls/girl4.avif'
import girl5 from '../assets/girls/girl5.avif'
import girl6 from '../assets/girls/girl6.jpg'
import girl7 from '../assets/girls/girl7.png'
import girl8 from '../assets/girls/girl8.webp'
import girl9 from '../assets/girls/girl9.webp'






// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>

      <div className="basliq">
        <div className="container-xxl">
          <div className="row">
            <div className=" text-center mt-3">
              <h1 className='text-success mt-2 fs-1'>New Arrivals</h1>
              <p className='mt-4 fs-6'>Your Best Designer Outfits</p>
            </div>
          </div>
          <div className="swiper">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={girl1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={girl2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={girl3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={girl4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={girl5} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={girl6} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={girl7} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={girl8} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={girl9} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

    </>
  );
}


