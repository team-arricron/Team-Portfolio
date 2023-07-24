// eslint-disable-next-line no-unused-vars
import React from "react";
import Contact from "../Contact/Contact";
import Team from "../Team/Team";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <Team></Team>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
