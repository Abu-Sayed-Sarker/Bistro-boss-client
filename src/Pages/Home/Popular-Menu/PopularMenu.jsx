
import SectionTitle from "../../../Shared/Components/SectionTitle";
import MenuItem from "../../../Shared/Components/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();

    const popularItems = menu.filter(item => item.category === 'popular')




    return (
        <div className="m-[92px]">
            <SectionTitle subTitle={"---Check it out---"} title={"FROM OUR MENU"} ></SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
                {popularItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
            <div className="flex justify-center">
                <button className="py-4 px-16 bg-transparent border-b-4 rounded-lg  hover:bg-black hover:border-black uppercase font-semibold hover:text-white border-black mt-6">Read More</button>
            </div>
        </div>
    );
};

export default PopularMenu;