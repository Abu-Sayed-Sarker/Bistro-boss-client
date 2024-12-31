import MenuItem from "../../../Shared/Components/MenuItem";

const MenuCategory = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12 py-8 px-32">
                {items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
            <div className="flex justify-center">
                <button className="py-4 px-16 bg-transparent border-b-4 rounded-lg  hover:bg-black hover:border-black uppercase font-semibold hover:text-white border-black">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;