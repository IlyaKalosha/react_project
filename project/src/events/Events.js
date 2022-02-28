import React, {useContext, useState} from "react";
import "./Events.css"
import Actions from "../actions/Actions";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";
import {CompaniesContext, EventsContext, MappingContext, StudentsContext} from "../App";


function Events({setAction}) {
    const events = useContext(EventsContext);
    const mapping = useContext(MappingContext);
    const companies = useContext(CompaniesContext);
    const students = useContext(StudentsContext);

    const [currentEvent, setEventId] = useState(mapping[0]?.id);

    return (
        <div className="RootContent" id="EventsRootContent">
            <div className='RightSideContent' id='EventsContent'>
                <Actions type={'stud'} currentItemId={currentEvent} setAction={setAction} nextId={setEventId}/>
                <AddEvent nextId={setEventId} setAction={setAction}/>
                <EditEvent currentItemId={currentEvent} nextId={setEventId} setAction={setAction}/>

                <div className='RightItemsList'>
                    {
                        mapping.map((item, i) => {
                            return <div key={i} className='RightItem' id='EventsRightItem'>
                                <div>Событие {item.id}</div>
                                <div>Компания {companies.find(c => c.id === item.companyId).name}</div>
                                <div>{students.find(x => x.id === item.studentId).name}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Events