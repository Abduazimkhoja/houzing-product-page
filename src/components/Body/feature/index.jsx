import React from "react";
import { featuresList } from "../../../utils/Features";
import { Grid, SectionTitle, Stats } from "../style";
import { CircleIcon } from "../../style";

export default function Feature() {
   return (
      <section>
         <SectionTitle>Features</SectionTitle>
         <Grid row={4} column={4}>
            {featuresList.map(({ id, icon, text }) => {
               return (
                  <Stats key={id}>
                     <CircleIcon className={`icon-${icon}`}></CircleIcon>
                     <p className="stats__info">{text}</p>
                  </Stats>
               );
            })}
         </Grid>
      </section>
   );
}
