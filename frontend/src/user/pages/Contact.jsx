import { FaHeart } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-1/2 flex flex-col items-center justify-center  bg-[#1E1E1E]">
        <div className="w-[80%] flex flex-col gap-4 my-14">
          <h1 className="text-gradient sm:text-[32px] text-[24px] font-semibold">
            Get in touch with us.
          </h1>
          <p className="text-white text-[15px]">
            You can email us directly at{" "}
            <span className="text-[#dd78ab]">support@usapeptideslab.com</span>{" "}
            or fill out the form below.
          </p>
          <form>
            <div className="flex flex-col gap-4 text-white">
              <input
                type="text"
                placeholder="Name"
                className="p-2 rounded-md border border-white bg-transparent focus:outline-none"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="p-2 rounded-md border border-white bg-transparent focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-2 rounded-md border border-white bg-transparent focus:outline-none"
              />
              <textarea
                placeholder="Message..."
                className="p-2 rounded-md border border-white bg-transparent h-32 focus:outline-none"
              ></textarea>
              <div className="border border-white flex flex-col items-center justify-center gap-4 p-4 rounded-md ">
                <div className="text-[13px]">
                  Please prove you are human by selecting the{" "}
                  <span className="text-[#CC3882]">house</span>.
                </div>
                <div className="flex gap-4">
                  <FaHeart className="hover:text-[#CC3882]" />
                  <FaHouseChimney className="hover:text-[#CC3882]" />
                  <FaKey className="hover:text-[#CC3882]" />
                </div>
              </div>

              <button
                type="submit"
                className="bg-transparent hover:bg-secondary hover:text-white text-secondary border border-secondary  p-2 rounded-3xl text-[20px] transition-colors"
              >
                SUBMIIT MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col items-center justify-center  bg-secondary text-white">
        <div className="w-[80%] flex flex-col gap-4 my-14">
          <h1 className="sm:text-[30px] text-[20px] font-semibold">
            Customer service is our priority!
          </h1>
          <div className="h-0.5 w-[30%] bg-white"></div>
          <p className="text-[15px]">
            At USA Peptides Lab, customer satisfaction is not taken lightly. We
            will do everything in our power to ensure that our customers are
            satisfied, even after products are delivered.
          </p>
          <div className="ml-8 mt-4 flex flex-col gap-2 text-[15px]">
            <div className="font-[600]">info@usapeptidelab.com</div>
            <div className="font-[600]">805-429-8132</div>
            <div className="font-[500]">
              5401 S Kirkman Rd suite 310, Orlando FL 32819
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
