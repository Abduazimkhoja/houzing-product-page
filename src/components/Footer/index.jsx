import React from "react";
import { Container, FullBackground } from "../style";
import { Footer, Social } from "./style";
import { FooterList } from "../../utils/FooterList";

export default function Foot() {
   return (
      <FullBackground height="420px" bg="#0D263B">
         <Container>
            <Footer>
               <Footer.head>
                  {FooterList.map(({ id, title, list, icon, social }) => {
                     return (
                        <Footer.list key={id}>
                           <li>
                              <h5 className="footer__title">{title}</h5>
                           </li>
                           {list.map(({ id, link }, index) => {
                              return (
                                 <li key={id}>
                                    <a href="#" className="footer__link">
                                       {icon && <i className={icon[index]}></i>}
                                       {link}
                                    </a>
                                 </li>
                              );
                           })}
                           {social && (
                              <Social>
                                 {social.map(({ id, brand }) => {
                                    return (
                                       <li key={id}>
                                          <a
                                             target="_blank"
                                             href={`https://www.${brand}.com`}
                                             className="social__link"
                                          >
                                             <i className={`icon-${brand}`}></i>
                                          </a>
                                       </li>
                                    );
                                 })}
                              </Social>
                           )}
                        </Footer.list>
                     );
                  })}
               </Footer.head>

               <Footer.bottom>
                  <i className="icon-logo"></i>
                  <h5 className="productBy">
                     Copyright © 2021 CreativeLayers. All Right Reserved.
                  </h5>
               </Footer.bottom>
            </Footer>
         </Container>
      </FullBackground>
   );
}
