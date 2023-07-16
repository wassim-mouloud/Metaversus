const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex flex-1 flex-col sm:max-w-[250px] min-w-[210px] ">
    <div className="bg-[#323F5D] rounded-[24px] flex justify-center items-center w-[70px] h-[70px]">
      <img src={imgUrl} alt="" className="h-[1/2] w-[1/2] object-contain" />
    </div>
    <h1 className="mt-[30px] text-white font-bold">{title}</h1>
    <p className="text-white leading-[30.24px] mt-[20px]  "> {subtitle} </p>
  </div>
);

export default NewFeatures;
