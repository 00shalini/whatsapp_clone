import styled, {css} from "styled-components";

export const ChatDetail = styled.div`
  flex: .65;
  display: flex;
  flex-direction: column;
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

export const ChatHeaderRight = styled.div`
   display: flex;
   justify-content: space-between;
   min-width: 100px;
`;

export const ChatBody = styled.div `
  flex: 1;
 background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
 background-repeat: repeat;
  background-position: center;
  padding: 30px;
  overflow: scroll;
`;

const ChatMessage = css `
    position: relative;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    width: fit-content;
    background-color: white;
    margin-bottom: 30px;


`;

const ChatReciever = css `

 margin-left: auto;
 background-color: #dcf8c6;
`
export const ChatConvo = styled.div`
     ${ChatMessage}
     ${ChatReciever}
`;


export const ChatName =styled.span ` 
  position: absolute;
  top:-15px;
  font-weight: 800;
  font-size: xx-small;
`

export const ChatTimestamp = styled.span ` 
  margin-left: 10px;
  font-size: xx-small;
`

export const ChatFooter = styled.div ` 

 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 62px;
 border-top: 1px solid lightgray;

 & > form {
     flex: 1;
     display: flex;
 }

 & > form > input{
     flex: 1;
     border-radius: 30px;
     padding: 10px;
     border: none;
 }

 & > form > button {
     display: none;
 }
  & > .MuiSvgIcon-root {
      padding: 10px;
      color: gray;
  }
`;