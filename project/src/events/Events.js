import React, {useContext, useState} from "react";
import "./Events.css"
import Actions from "../actions/Actions";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";
import {CompaniesContext, EventsContext, MappingContext, StudentsContext} from "../App";
import FilterEvents from "./FilterEvents";


function Events(props) {
    const events = useContext(EventsContext);
    const mapping = useContext(MappingContext);
    const companies = useContext(CompaniesContext);
    const students = useContext(StudentsContext);

    const [currentMapping, setMappingId] = useState(mapping[0]?.id);

    return (
        <div className="RootContent" id="EventsRootContent">
            <div className='RightSideContent' id='EventsContent'>
                <Actions type={'event'} currentItemId={currentMapping} setMapping={props.setMapping}
                         setMappingId={setMappingId}/>
                <FilterEvents setMapping={props.setMapping}/>
                <AddEvent setMapping={props.setMapping} setMappingId={setMappingId}/>
                <EditEvent currentItemId={currentMapping} setMapping={props.setMapping}/>
                <hr/>
                <div className='RightItemsList'>
                    {
                        mapping.map((item) => {
                            return <div key={item.id} className='RightItem' id='EventsRightItem'
                                        onClick={() => setMappingId(item.id)}>
                                <div>Событие {item.id}</div>
                                <div>{events.find(e => e.id === item.eventId)?.type}</div>
                                <div>Компания {companies.find(c => c.id === item.companyId)?.name}</div>
                                <div>{students.find(x => x.id === item.studentId)?.name}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Events