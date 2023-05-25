import React from "react";
import { SectionTitle } from "../style";
import { ApplicationRow, Input } from "./style";

export default function Application() {
   return (
      <section>
         <SectionTitle>Schedule A Tour</SectionTitle>
         <form>
            <ApplicationRow>
               <Input>
                  <input required type="text" className="input" />
                  <label className="label">Date</label>
               </Input>
               <Input>
                  <select required name="" id="" className="input">
                     <option value=""></option>
                     <option value="10:00">10:00</option>
                     <option value="11:00">11:00</option>
                  </select>
                  {/* <input type="text" className="input" /> */}
                  <label className="label">Time</label>
               </Input>
            </ApplicationRow>
            <SectionTitle>Your Information</SectionTitle>
            <ApplicationRow>
               <Input>
                  <input required type="text" className="input" />
                  <label className="label">Name</label>
               </Input>
               <Input>
                  <input required type="text" className="input" />
                  <label className="label">Phone</label>
               </Input>
               <Input>
                  <input required type="text" className="input" />
                  <label className="label">Email</label>
               </Input>
            </ApplicationRow>
            <ApplicationRow>
               <Input>
                  <textarea required className="input" />
                  <label className="label">Enter Your Message</label>
               </Input>
            </ApplicationRow>
            <button type="submit">Submit a tour request</button>
         </form>
      </section>
   );
}
