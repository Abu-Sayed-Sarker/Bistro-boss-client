import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs";
import Category from "../Categroy/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../Popular-Menu/PopularMenu";
import RecommendItems from "../Recommend-Items/RecommendItems";
import Testimonoals from "../Testimonial/Testimonoals";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <RecommendItems></RecommendItems>
            <Featured></Featured>
            <Testimonoals></Testimonoals>
        </div>
    );
};

export default Home;