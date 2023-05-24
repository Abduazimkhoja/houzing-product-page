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
   margin: 0 auto;
`;
