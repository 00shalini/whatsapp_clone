import styled from "styled-components";

export const SidebarChatt = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1p solid #f6f6f6;
  & :hover {
    background-color: #ebebeb;
  }
`;

export const SidebarChatInfo = styled.div`
  
  margin-left: 15px;
  & > h2 {
      font-size: 16px;
      margin-bottom: 2px;
      margin-top: -45px;
      margin-left: 60px;
  }

   & > p {

      margin-left: 60px; 
   }

`;
