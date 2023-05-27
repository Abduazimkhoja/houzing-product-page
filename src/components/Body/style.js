import styled, { css, keyframes } from "styled-components";

export const Line = styled.div`
   margin: 48px 0;
   border-bottom: 1px solid #e6e9ec;
`;

export const ContainerMini = styled.div`
   max-width: 880px;
   width: 100%;
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

export const Input = styled.div`
   display: flex;
   flex: 1;

   position: relative;

   .input {
      max-width: 880px;
      max-height: 100px;

      display: flex;
      flex: 1;
      padding: 8px 0;
      border-bottom: 2px solid #e6e9ec;
      &:focus,
      &:hover {
         border-color: #0061df;
      }

      &:focus,
      &:valid {
         & + .label {
            top: -12px;
            color: #000;
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;
            color: #0d263b;
         }
      }
   }

   .label {
      position: absolute;
      left: 0;
      top: 11px;

      font-size: 14px;

      transition: top 0.3s ease, font-size 0.3s ease, font-weight 0.3s ease;
      pointer-events: none;
   }
`;

export const ApplicationRow = styled.form`
   margin-bottom: 48px;
   display: flex;
   gap: 20px;
`;
