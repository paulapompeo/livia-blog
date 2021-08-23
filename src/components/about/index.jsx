import React from "react"
import { Title, Text } from './style';
import { SectionIntro, ContainerLayout } from "../common";

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
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
