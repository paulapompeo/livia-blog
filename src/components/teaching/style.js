import styled from 'styled-components';
import variables from '../../data/variables';

export const Title = styled.h1`
  font-size: 3rem;
  font-family: "GT-Walsheim-Pro-Bold";
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  color: #232323;
  a {
    color: #3F51B5;
    text-decoration: underline;
  }
`

export const List = styled.ul`
  list-style-type: none;
`
export const ListItem = styled.li`
  font-size: 1.2rem;
  line-height: 2;
  color: #232323;
`