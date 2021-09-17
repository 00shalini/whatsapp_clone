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
import { useStateValue } from "./StateProvider";

function Sidebar() {


  const [{user}, dispatch] = useStateValue()

  React.useEffect(() => {

  })
  return (
    <SidebarCont>
      <SidebarHeader>
        <Avatar src={user?.photoURL}/>
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
