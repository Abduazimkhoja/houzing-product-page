import styled, { css, keyframes } from "styled-components";

export const FullBackground = styled.div`
   width: 100%;
   height: ${(props) => props.height};

   display: flex;
   align-items: center;

   background: ${(props) => props.bg};
`;

export const Container = styled.div`
   width: 1180px;
   height: inherit;
   margin: 0 auto;
`;

export const CircleIcon = styled.i`
   width: 35px;
   height: 35px;

   display: flex;
   align-items: center;
   justify-content: center;

   border-radius: 50%;
   background: #f6f8f9;

   transition: color 0.3s ease, background 0.3s ease;

   &:hover {
      color: #fff;
      background: #0061df;
      cursor: pointer;
   }
`;
