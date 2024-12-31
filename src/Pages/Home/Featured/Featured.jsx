import SectionTitle from "../../../Shared/Components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className="mt-32 pt-32 hero-overlay text-white"
            style={{
                backgroundImage: `url(${featuredImg})`,
                backgroundAttachment: "fixed"
            }}>
            <SectionTitle subTitle={"---Check it out---"} title={"featured item"}></SectionTitle>
            <div className="md:flex justify-center items-center pt-12 pb-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>Aug 20 , 2028</p>
                    <p className="uppercase">Where can i get?</p>
                    <p>Appropriately reconceptualize inexpensive human capital for ubiquitous intellectual capital. Monotonectally procrastinate market positioning e-markets with client-centric bandwidth. Interactively utilize optimal experiences rather than leveraged alignments. Holisticly re-engineer worldwide strategic theme areas and compelling results. Uniquely visualize sustainable results whereas collaborative leadership skills. Progressively generate global data before top-line e-tailers.</p>
                    <button className="py-4 px-7 bg-transparent border-b-4 rounded-lg  hover:bg-white hover:border-white uppercase font-semibold hover:text-black border-white mt-6">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;