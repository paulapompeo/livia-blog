import React from "react"
import { Title, Text,  List, ListItem } from './style';
import {SectionIntro, ContainerLayout } from "../common";

const Teach = () => {
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
            <div>
              <Title> Teaching </Title>
              <Text> Teaching Assistant for Advanced Seminar on Applied Academic Dissertation of the MPGC (Finance and Controllership): </Text>
                <List>
                  <ListItem>Jul 2019 - Dec 2019</ListItem>
                  <ListItem>Program: Professional Master’s in Management for Competitiveness (MPGC). FGV-EAESP (Brazil)</ListItem>
                  <ListItem>Topic: Research Methodology</ListItem>
                  <ListItem>Under the supervision of Professor Claudia Yoshinaga</ListItem>
                </List>
              <Text> Teaching Assistant for Corporate Finance: </Text>
                <List>
                  <ListItem>Mar 2019 - Sep 2019</ListItem>
                  <ListItem>Program: Professional Master’s in Finance and Economics FGV-EAESP (Brazil)</ListItem>
                  <ListItem>Topic: Corporate Finance</ListItem>
                  <ListItem>Under the supervision of Professor Hsia Hua Sheng</ListItem>
                </List>
              <Text> Teaching Assistantship for International Financial Management: </Text>
                <List>
                  <ListItem>Aug 2018 - Dec 2018</ListItem>
                  <ListItem>Program: Professional Master’s in Management for Competitiveness (MPGC). FGV-EAESP (Brazil)</ListItem>
                  <ListItem>Topic: International Financial Management</ListItem>
                  <ListItem>Under the supervision of Professor Hsia Hua Sheng</ListItem>
                </List>
              <Text> Teaching Assistantship for Financial Management: </Text>
                <List>
                  <ListItem>Jan 2018 - Jul 2018</ListItem>
                  <ListItem>Program: Professional Master’s in Management for Competitiveness (MPGC). FGV-EAESP (Brazil)</ListItem>
                  <ListItem>Topic: Corporate Finance</ListItem>
                  <ListItem>Under the supervision of Professor Hsia Hua Sheng</ListItem>
                </List>
            </div>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default Teach
