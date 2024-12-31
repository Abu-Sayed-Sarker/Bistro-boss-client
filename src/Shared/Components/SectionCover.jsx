import { Parallax } from "react-parallax";

const SectionCover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div>
                <div
                    className="hero bg-cover">
                    <div className=""></div>
                    <div className="hero-content bg-[#15151599] md:w-9/12 h-[400px] my-24  text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-7xl font-bold uppercase">{title}</h1>
                            <p className="mb-5 text-2xl font-semibold w-full">
                                Would you like to try a dish?
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default SectionCover;