import { FaArrowRight } from "react-icons/fa";
import red from "../assets/red.png";
import white from "../assets/white.png";
const Bannar = () => {
    return (
        <div className="max-w-[1920px] mx-auto ">
            <div className="bg-black flex lg:flex-row flex-col  items-center justify-between gap-5 lg:gap-10 px-5 lg:px-24 py-10 lg:h-[852px]">
                <div className="space-y-3">
                    <h3 className="text-white text-[24px] lg:text-[49px] font-medium uppercase font-montserrat">Patrick Bet-David's  </h3>
                    <h1 className="text-[34px] lg:text-[70px] text-red-500 font-bold uppercase font-montserrat">Signed <br /> Collection</h1>
                    <button className="bg-white  font-medium lg:px-8 py-2 px-5 rounded flex items-center gap-3 justify-center">SHOP NOW <span className=""><FaArrowRight />
                    </span></button>
                    <img src="/public/img/pat-signature.png" alt="" className="w-72 lg:w-full"  />
                </div>
                <div className="flex flex-col sm:flex-row">
                    <img src={red} alt="" className="lg:w-96 w-36" />
                    <img src={white} alt="" className="lg:w-96 w-36" />
                </div>
            </div>
            <div className="bg-[#EC3339] grid lg:grid-cols-2  grid-cols-1 pt-10 lg:pt-0 lg:relative lg:h-[581px] px-5 lg:px-24">
                <div className="lg:absolute top-24 left-14">
                    <img src="/public/Icon/quotes.svg" alt="" className="lg:w-2/3 w-[100px]" />
                </div>
                <div className="flex flex-col justify-center lg:w-[1176px]  font-montserrat">
                    <h2 className="text-[24px] lg:text-[48px] font-bold text-white uppercase">Our mission is to enlighten, entertain</h2>
                    <h2 className="text-[24px] lg:text-[48px] font-bold text-white uppercase">and empower current and future </h2>
                    <h2 className="text-[24px] lg:text-[48px] font-bold text-white uppercase">leaders around the world.</h2>
                </div>
                <div className="">
                    <img src="/public/img/img (5).png" alt="" className="lg:w-[570px] lg:h-[725px] lg:absolute -top-36 right-20" />
                </div>
            </div>


        </div>


    );
};

export default Bannar;