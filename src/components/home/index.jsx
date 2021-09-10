import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Avatar, Title, Text, SubTitle, UniLogo } from './style';
import { SectionIntro, ContainerLayout, ResumeButton } from "../common";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "livia-profile.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      placeholderImagePavia: file(relativePath: { eq: "pavia.png" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImageBergamo: file(relativePath: { eq: "bergamo.png" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle> Ph.D. Student in Applied Economics and Management at University of Pavia and University of Bergamo</SubTitle>
              <ResumeButton href="Academic_CV_Final.pdf" target="_blank"> Download cv </ResumeButton>
              <div className='logo-container'>
                <UniLogo fluid={data.placeholderImagePavia.childImageSharp.fluid} />
                <UniLogo fluid={data.placeholderImageBergamo.childImageSharp.fluid} />
              </div>
            </div>
            <div>
              <Title> Hello, I’m Livia Mendes Carneiro </Title>
              <Text> I was born in Brazil and I am graduated in Business Administration at FGV-EAESP (Brazil). After graduating, I held different roles in Finance in the Brazilian private sector. </Text>
              <Text> Despite being in a good situation in my professional career, I was not intellectually or personally fulfilled. Consequently, I decided to pursue a master’s degree in Business Administration, concentrated in Finance, at FGV-EAESP.</Text>
              <Text> At the beginning of the master's course, I joined the Finance Research Center (FGVCef) of the university, where I worked on several research projects. I also worked as a teaching assistant (TA) in several Finance courses.</Text>
              <Text> I am currently a Ph.D. student in Applied Economics and Management at <b className="text-primary lined-link"><a href="https://sites.google.com/unipv.it/phd-aem/home-page" target="_blank">University of Pavia and University of Bergamo</a></b>.</Text>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default Home
