import chef from '../../../assets/home/chef-service.jpg'

const About = () => {
    return (

        <div
            className="hero h-[572px] mt-[90px]"
            style={{
                backgroundImage: `url(${chef})`,
            }}>
            <div className=""></div>
            <div className="text-center">
                <div className="max-w-3xl h-[335px] px-32 bg-white text-center flex flex-col justify-center">
                    <h1 className="mb-5 text-5xl">Bistro Boss</h1>
                    <p className="mb-5 text-base">
                        Professionally create interoperable interfaces with out-of-the-box schemas. Assertively create B2C meta-services vis-a-vis ubiquitous functionalities. Competently productivate an expanded array of action items before front-end e-services.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default About;