import styled, { css, keyframes } from "styled-components";

export const Line = styled.div`
   margin: 48px 0;
   border-bottom: 1px solid #e6e9ec;
`;

export const ContainerMini = styled.div`
   width: 880px;
`;

export const SectionTitle = styled.h5`
   margin-bottom: 24px;

   font-weight: 600;
   font-size: 18px;
   line-height: 28px;

   color: #0d263b;
`;

export const Stats = styled.div`
   ${(props) => props.mw && `max-width: ${props.mw};`}
   display: flex;
   align-items: center;
   ${(props) => props.sb && "justify-content: space-between;"}
   gap: 8px;

   .stats__title {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;

      color: #0d263b;
   }

   .stats__info {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;

      color: #696969;
   }
`;

export const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(${(props) => props.column}, 1fr);
   grid-template-rows: repeat(${(props) => props.row}, 1fr);
   grid-column-gap: ${(props) => props.columnGap || "20px"};
   grid-row-gap: ${(props) => props.rowGap || "24px"};
`;
