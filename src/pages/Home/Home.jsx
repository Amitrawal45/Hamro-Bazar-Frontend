import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/HEro";
import LatestCollection from "../../components/LatestCollection/LatestCollection";
import BestSeller from "../../components/BestSeller/BestSeller";
import OurPolicy from "../../components/OurPolicy/OurPolicy";
import NewsLetterBox from "../../components/NewsLetterBox/NewsLetterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  );
};

export default Home;
