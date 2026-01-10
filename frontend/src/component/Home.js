import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import MetricsSection from "../component/MetricsSection/MetricsSection";
import ComplianceSection from "./ComplianceSection";
import FooterSection from "./FooterSection";
import TimeTrackingSection from "./TimeTrackingSection";
import Features from "./Features";
import WallofLove from "./WallOfLove/WallOfLove"
import ValueComponent from "./ValueComponent/ValueComponent";
import CommunitySection from "./CommunitySection/CommunitySection"
import Navigator from "../App navigator/Navigator";
function Home() {
    return(

        <div>
        <Navigator />
        <Dashboard/>
       <MetricsSection/>
       <WallofLove/>
       <TimeTrackingSection/>
       <ValueComponent/>
       <Features/>
       <CommunitySection/>
       <ComplianceSection/>
       <FooterSection/>
        </div>
    );
  }
  
  export default Home;