import styled, { css, keyframes } from "styled-components";

export const FullBackground = styled.div`
   width: 100%;
   height: ${(props) => props.height};

   display: flex;
   align-items: center;

   background: ${(props) => props.bg};
`;

export const Container = styled.div`
   max-width: 1220px;
   width: 100%;
   padding: 0 20px;
   height: inherit;
   margin: 0 auto;
`;

export const Section = styled.section`
   margin: ${({ margin }) => margin} 0;
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
      background: ${(props) => props.bg};
      cursor: pointer;
   }
`;

export const Progress = styled.progress`
   width: 150px;
   height: 5px;
   &[value] {
      &::-webkit-progress-bar {
         background: #e6e9ec;
         border-radius: 5px;
      }

      &::-webkit-progress-value {
         background: #0061df;
         border-radius: 5px;
      }
   }
`;

export const Title = styled.h3`
   margin-bottom: 8px;

   font-weight: 600;
   font-size: 28px;
   line-height: 36px;

   text-align: center;
   letter-spacing: -0.02em;

   color: #0d263b;
`;

export const SubTitle = styled.h5`
   margin-bottom: 32px;

   font-weight: 400;
   font-size: 16px;
   line-height: 24px;

   text-align: center;

   color: #696969;
`;

export const Has = styled.div`
   display: flex;
   
`;
