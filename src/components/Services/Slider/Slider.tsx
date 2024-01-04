import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { serviceData } from "./Slider.data";
import { RxArrowTopRight, RxCube } from "react-icons/rx";

export function Slider() {
    return (
        <Swiper
            //breack points para hacer responsive segun el tamaño de ventana, cuanto menos ancha menos slides
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[225px] md:h-[340px] w-[300px] md:w-[1000px]">
              
            {
              //cursor-pointer
              serviceData.map((item, index) => (
                
                <SwiperSlide key={index}>
                    
                    <div className="flex px-6 py-8 h-[200px]  md:h-auto rounded-lg  bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
                        <div className="mb-4 text-xl md:text-4xl text-secondary">{item.icon}</div>
                        <div>
                            <h1 className = "text-sm md:text-4xl text-secondary">{item.title}</h1>
                            <p className="text-xs md:text-sm">{item.description}</p>
                            <p className="text-xs md:text-sm">{item.description2}</p>
                            <p className="text-xs md:text-sm">{item.description3}</p>
                        </div>
                        <div className="text-xl md:text-3xl">
                            <RxCube className="transition-all duration-300 group-hover:rotate-180 group-hover:text-[rgb(0,200,200)]" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
