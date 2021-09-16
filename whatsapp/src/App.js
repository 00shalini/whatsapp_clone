import "./App.css";
import { Sidebar } from "./Components/Sidebar";
import {Chat} from './Components/Chat';
import React from "react";
import { Login } from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";


function App() {

  const [{user}, dispatch] = useStateValue();

  return (
   
    <div className="app">
       {!user ? (
      <Login/>
    ) : (
      <div className="app-body">
      <Sidebar/>
      <Chat/>
    </div>
    )}
     
    </div>
  );
}

export default App;
