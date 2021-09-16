import { Avatar } from "@material-ui/core";
import React from "react";
import { SidebarChatInfo } from "./SidebarChatstyle";
function SidebarChat() {
  return (
    <SidebarChat>
      <SidebarChatInfo>
        <Avatar src="https://avatars.dicebear.com/api/human/123.svg" />
        <h2>Room name</h2>
        <p>Last msg</p>
      </SidebarChatInfo>
    </SidebarChat>
  );
}

export { SidebarChat };
