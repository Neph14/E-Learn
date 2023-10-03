import React from "react";
import Home from "./Home";
import Nav from "../UI/Navbar";
import Download from "./Download";
import HowItsWork from "./HowItsWork";
import Benefit from "./Benefit";
import Footer from "./Footer";
import News from "./News";
import ExpertTutor from "./ExpertTutor";
import CommunityPage from "./CommunityPage";

const Main = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Nav />
      <Home />
      <Download />
      <HowItsWork />
      <Benefit />
      <CommunityPage />
      <ExpertTutor />
      <News />
      <Footer />
    </div>
  );
};

export default Main;
