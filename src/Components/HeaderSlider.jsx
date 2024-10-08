
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../assets/5.png";
import img2 from "../assets/6.png";
import img3 from "../assets/7.png";
import img4 from "../assets/8.png";
import future from "../assets/future.png";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// className=" px-10 lg:px-24 bg-[url('./public/img/future_looks_brights.png')] bg-no-repeat  bg-red-600 "

const HeaderSlider = () => {

    return (
        <div className=" px-10 lg:px-24 bg-[#EA2127] relative pt-24">
            <div className='absolute lg:left-[60px]'>
                <img src={future} alt="" className='w-full' />
            </div>
            <div className='pt-24 pb-16'>

                <Swiper
                    // slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // Small devices
                        },
                        768: {
                            slidesPerView: 2, // Medium devices
                        },
                        1024: {
                            slidesPerView: 3, // Large devices
                        },
                        1280: {
                            slidesPerView: 4, // Extra large devices
                        },
                    }}
                >
                    <SwiperSlide className=' h-[500px] space-y-5'>
                        <div className='h-[300px]'>
                            <img src={img1} alt="" className='h-[300px] rounded-lg object-cover w-full' />
                        </div>
                        <div className='text-white'>
                            <h1>Army Green Active Short Sleeve </h1>
                            <div className='flex gap-5'>
                                <p>$ 34.95</p>
                                <p className='line-through'>$ 34.95</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' h-[500px] space-y-5'>
                        <div className='h-[300px]'>
                            <img src={img2} alt="" className='h-[300px] rounded-lg object-cover w-full' />
                        </div>
                        <div className='text-white'>
                            <h1>Army Green Active Short Sleeve </h1>
                            <div className='flex gap-5'>
                                <p>$ 34.95</p>
                                <p className='line-through'>$ 34.95</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' h-[500px] space-y-5'>
                        <div className='h-[300px]'>
                            <img src={img3} alt="" className='h-[300px] rounded-lg object-cover w-full' />
                        </div>
                        <div className='text-white'>
                            <h1>Army Green Active Short Sleeve </h1>
                            <div className='flex gap-5'>
                                <p>$ 34.95</p>
                                <p className='line-through'>$ 34.95</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' h-[500px] space-y-5'>
                        <div className='h-[300px]'>
                            <img src={img4} alt="" className='h-[300px] rounded-lg object-cover w-full' />
                        </div>
                        <div className='text-white'>
                            <h1>Army Green Active Short Sleeve </h1>
                            <div className='flex gap-5'>
                                <p>$ 34.95</p>
                                <p className='line-through'>$ 34.95</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' h-[500px] space-y-5'>
                        <div className='h-[300px]'>
                            <img src={img3} alt="" className='h-[300px] rounded-lg object-cover w-full' />
                        </div>
                        <div className='text-white'>
                            <h1>Army Green Active Short Sleeve </h1>
                            <div className='flex gap-5'>
                                <p>$ 34.95</p>
                                <p className='line-through'>$ 34.95</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' h-[500px] space-y-5'>
                        <div className='h-[300px]'>
                            <img src={img1} alt="" className='h-[300px] rounded-lg object-cover w-full' />
                        </div>
                        <div className='text-white'>
                            <h1>Army Green Active Short Sleeve </h1>
                            <div className='flex gap-5'>
                                <p>$ 34.95</p>
                                <p className='line-through'>$ 34.95</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' h-[500px] space-y-5'>
                        <div className='h-[300px]'>
                            <img src={img2} alt="" className='h-[300px] rounded-lg object-cover w-full' />
                        </div>
                        <div className='text-white'>
                            <h1>Army Green Active Short Sleeve </h1>
                            <div className='flex gap-5'>
                                <p>$ 34.95</p>
                                <p className='line-through'>$ 34.95</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' h-[500px] space-y-5'>
                        <div className='h-[300px]'>
                            <img src={img4} alt="" className='h-[300px] rounded-lg object-cover w-full' />
                        </div>
                        <div className='text-white'>
                            <h1>Army Green Active Short Sleeve </h1>
                            <div className='flex gap-5'>
                                <p>$ 34.95</p>
                                <p className='line-through'>$ 34.95</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' h-[500px] space-y-5'>
                        <div className='h-[300px]'>
                            <img src={img3} alt="" className='h-[300px] rounded-lg object-cover w-full' />
                        </div>
                        <div className='text-white'>
                            <h1>Army Green Active Short Sleeve </h1>
                            <div className='flex gap-5'>
                                <p>$ 34.95</p>
                                <p className='line-through'>$ 34.95</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default HeaderSlider;