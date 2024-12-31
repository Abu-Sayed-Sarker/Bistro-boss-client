import { Swiper, SwiperSlide } from "swiper/react";
import CafeCard from "../../Home/Recommend-Items/CafeCard";
import { Pagination } from "swiper/modules";



const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div >

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            items.map(item => <CafeCard
                                key={item._id}
                                item={item}
                            ></CafeCard>)
                        }
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OrderTab;