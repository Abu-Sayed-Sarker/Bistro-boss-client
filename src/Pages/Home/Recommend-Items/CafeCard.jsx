
const CafeCard = ({ item }) => {
    const { image, recipe, name } = item || {}
    return (
        <div className="card bg-[#F3F3F3] rounded-none">
            <figure className="">
                <img
                    src={image}
                    alt="Shoes"
                    className="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p>{recipe}</p>
                <div className="">
                    <button className="py-5 px-7 bg-[#E8E8E8] border-b-4 rounded-lg text-hilight-p hover:bg-[#1F2937] hover:border-[#1F2937] uppercase font-semibold border-hilight-p">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default CafeCard;