import { Link } from "react-router-dom";
import "./Banner.css";
import image1 from "../../../assets/bannerIMG/1.jpg";
import image2 from "../../../assets/bannerIMG/2.jpg";
import image3 from "../../../assets/bannerIMG/3.jpg";
import image4 from "../../../assets/bannerIMG/4.jpg";

const Banner = () => {
  return (
    <div className="justify-center mx-auto flex items-center">
      <div className="links-text flex justify-center text-white">
        <ul className="grid col-1 relative lg:grid-cols-3 md:gird-cols-2 items-center justify-center z-50 text-white">
          <li className="project  cursor-pointer p-10">
            <h2 className=" font-bold text-3xl">
              <span className="z-50 font-semibold text-sm mr-4">01.</span>
              <Link to="" className="inline-block z-50 ">
                <span className="block font-normal sub-title">Design</span>{" "}
                <span className="text">Everybody sunshine</span>
              </Link>
            </h2>
            <div className="project-img -z-50">
              <img className="img" src={image1} alt="" />
            </div>
          </li>
          <li className="project  cursor-pointer p-10">
            <h2 className=" font-bold text-3xl">
              <span className="z-50 font-semibold text-sm mr-4">01.</span>
              <Link to="" className="inline-block z-50 ">
                <span className="block font-normal sub-title">Design</span>{" "}
                <span className="text">Everybody sunshine</span>
              </Link>
            </h2>
            <div className="project-img -z-50">
              <img className="img" src={image2} alt="" />
            </div>
          </li>

          <li className="project cursor-pointer  p-10">
            <h2 className=" font-bold text-3xl">
              <span className="z-50 font-semibold text-sm mr-4">01.</span>
              <Link to="" className="inline-block z-50 ">
                <span className="block font-normal sub-title">Design</span>{" "}
                <span className="text">Everybody sunshine</span>
              </Link>
            </h2>
            <div className="project-img -z-50">
              <img className="img" src={image3} alt="" />
            </div>
          </li>
          <li className="project cursor-pointer  p-10">
            <h2 className=" font-bold text-3xl">
              <span className="z-50 font-semibold text-sm mr-4">01.</span>
              <Link to="" className="inline-block z-50 ">
                <span className="block font-normal sub-title">Design</span>{" "}
                <span className="text">Everybody sunshine</span>
              </Link>
            </h2>
            <div className="project-img -z-50">
              <img className="img" src={image4} alt="" />
            </div>
          </li>
          <li className="project cursor-pointer  p-10">
            <h2 className=" font-bold text-3xl">
              <span className="z-50 font-semibold text-sm mr-4">01.</span>
              <Link to="" className="inline-block z-50 ">
                <span className="block font-normal sub-title">Design</span>{" "}
                <span className="text">Everybody sunshine</span>
              </Link>
            </h2>
            <div className="project-img -z-50">
              <img className="img" src={image4} alt="" />
            </div>
          </li>
          <li className="project cursor-pointer  p-10">
            <h2 className=" font-bold text-3xl">
              <span className="z-50 font-semibold text-sm mr-4">01.</span>
              <Link to="" className="inline-block z-50 ">
                <span className="block font-normal sub-title">Design</span>{" "}
                <span className="text">Everybody sunshine</span>
              </Link>
            </h2>
            <div className="project-img -z-50">
              <img className="img" src={image4} alt="" />
            </div>
          </li>
          <li className="project cursor-pointer  p-10">
            <h2 className=" font-bold text-3xl">
              <span className="z-50 font-semibold text-sm mr-4">01.</span>
              <Link to="" className="inline-block z-50 ">
                <span className="block font-normal sub-title">Design</span>{" "}
                <span className="text">Everybody sunshine</span>
              </Link>
            </h2>
            <div className="project-img -z-50">
              <img className="img" src={image4} alt="" />
            </div>
          </li>
          <li className="project cursor-pointer  p-10">
            <h2 className=" font-bold text-3xl">
              <span className="z-50 font-semibold text-sm mr-4">01.</span>
              <Link to="" className="inline-block z-50 ">
                <span className="block font-normal sub-title">Design</span>{" "}
                <span className="text">Everybody sunshine</span>
              </Link>
            </h2>
            <div className="project-img -z-50">
              <img className="img" src={image4} alt="" />
            </div>
          </li>
          <li className="project cursor-pointer  p-10">
            <h2 className=" font-bold text-3xl">
              <span className="z-50 font-semibold text-sm mr-4">01.</span>
              <Link to="" className="inline-block z-50 ">
                <span className="block font-normal sub-title">Design</span>{" "}
                <span className="text">Everybody sunshine</span>
              </Link>
            </h2>
            <div className="project-img -z-50">
              <img className="img" src={image4} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
