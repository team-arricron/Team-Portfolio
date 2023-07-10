import { FaLinkedin } from "react-icons/fa";
import img1 from "../../assets/Team/raju.jpg";
import img2 from "../../assets/Team/jion.jpg";
import img3 from "../../assets/Team/sagor.jpg";
import img4 from "../../assets/Team/rofiq.jpg";
import img5 from "../../assets/Team/sumon.jpg";
import img6 from "../../assets/Team/farhan.jpg";
import img7 from "../../assets/Team/rahad.jpg";
import img8 from "../../assets/Team/robin.jpg";
import img9 from "../../assets/Team/jabed.jpg";

import "./Team.css";
import { Link } from "react-router-dom";

const Team = () => {
  //   const MyProject = [
  //     {
  //         "id": "0001",
  //         "name":"Raju Talukdar",
  //         "img": img1,
  //         'Sub':"Team Leader"
  //     },
  //     {
  //         "id": "0002",
  //         "name":"Jion Ahamed",
  //         "img": img2,
  //         'Sub':"Front-End Developer"
  //     },
  //     {
  //         "id": "0003",
  //         "name":"Ahnaf Sagor",
  //         "img": img3,
  //         'Sub':"Backend-Developer"
  //     },

  // ]

  return (
    <section className="text-center my-16 mx-auto max-w-screen-xl">
      <div>
        <p className="text-blue-500 font-semibold mb-2">
          PEOPLE BEHIND THE SUCCESS
        </p>
        <h1 className="text-3xl text-white font-bold">
          Meet Our Expert People
          <br />
          of Team Arricorn
        </h1>
      </div>
      <div>
        <div className="my-6">
          <div>
            <div className="avatar teams relative inline-block">
              <Link
                to="https://www.linkedin.com/in/raju-talukdar/"
                className="social-media absolute bg-white bottom-0 right-0 z-10"
              >
                <FaLinkedin className="inline-block text-xl" />
              </Link>
              <div className="w-48 team rounded-full relative">
                <img src={img1} alt="" />
              </div>
            </div>
            <p className="text-xl text-white font-semibold">
              Md. Raju Talukdar
            </p>
            <p className="text-white">Team Leader [-Frontend-Developer-]</p>
          </div>
        </div>
      </div>
      <div className="my-6 grid lg:grid-cols-4 md:grid-cols-2 gap-0">
        <div className="my-6 teams">
          <div className="avatar relative inline-block">
            <Link
              to="https://www.linkedin.com/in/mohammadjion/"
              className="social-media absolute bg-white bottom-0 right-0 z-10"
            >
              <FaLinkedin className="inline-block text-xl" />
            </Link>
            <div className="w-48 team rounded-full relative">
              <img src={img2} alt="" />
            </div>
          </div>
          <p className="text-xl text-white font-semibold">Aahad Hasan Jion</p>
          <p className="text-white">Frontend Developer</p>
        </div>
        <div className="my-6 teams">
          <div className="avatar relative inline-block">
            <Link
              to="https://www.linkedin.com/in/md-khalid-hassan-sagor-81a428258/"
              className="social-media absolute bg-white bottom-0 right-0 z-10"
            >
              <FaLinkedin className="inline-block text-xl" />
            </Link>
            <div className="w-48 team rounded-full relative">
              <img src={img3} alt="" />
            </div>
          </div>
          <p className="text-xl text-white font-semibold">Ahnaf Sagor</p>
          <p className="text-white">Backend Developer</p>
        </div>
        <div className="my-6 teams">
          <div className="avatar relative inline-block">
            <Link
              to="https://www.linkedin.com/in/mdrofiqulislam85/"
              className="social-media absolute bg-white bottom-0 right-0 z-10"
            >
              <FaLinkedin className="inline-block text-xl" />
            </Link>
            <div className="w-48 team rounded-full relative">
              <img src={img4} alt="" />
            </div>
          </div>
          <p className="text-xl text-white font-semibold">Md. Rofiqul Islam</p>
          <p className="text-white">Full-Stack Developer</p>
        </div>
        <div className="my-6 teams">
          <div className="avatar relative inline-block">
            <Link
              to="https://www.linkedin.com/in/sumonkaysar/"
              className="social-media absolute bg-white bottom-0 right-0 z-10"
            >
              <FaLinkedin className="inline-block text-xl" />
            </Link>
            <div className="w-48 team rounded-full relative">
              <img src={img5} alt="" />
            </div>
          </div>
          <p className="text-xl text-white font-semibold">Md. Sumon Kaysar</p>
          <p className="text-white">Backend Developer</p>
        </div>
      </div>
      <div className="my-6 grid lg:grid-cols-4 md:grid-cols-2 gap-0">
        <div className="my-6 teams">
          <div className="avatar relative inline-block">
            <Link
              to="https://www.linkedin.com/in/md-farhan-sadiq/"
              className="social-media absolute bg-white bottom-0 right-0 z-10"
            >
              <FaLinkedin className="inline-block text-xl" />
            </Link>
            <div className="w-48 team rounded-full relative">
              <img src={img6} alt="" />
            </div>
          </div>
          <p className="text-xl text-white font-semibold">Md. Farhan Sadiq</p>
          <p className="text-white">Full-Stack Developer</p>
        </div>
        <div className="my-6 teams">
          <div className="avatar relative inline-block">
            <Link
              to="https://www.linkedin.com/in/developer-rahad-hasan/"
              className="social-media absolute bg-white bottom-0 right-0 z-10"
            >
              <FaLinkedin className="inline-block text-xl" />
            </Link>
            <div className="w-48 team rounded-full relative">
              <img src={img7} alt="" />
            </div>
          </div>
          <p className="text-xl text-white font-semibold">Md. Rahad Hasan</p>
          <p className="text-white">Full-Stack Developer</p>
        </div>
        <div className="my-6 teams">
          <div className="avatar relative inline-block">
            <Link
              to="https://www.linkedin.com/in/ishtiaq-robin/"
              className="social-media absolute bg-white bottom-0 right-0 z-10"
            >
              <FaLinkedin className="inline-block text-xl" />
            </Link>
            <div className="w-48 team rounded-full relative">
              <img src={img8} alt="" />
            </div>
          </div>
          <p className="text-xl text-white font-semibold">Ishtiaq Robin</p>
          <p className="text-white">Frontend Developer</p>
        </div>
        <div className="my-6 teams">
          <div className="avatar relative inline-block">
            <Link
              to="https://www.linkedin.com/in/md-jabed/"
              className="social-media absolute bg-white bottom-0 right-0 z-10"
            >
              <FaLinkedin className="inline-block text-xl" />
            </Link>
            <div className="w-48 team rounded-full relative">
              <img src={img9} alt="" />
            </div>
          </div>
          <p className="text-xl text-white font-semibold">Ahmed Jabed</p>
          <p className="text-white">Full Stack Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
