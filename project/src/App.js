import React, {createContext, useContext} from "react";
import './App.css';
import Header from "./header/Header";
import Students from "./students/Students";
import {Route, Switch} from "react-router-dom";
import Companies from "./companies/Companies";
import Contacts from "./contacts/Contacts";
import Manuals from "./manuals/Manuals";
import {companiesG, eventsG, mappingG, studentsG} from "./data";
import Events from "./events/Events";

export const StudentsContext = createContext(studentsG);
export const EventsContext = createContext(eventsG);
export const CompaniesContext = createContext(companiesG);
export const MappingContext = createContext(mappingG);

export const StudentsContextNF = createContext(studentsG);
export const EventsContextNF = createContext(eventsG);
export const CompaniesContextNF = createContext(companiesG);
export const MappingContextNF = createContext(mappingG);

function App() {

    const eventsC = useContext(EventsContext);
    const mappingC = useContext(MappingContext);
    const companiesC = useContext(CompaniesContext);
    const studentsC = useContext(StudentsContext);

    const eventsNFC = useContext(EventsContextNF);
    const mappingNFC = useContext(MappingContextNF);
    const companiesNFC = useContext(CompaniesContextNF);
    const studentsNFC = useContext(StudentsContextNF);

    const [students, setStudents] = React.useState(studentsC);
    const [companies, setCompanies] = React.useState(companiesC);
    const [events, setEvents] = React.useState(eventsC);
    const [mapping, setMapping] = React.useState(mappingC);

    const [studentsNF, setStudentsNF] = React.useState(studentsNFC);
    const [companiesNF, setCompaniesNF] = React.useState(companiesNFC);
    const [eventsNF, setEventsNF] = React.useState(eventsNFC);
    const [mappingNF, setMappingNF] = React.useState(mappingNFC);

    return (
        <div className='App'>
            <Header/>
            <div className='Content'>
                <Switch>
                    <StudentsContext.Provider value={students}>
                        <CompaniesContext.Provider value={companies}>
                            <EventsContext.Provider value={events}>
                                <MappingContext.Provider value={mapping}>
                                    <StudentsContextNF.Provider value={studentsNF}>
                                        <CompaniesContextNF.Provider value={companiesNF}>
                                            <EventsContextNF.Provider value={eventsNF}>
                                                <MappingContextNF.Provider value={mappingNF}>
                                                    <Route exact path="/students"
                                                           render={(props) => <Students {...props}
                                                                                        setStudents={setStudents}
                                                                                        setMapping={setMapping}
                                                                                        setStudentsNF={setStudentsNF}/>}/>
                                                    <Route exact path="/companies"
                                                           render={(props) => <Companies {...props}
                                                                                         setCompanies={setCompanies}
                                                                                         setMapping={setMapping}/>}/>
                                                    <Route exact path="/events"
                                                           render={(props) => <Events {...props}
                                                                                      setMapping={setMapping}/>}/>
                                                    <Route exact path="/contacts" component={Contacts}/>
                                                    <Route exact path="/manuals" component={Manuals}/>
                                                    <Route path="/" component={Students}/>
                                                </MappingContextNF.Provider>
                                            </EventsContextNF.Provider>
                                        </CompaniesContextNF.Provider>
                                    </StudentsContextNF.Provider>
                                </MappingContext.Provider>
                            </EventsContext.Provider>
                        </CompaniesContext.Provider>
                    </StudentsContext.Provider>
                </Switch>
            </div>
        </div>
    );
}

export default App;
