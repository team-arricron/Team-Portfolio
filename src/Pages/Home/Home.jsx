// eslint-disable-next-line no-unused-vars
import React from "react";
import Contact from "../Contact/Contact";
import Team from "../Team/Team";
import Banner from "./Banner/Banner";
import Cards from "../../Card/Cards";
import HowProject from "../ProjectMarque/HowProject";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <Team></Team>
        <Cards></Cards>
        <HowProject></HowProject>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
