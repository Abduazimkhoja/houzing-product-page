import React from "react";
import { houseInfo } from "../../../mock/server";
import { Section, SubTitle, Title } from "../../style";
import { HomeCard, Slider } from "./style";

export default function Cards() {
   return (
      <Section margin="96px">
         <Title>Similar listings</Title>
         <SubTitle>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
         </SubTitle>
         <Slider>
            <Slider.button direction="left">
               <i className="icon icon-arrow"></i>
            </Slider.button>
            <Slider.blockRow>
               <HomeCard>
                  <img src="" alt="" />
                  <div className="card__info">
                     
                  </div>
               </HomeCard>
            </Slider.blockRow>
            <Slider.button direction="right">
               <i className="icon icon-arrow"></i>
            </Slider.button>
         </Slider>
      </Section>
   );
}
