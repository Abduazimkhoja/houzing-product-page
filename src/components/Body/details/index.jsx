import React from "react";
import { Grid, SectionTitle, Stats } from "../style";
import { PropertyDetailsName } from "../../../utils/property";
import { houseInfo } from "../../../mock/server";

export default function Details() {
   return (
      <section>
         <SectionTitle>Property Details</SectionTitle>
         <Grid row="4" column="3">
            {PropertyDetailsName.map(({ id, text, info }) => (
               <Stats key={id}>
                  <h5 className="stats__title">{text}</h5>
                  <p className="stats__info">{houseInfo[0][info]}</p>
               </Stats>
            ))}
         </Grid>
      </section>
   );
}
