import { Helmet } from "react-helmet-async";
import SectionCover from "../../../Shared/Components/SectionCover";
import orderImg from '../../../assets/shop/banner2.jpg'

const Order = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>

            <SectionCover title={"Our shop"} img={orderImg}></SectionCover>
        </div>
    );
};

export default Order;