import React from "react"
import { Title, Text } from './style';
import {SectionIntro, ContainerLayout } from "../common";

const Research = () => {
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
            <div>
              <Title> Research </Title>
              <Text> Research interests: Financial markets, Portfolio management, Asset Pricing, Asset management, Mutual funds, Equity funds, ETFs, Active management, Competition, Fund fees. </Text>
              <Text> Carneiro, L.M., Eid Junior, W. and Yoshinaga, C.E. (2021). (in press). The implications of passive investments for active fund management: International evidence. <b className="text-primary lined-link"><a href="https://doi.org/10.1016/j.gfj.2021.100623" target="_blank">Global Finance Journal.</a></b></Text>
              <Text> Carneiro L. M. (2021). (in press). The Determinants of Mutual Fund Fees Around the World, Financial management of firms and financial institutions Conference, 6-7 September 2021 Ostrava (Czech Republic)</Text>
            </div>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default Research
