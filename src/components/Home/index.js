import React from "react";
import './style.js'
import { HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc , ParagraphSpan , HomeBtn} from "./style.js";
const Home = () => {
    return(
      <HomeSection>
      <div className="container">
          <HomeInformation>
              <HomeTitle>Hamza Nabil</HomeTitle>
              <HomeInfo>Creative Director</HomeInfo>
              <HomeDesc>
                  Iam a professional <ParagraphSpan>UX Designer</ParagraphSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
              </HomeDesc>
              <HomeBtn className="home-btn">Let's Begin</HomeBtn>
          </HomeInformation>
      </div>
  </HomeSection>
)
}
export default Home;