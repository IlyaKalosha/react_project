import React from "react";
import './App.css';
import Header from "./header/Header";
import Students from "./students/Students";
import {Route, Switch} from "react-router-dom";
import Companies from "./companies/Companies";
import Events from "./events/Events";
import Contacts from "./contacts/Contacts";
import Manuals from "./manuals/Manuals";


function App() {
  return (
    <div className='App'>
      <Header/>
      <div className='Content'>
          <Switch>
              <Route exact path="/students" component={Students}/>
              <Route exact path="/companies" component={Companies}/>
              <Route exact path="/events" component={Events}/>
              <Route exact path="/contacts" component={Contacts}/>
              <Route exact path="/manuals" component={Manuals}/>
              <Route path="/" component={Students}/>
          </Switch>
      </div>
    </div>
  );
}

export default App;
