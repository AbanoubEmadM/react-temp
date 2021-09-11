import React from "react";
import {AboutSection , AboutInfo , InfoTitle , InfoSpan , InfoDir , InfoDesc , DescAnchor} from './style.js'
const About = () => {
    return(
        <AboutSection>
            <div className="container">
                <AboutInfo>
                    <InfoTitle><InfoSpan>This is</InfoSpan> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <DescAnchor href="#">explicabo</DescAnchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    )
}
export default About;