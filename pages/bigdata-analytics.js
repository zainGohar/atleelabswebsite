import React from "react";
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";
import MainBanner from "@/components/BigdataAnalytics/MainBanner";
import WhatWeDo from "@/components/BigdataAnalytics/WhatWeDo";
import DiscoverArea from "@/components/BigdataAnalytics/DiscoverArea";
import Services from "@/components/BigdataAnalytics/Services";
import TeamStyleTwo from "@/components/Common/TeamStyleTwo";
import BigdataFunFacts from "@/components/BigdataAnalytics/BigdataFunFacts";
import Feedback from "@/components/BigdataAnalytics/Feedback";
import IndustriesWeServe from "@/components/BigdataAnalytics/IndustriesWeServe";
import BlogPost from "@/components/BigdataAnalytics/BlogPost";
import NewsletterStyleTwo from "@/components/Common/NewsletterStyleTwo";
import Footer from "@/components/_App/Footer";
import BlogPostStyleThree from "@/components/Common/BlogPostStyleThree";
import Partner from "@/components/DigitalAgencyPortfolio/Partner";
import CopyServices from "@/components/BigdataAnalytics/Services copy";
import Services2 from "@/components/BigdataAnalytics/Services2";
import 'bootstrap/dist/css/bootstrap.min.css';
const BigdataAnalytics = () => {
  return (
    <>
      <NavbarStyleFour />

      <MainBanner />

      {/* <WhatWeDo /> */}

      {/* <DiscoverArea /> */}

      <Services />
      <CopyServices/>
      <Services2/>

      <TeamStyleTwo />

      <BigdataFunFacts />

      <Feedback />

      {/* <IndustriesWeServe /> */}

      {/* <BlogPost /> */}

      {/* <NewsletterStyleTwo /> */}

      <Partner />

      <Footer />
    </>
  );
};

export default BigdataAnalytics;
