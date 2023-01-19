import React from "react";
import Banner from "../components/Homepage/Banner";
import Corona from "../components/Homepage/Corona";
import Footer from "../components/Homepage/Footer";

import Header from "../components/Homepage/Header";
import Review from "../components/Homepage/Review";
import Worker from "../components/Homepage/worker";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Worker></Worker>
      <Review></Review>
      <Corona></Corona>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
