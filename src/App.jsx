import React from "react";
import Head from "./components/Header";
import Foot from "./components/Footer";
import Body from "./components/Body";
import { Container } from "./components/style";

export default function App() {
   return (
      <>
         <Head />
         <Container>
            <Body />
         </Container>
         <Foot />
      </>
   );
}
