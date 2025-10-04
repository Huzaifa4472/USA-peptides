import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div className="bg-black flex justify-between  p-8 ">
      <h2 className="font-[600] text-[26px] text-white leading-[26px]">
        No downloads available yet.
      </h2>
      <Link to="/user/peptides" className="bg-transparent hover:bg-[#CC3882] text-[#CC3882] hover:text-white px-4 py-2 rounded-full font-medium border-2 border-[#CC3882] transition">
        BROWSE PRODUCT
      </Link>
    </div>
  );
};

export default Download;
