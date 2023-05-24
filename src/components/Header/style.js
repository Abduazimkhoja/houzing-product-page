import styled, { css, keyframes } from "styled-components";

export const Header = styled.header`
   height: inherit;

   display: flex;
   align-items: center;
   justify-content: space-between;

   .icon-logo {
      font-size: 36px;
   }
`;


export const List = styled.ul`
   width: ${(props) => props.width};
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 30px;
   li {
      color: ${(props) => props.color};
      &:hover {
         opacity: 0.7;
      }
   }
`;
