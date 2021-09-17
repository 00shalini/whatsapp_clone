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
import { Chat } from "./Chat";
import db from './firebase';

function Sidebar() {

  const [users, setUsers] = React.useState([])
  const [{user}, dispatch] = useStateValue()


  React.useEffect(() => {
   const unsubscribe = db.collection("users").onSnapshot((snapshot) => 
       setUsers(
         snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
         }))
       )
    ); 

    return () => {
      unsubscribe();
    }
  },[]);


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
        {users.map((user) => (
           <SidebarChat key={user.id} id={user.id} name={user.data.name}/>
        ))}
        </SidebarChats>
    </SidebarCont>
  );
}

export { Sidebar };
