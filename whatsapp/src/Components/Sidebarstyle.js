import styled from 'styled-components';

export const SidebarCont = styled.div `
  display: flex;
  flex: .35;
  flex-direction: column;

  border: 1px solid black;

  @media (max-width:376px) {
      flex: 1;
      flex-direction: column;
      width:101%;
      height: 810px;
      margin-left: -10px;
      margin-right: -10px;
      margin-top: -15px;
  }
`

export const SidebarSearch = styled.div ` 

 display: flex;
 align-items: center;
 background-color: #f6f6f6;
 height: 39px;
 padding: 10px;
`

export const SidebarHeader = styled.div ` 

display: flex;
justify-content: space-between;
padding: 20px;
border: 1px solid lightgray;

`;

export const SidebarChats = styled.div ` 
 flex: 1;
 overflow: scroll;
 background-color: white;
`

export const SidebarHeaderRight = styled.div ` 
 display: flex;
 align-items: center;
 justify-content: space-between;
 min-width: 10vw;

 & > .MuiSvgIcon-root {
     margin-right: 2vw;
     font-size: 24pz !important;
 }

`

export const SidebarSearchCont = styled.div ` 
 display: flex;
 align-items: center;
 background-color: white;
 width: 100%;
 height: 35px;
 border-radius: 20px;

 & >input {
     border: none;
     margin-left: 10px;
 }

 & > .MuiSvgIcon-root {
     color: gray;
     padding: 10px;
 }
`