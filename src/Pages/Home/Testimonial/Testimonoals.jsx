import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../Shared/Components/SectionTitle";



import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';



import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";
import { useEffect, useState } from "react";


const Testimonoals = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <section className="mt-32 mb-32">
            <SectionTitle subTitle={"---What Our Clients Say---"} title={"TESTIMONIALS"}></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10">
                {
                    reviews.map(review => <SwiperSlide key={review._id}><div className="flex justify-center items-center flex-col text-center gap-6 px-16">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />

                        <FaQuoteLeft className="lg:text-8xl text-4xl" />
                        <p>{review.details}</p>
                        <h1 className="text-3xl text-hilight-p uppercase">{review.name}</h1>

                    </div></SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonoals;