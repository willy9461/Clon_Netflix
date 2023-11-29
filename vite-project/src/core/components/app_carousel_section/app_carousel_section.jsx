import React from 'react'
import { AppSwipper } from '../app_swiper/app_swipper'
import AppSwiperSlide from '../app_swiper/component/app_swiper-slide'

const AppCarouselSection = ({ title, data }) => {
  return (
    <>
    <h1 style={{marginBottom:"-.5em", fontSize:"1.5em"}}>{title}</h1>
        <AppSwipper>
          {data?.map((e) => (
            <AppSwiperSlide key={e.id}>
              <div
                style={{
                  width: "250px",
                  height: "150px",
                  backgroundImage: `url(${e.backdrop})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                 
                }}
              >
                <h3>{e.title}</h3>
              </div>
            </AppSwiperSlide>
          ))}
        </AppSwipper>
    </>
  )
}

export default AppCarouselSection