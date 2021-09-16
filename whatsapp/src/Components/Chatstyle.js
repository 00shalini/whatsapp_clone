import styled from "styled-components";

export const ChatDetail = styled.div`
  flex: .65;
`;


export const ChatHeader = styled.div ` 

display: flex;
padding-left:20px;
padding-right: 20px;
align-items:center;
border-bottom: 1px solid lightgray;
`;


export const ChatHeaderInfo = styled.div`
  flex: 1;
  padding-left:20px;

   & > h3 {
       margin-bottom: 3px;
       font-weight: 500;
   }
    & > p {
        color: gray;
    }
`;

export const ChatHeaderRight = styled.div``;

export const ChatBody = styled.div ` 
`;

export const ChatFooter = styled.div ` 

`;