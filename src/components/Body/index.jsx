import React from "react";
import Feature from "./feature";
import { ContainerMini, Line } from "./style";
import Accommodation from "./accommodation";
import Details from "./details";
import Application from "./application";
import Location from "./location";
import Reviews from "./reviews";
import Respond from "./respond";
import Cards from "./cards";

export default function Body() {
   return (
      <>
         {/* <Accommodation /> */}
         <ContainerMini>
            <Line />
            <Location />
            <Line />
            <Details />
            <Line />
            <Feature />
            <Line />
            <Application />
            <Line />
            <Reviews />
            <Line />
            <Respond />
         </ContainerMini>
         <Cards />
      </>
   );
}
