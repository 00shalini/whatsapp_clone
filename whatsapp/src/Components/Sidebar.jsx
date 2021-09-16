import React from "react";
import {
  SidebarCont,
  SidebarSearch,
  SidebarChats,
  SidebarHeader,
  SidebarHeaderRight,
  SidebarSearchCont,
} from "./Sidebarstyle";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLargeOutlined";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVerticon from "@material-ui/icons/MoreVert";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { SidebarChat } from "./SidebarChat";

function Sidebar() {
  return (
    <SidebarCont>
      <SidebarHeader>
        <Avatar />
        <SidebarHeaderRight>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVerticon />
          </IconButton>
        </SidebarHeaderRight>
      </SidebarHeader>
      <SidebarSearch>
          <SidebarSearchCont>
          <SearchOutlined/>
          <input placeholder='Search or start a new chat' type='text'/>
          </SidebarSearchCont>
      </SidebarSearch>
      <SidebarChats>
          <SidebarChat addNewChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
      </SidebarChats>
    </SidebarCont>
  );
}

export { Sidebar };
