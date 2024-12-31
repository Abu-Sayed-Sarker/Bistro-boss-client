
const CafeCard = () => {
    return (
        <div className="card bg-[#F3F3F3] rounded-none">
            <figure className="">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-2xl font-semibold">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="">
                    <button className="py-5 px-7 bg-[#E8E8E8] border-b-4 rounded-lg text-hilight-p hover:bg-[#1F2937] hover:border-[#1F2937] uppercase font-semibold border-hilight-p">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default CafeCard;