import { FaHeart } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col items-center justify-center  bg-[#1E1E1E]">
        <div className="w-[80%] flex flex-col gap-4 my-14">
          <h1 className="text-gradient text-4xl font-semibold">
            Get in touch with us.
          </h1>
          <p className="text-white ">
            You can email us directly at <span>support@corepeptides.com</span>{" "}
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
                <div>
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
                className="bg-transparent hover:bg-secondary hover:text-white text-secondary border border-secondary  p-2 rounded-md  transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center  bg-secondary text-white">
        <div className="w-[80%] flex flex-col gap-4 my-14">
          <h1 className="text-3xl font-semibold">
            Customer service is our priority!
          </h1>
          <div className="h-0.5 w-[30%] bg-white"></div>
          <p>
            At Core Peptides, customer satisfaction is not taken lightly. We
            will do everything in our power to ensure that our customers are
            satisfied, even after products are delivered.
          </p>
          <div className="ml-8 mt-4 flex flex-col gap-2 text-lg">
            <div>support@corepeptides.com</div>
            <div>805-429-8132</div>
            <div>5401 S Kirkman Rd suite 310, Orlando FL 32819</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
