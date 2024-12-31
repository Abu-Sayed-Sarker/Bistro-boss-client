
const SectionTitle = ({ subTitle, title }) => {
    return (
        <div className='text-center mb-12'>
            <p className='text-hilight-p text-xl italic'>{subTitle}</p>
            <hr className='text-hr w-[424px] border-t-4 mt-4 mx-auto' />
            <h1 className='text-[40px] uppercase'>{title}</h1>
            <hr className='text-hr w-[424px] border-t-4 mx-auto' />
        </div>
    );
};

export default SectionTitle;