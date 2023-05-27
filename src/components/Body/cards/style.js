import styled, { css, keyframes } from "styled-components";

export const HomeCard = styled.div`
   max-width: 33.33%;
   width: 100%;
   height: 100%;

   background: #ffffff;

   border: 1px solid #e6e9ec;
   border-radius: 3px;
`;

export const Slider = styled.div`
   height: ${(props) => props.width || "430px"};

   position: relative;
`;

Slider.blockRow = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
   gap: ${(props) => props.gap || "20px"};
`;

Slider.button = styled.button`
   width: 45px;
   height: 45px;

   position: absolute;
   top: 50%;
   ${(props) =>
      props.direction === "right" ? "right: -50px;" : "left: -50px;"}

   transform: translateY(-50%);

   display: flex;
   align-items: center;
   justify-content: center;

   border-radius: 50%;
   transition: transform 0.2s ease;
   background: #fff;

   ${(props) =>
      props.type === "opacity"
         ? css`
              background: #ffffff20;
              .icon {
                 color: #ffffff;
              }
           `
         : css`
              border: 1px solid #e6e9ec;
              box-shadow: 0px 10px 30px #d8d8d8;
              .icon {
                 color: #0d263b;
              }
           `}

   &:hover {
      transform: scale(1.05) translateY(-50%);
   }

   &:active {
      transform: scale(1) translateY(-50%);
   }

   .icon {
      font-size: 12px;
      ${(props) => props.direction === "right" && "transform: rotate(180deg)"}
   }
`;
