import React from "react";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
import AddUsers from "./AddUsers";
import EditUsers from "./EditUsers";
import Header from "./Header";
import UsersList from "./UsersList";
import Home from "./Home"
import NotFound from "./NotFound";

export default function Main() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/add" component={AddUsers} />
      <Route exact path="/edit/:id" component={EditUsers} />
      <Route exact path="/list" component={UsersList} />
     <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}
