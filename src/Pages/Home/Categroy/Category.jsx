
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';


import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Shared/Components/SectionTitle';



const Category = () => {
    return (
        <div>

            <SectionTitle subTitle={"---From 11:00am to 10:00pm---"} title={"ORDER ONLINE"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="" /> <h3 className='uppercase text-4xl text-center -mt-20 pb-20 text-white'>Salads</h3></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /><h3 className='uppercase text-4xl text-center -mt-20 pb-20 text-white'>pizza</h3></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /><h3 className='uppercase text-4xl text-center -mt-20 pb-20 text-white'>Soups</h3></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /><h3 className='uppercase text-4xl text-center -mt-20 pb-20  text-white'>Desserts</h3></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /><h3 className='uppercase text-4xl text-center -mt-20 pb-20 text-white'>Salads</h3></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;