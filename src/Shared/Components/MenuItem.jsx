
const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex gap-8">
            <div>
                <img className="rounded-full rounded-tl-none w-[118px] h-[86px]" src={image} alt="" />
            </div>
            <div>
                <div className="flex justify-between">
                    <h4 className="text-xl">{name} ------------</h4>
                    <p className="text-base text-hilight-p">${price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;