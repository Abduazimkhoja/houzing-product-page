import React from "react";
import Feature from "./feature";
import { ContainerMini, Line } from "./style";
import Accommodation from "./accommodation";
import Details from "./details";
import Application from "./application";
import Location from "./location";

export default function Body() {
   return (
      <>
         {/* <Accommodation /> */}
         <ContainerMini>
            <Line />
            <Location/>
            <Line />
            <Details />
            <Line />
            <Feature />
            <Line />
            <Application />
            <Line />
         </ContainerMini>
      </>
   );
}
