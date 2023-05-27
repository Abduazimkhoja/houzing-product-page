import React from "react";
import { ApplicationRow, Input, SectionTitle } from "../style";

export default function Respond() {
   return (
      <section>
         <form>
            <SectionTitle>Write a Review</SectionTitle>
            <ApplicationRow>
               <Input>
                  <input required type="text" className="input" />
                  <label className="label">Name</label>
               </Input>
               <Input>
                  <input required type="email" className="input" />
                  <label className="label">Email</label>
               </Input>
            </ApplicationRow>
            <ApplicationRow>
               <Input>
                  <textarea required className="input" />
                  <label className="label">Enter Your Message</label>
               </Input>
            </ApplicationRow>
            <button>Send your review</button>
         </form>
      </section>
   );
}
