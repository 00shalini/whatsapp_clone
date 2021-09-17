import "./App.css";
import { Sidebar } from "./Components/Sidebar";
import { Chat } from "./Components/Chat";
import React from "react";
import { Login } from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <div className="app-body">
        {!user ? (
          <Login />
        ) : (
          <Router>
            <Sidebar />

            <Route exact path="/users/:userId">
              <Chat />
            </Route>
          </Router>
        )}
      </div>
    </div>
  );
}

export default App;
