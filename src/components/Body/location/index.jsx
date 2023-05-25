import React from "react";
import { Grid, SectionTitle, Stats } from "../style";
import { houseInfo } from "../../../mock/server";
import { LocationInfo } from "../../../utils/locationInfo";
import { IframeMap } from "./style";

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
         <IframeMap
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.150556297328!2d69.24538401243564!3d41.32733939959664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b50922256f9%3A0xd4691d23b9d26b5c!2sWebbrain%20Academy!5e0!3m2!1sru!2s!4v1684995144418!5m2!1sru!2s"
            referrerpolicy="no-referrer-when-downgrade"
         ></IframeMap>
      </section>
   );
}
