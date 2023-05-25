import React, { useState } from "react";
import { Grid, SectionTitle, Stats } from "../style";
import { houseInfo } from "../../../mock/server";
import { ReviewStats } from "../../../utils/reviews";
import { Progress } from "../../style";

export default function Reviews() {
   const { statistics } = houseInfo[0];

   const mean = () =>
      (Object.values(statistics).reduce((a, b) => a + b, 0) / 6).toFixed(2);

   return (
      <section>
         <SectionTitle>{mean()} (14 reviews)</SectionTitle>
         <Grid row={3} column={2}>
            {ReviewStats.map(({ id, text, info }) => (
               <Stats key={id} sb={true} mw="380px">
                  <h5 className="stats__info">{text}</h5>
                  <Stats>
                     <Progress max="5" value={statistics[info]}>
                        {statistics[info]}
                     </Progress>
                     <h5 className="stats__info">{statistics[info]}</h5>
                  </Stats>
               </Stats>
            ))}
         </Grid>
      </section>
   );
}
