import SectionTitle from "../../../Shared/Components/SectionTitle";
import CafeCard from "./CafeCard";

const RecommendItems = () => {
    return (
        <div className="mt-32">
            <SectionTitle subTitle={"---Should Try---"} title={"CHEF RECOMMENDS"}></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                <CafeCard></CafeCard>
                <CafeCard></CafeCard>
                <CafeCard></CafeCard>
            </div>
        </div>
    );
};

export default RecommendItems;