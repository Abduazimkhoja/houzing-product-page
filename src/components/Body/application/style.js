import styled, { css, keyframes } from "styled-components";

export const Input = styled.div`
   display: flex;
   flex: 1;

   position: relative;

   .input {
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
