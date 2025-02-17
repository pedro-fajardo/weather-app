import styled from "styled-components";

export const SearchContainer = styled.div`
   display: flex;
   gap: 12px;
   margin: 20px 0;
   padding: 0 20px;
   max-width: 600px;
   width: 100%;
`;

export const Input = styled.input`
   flex: 1;
   padding: 12px 16px;
   border: 2px solid #e1e1e1;
   border-radius: 8px;
   font-size: 16px;
   transition: all 0.2s ease;

   &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
   }
`;

export const Button = styled.button`
   padding: 12px 24px;
   background-color: ${({ theme }) => theme.colors.primary};
   color: white;
   border: none;
   border-radius: 8px;
   font-size: 16px;
   font-weight: 600;
   transition: all 0.2s ease;
   white-space: nowrap;

   &:hover {
      background-color: #0056b3;
      transform: translateY(-1px);
   }

   &:active {
      transform: translateY(0);
   }
`;
