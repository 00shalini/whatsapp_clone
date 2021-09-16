import { Avatar } from "@material-ui/core";
import React from "react";
import { SidebarChatInfo, SidebarChatt } from "./SidebarChatstyle";
function SidebarChat({addNewChat}) {

  const [seed, setSeed] = React.useState('')
  const [room, setRoom]  = React.useState('')

  React.useEffect(() => {
    setSeed(Math.floor(Math.random()* 5000));
  },[])

  const createchat = () => {
    setRoom(prompt('Enter chat name'))
    
  }

  return !addNewChat ? (
    <SidebarChatt>
      <SidebarChatInfo>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <h2>{room}</h2>
        <p>Last msg</p>
      </SidebarChatInfo>
    </SidebarChatt>
  ): (
     <SidebarChatt onClick={createchat}>
       <h2>Add New Chat</h2>
     </SidebarChatt>
  )
}

export { SidebarChat };
