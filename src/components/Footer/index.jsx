import React from "react";
import { Container, FullBackground } from "../style";
import { Footer, Social } from "./style";
import { FooterList } from "../../mock/FooterList";

export default function Foot() {
   return (
      <FullBackground height="420px" bg="#0D263B">
         <Container>
            <Footer>
               <Footer.head>
                  {FooterList.map(({ title, list, icon, social }) => {
                     return (
                        <Footer.list>
                           <li>
                              <h5 className="footer__title">{title}</h5>
                           </li>
                           {list.map((item, index) => {
                              return (
                                 <li>
                                    <a href="#" className="footer__link">
                                       {icon && <i className={icon[index]}></i>}
                                       {item}
                                    </a>
                                 </li>
                              );
                           })}
                           {social && (
                              <Social>
                                 {social.map((brand) => {
                                    return (
                                       <li>
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
