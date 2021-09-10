import React from "react"
import { AboutSection, Title, TitleAdress, Text, TextAdress } from './style';
import { SectionIntro, ContainerLayout, ResumeButton } from "../common";

const About = () => {
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <div>
            <Title> Current position </Title>
            <Text> PhD Student in Applied Economics and Management (AEM) at University of Pavia and University of Bergamo </Text>
            <Text> Email: livia.mendescarneiro01@universitadipavia.it </Text>
          </div>
          <AboutSection>
            <ResumeButton href="Academic_CV_Final.pdf" target="_blank"> Download cv </ResumeButton>
            <div>
              <TitleAdress> Address </TitleAdress>
              <TextAdress> Department of Economics</TextAdress>
              <TextAdress> University of Bergamo</TextAdress>
              <TextAdress> via dei Caniana, 2 - 24127 - Bergamo (Italy)</TextAdress>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
