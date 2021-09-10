import styled from 'styled-components';
import variables from '../../data/variables';

export const AboutSection = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1fr 1.50fr;
    grid-gap: 10rem;
    text-align: left;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  font-family: "GT-Walsheim-Pro-Bold";
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`

export const TitleAdress = styled.h1`
  font-size: 1rem;
  margin: 6rem 0 0.8rem 0;
  font-family: "GT-Walsheim-Pro-Bold";
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  color: #232323;
`

export const TextAdress = styled.p`
  font-size: 1rem;
  color: #232323;
  margin: 0;
`