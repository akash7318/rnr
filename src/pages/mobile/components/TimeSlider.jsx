// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';

export default function TimeSlider(prop) {
  return (
    <div className='w-20 relative'>
      <p className='text-sm text-center font-semibold'>{prop.title}</p>
      <p className='w-full h-7 border-y border-[#4D4D4D] absolute left-0 top-11'></p>
      <Swiper
      className='h-20 text-center text-[#B2B2B2]'
      centeredSlides={true}
      grabCursor={true}
      loop={true}
      direction="vertical"
      slidesPerView={3}
      // onSlideChange={(e) => console.log(e.slides)}
      // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>10:00</SwiperSlide>
        <SwiperSlide>10:30</SwiperSlide>
        <SwiperSlide>11:00</SwiperSlide>
        <SwiperSlide>11:30</SwiperSlide>
        <SwiperSlide>12:00</SwiperSlide>
        <SwiperSlide>12:30</SwiperSlide>
        <SwiperSlide>13:00</SwiperSlide>
        <SwiperSlide>13:30</SwiperSlide>
        <SwiperSlide>14:00</SwiperSlide>
        <SwiperSlide>14:30</SwiperSlide>
        <SwiperSlide>15:00</SwiperSlide>
        <SwiperSlide>15:30</SwiperSlide>
        <SwiperSlide>16:00</SwiperSlide>
        <SwiperSlide>16:30</SwiperSlide>
        <SwiperSlide>17:00</SwiperSlide>
        <SwiperSlide>17:30</SwiperSlide>
        <SwiperSlide>18:00</SwiperSlide>
        <SwiperSlide>18:30</SwiperSlide>
        <SwiperSlide>19:00</SwiperSlide>
        <SwiperSlide>19:30</SwiperSlide>
        <SwiperSlide>20:00</SwiperSlide>
        <SwiperSlide>20:30</SwiperSlide>
        <SwiperSlide>21:00</SwiperSlide>
        <SwiperSlide>21:30</SwiperSlide>
        <SwiperSlide>22:00</SwiperSlide>
      </Swiper>
    </div>
  )
}
