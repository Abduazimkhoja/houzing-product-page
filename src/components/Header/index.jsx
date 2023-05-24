import React from "react";
import { Container, FullBackground } from "../style";
import { Header, List } from "./style";

export default function Lesson() {
   return (
      <FullBackground height="64px" bg="#0D263B">
         <Container>
            <Header>
               <i className="icon-logo"></i>
               <nav>
                  <List width="333" color="#ffffff">
                     <a href="#">
                        <li>Home</li>
                     </a>
                     <a href="#">
                        <li>Properties</li>
                     </a>
                     <a href="#">
                        <li>Contacts</li>
                     </a>
                  </List>
               </nav>
               <button>login</button>
            </Header>
         </Container>
      </FullBackground>
   );
}
