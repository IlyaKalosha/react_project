import React, {createContext} from "react";
import './App.css';
import Header from "./header/Header";
import Students from "./students/Students";
import {Route, Switch} from "react-router-dom";
import Companies from "./companies/Companies";
import Events from "./events/Events";
import Contacts from "./contacts/Contacts";
import Manuals from "./manuals/Manuals";
import {companiesG, eventsG, mappingG, studentsG} from "./data";

export const StudentsContext = createContext(studentsG);
export const EventsContext = createContext(eventsG);
export const CompaniesContext = createContext(companiesG);
export const MappingContext = createContext(mappingG);

function App() {
    const [students, setStudents] = React.useState(studentsG);
    const [companies, setCompanies] = React.useState(companiesG);
    const [events, setEvents] = React.useState(studentsG);
    const [mapping, setMapping] = React.useState(studentsG);

    return (
        <div className='App'>
            <Header/>
            <div className='Content'>
                <Switch>
                    <StudentsContext.Provider value={students}>
                        <CompaniesContext.Provider value={companies}>
                            <Route exact path="/students"
                                   render={(props) => <Students {...props} setAction={setStudents}/>}/>
                            <Route exact path="/companies" component={Companies}/>
                            <Route exact path="/events" component={Events}/>
                            <Route exact path="/contacts" component={Contacts}/>
                            <Route exact path="/manuals" component={Manuals}/>
                            <Route path="/" component={Students}/>
                            </CompaniesContext.Provider>
                    </StudentsContext.Provider>
                </Switch>
            </div>
        </div>
    );
}

export default App;
