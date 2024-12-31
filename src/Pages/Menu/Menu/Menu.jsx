import { Helmet } from "react-helmet-async";
import SectionCover from "../../../Shared/Components/SectionCover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Shared/Components/SectionTitle";
import MenuCategory from "../MenuCategoryt/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            {/* offerd menu section  */}

            <SectionCover title={"Our menu"} img={menuImg}></SectionCover>
            <div className="mt-32"><SectionTitle subTitle="---Don't miss---" title={"TODAY'S OFFER"}></SectionTitle></div>
            <div className="mb-32"><MenuCategory items={offered}></MenuCategory></div>

            {/* soup menu section  */}

            <div className="mt-32"><SectionCover title={"dessert"} img={dessertImg}></SectionCover></div>
            <div className="mb-32"><MenuCategory items={dessert}></MenuCategory></div>

            {/* offerd menu section  */}

            <div className="mt-32"><SectionCover title={"pizza"} img={pizzaImg}></SectionCover></div>
            <div className="mb-32"><MenuCategory items={pizza}></MenuCategory></div>

            {/* offerd menu section  */}

            <div className="mt-32"><SectionCover title={"salad"} img={saladImg}></SectionCover></div>
            <div className="mb-32"><MenuCategory items={salad}></MenuCategory></div>

            {/* offerd menu section  */}

            <div className="mt-32"><SectionCover title={"soup"} img={soupImg}></SectionCover></div>
            <div className="mb-32"><MenuCategory items={soup}></MenuCategory></div>
        </div>
    );
};

export default Menu;