import React from "react";
import { Grid, SectionTitle, Stats } from "../style";
import { houseInfo } from "../../../mock/server";
import { LocationInfo } from "../../../utils/locationInfo";

export default function Location() {
   return (
      <section>
         <SectionTitle>Location</SectionTitle>
         <Grid row="2" column="3">
            {LocationInfo.map(({ id, text, info }) => (
               <Stats key={id}>
                  <h5 className="stats__title">{text}</h5>
                  <p className="stats__info">{houseInfo[0][info]}</p>
               </Stats>
            ))}
         </Grid>
      </section>
   );
}
