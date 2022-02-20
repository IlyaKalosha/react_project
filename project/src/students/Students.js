import React, {useContext, useEffect, useState} from "react";
import "../Base.css"
import "./Students.css"
import {companiesG, eventsG, mappingG} from '../data'
import Actions from "../actions/Actions";
import {StudentsContext} from "../App";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";


function Students({setAction}) {
    const students = useContext(StudentsContext);
    const [currentStudent, setStudentId] = useState(students[0]?.id);

    return (
        <div className="RootContent">
            <div className='LeftSideContent'>
                <Actions type={'stud'} currentItemId={currentStudent} setAction={setAction} nextId={setStudentId}/>

                <AddStudent/>
                <EditStudent/>

                <div className='LeftItemsList'>
                    {
                        students.map((student, i) => {
                            return <div key={i} className='LeftItem'
                                        onClick={() => setStudentId(student.id)}>{student.name} {student.surname}</div>
                        })
                    }
                </div>
            </div>
            <div className='RightSideContent'>
                <div
                    className='RightContentHeader'>{currentStudent} {students.find(x => x.id === currentStudent)?.name} {students.find(x => x.id === currentStudent)?.surname} подробно
                </div>
                <hr/>
                <div className='RightItemsList'>
                    {
                        mappingG.filter((item) => item.studentId === currentStudent).map((item, i) => {
                            return <div key={i} className='RightItem'>
                                <div>{item.id}</div>
                                <div>{item.date}</div>
                                <div>{companiesG.find(x => x.id === item.companyId).name}</div>
                                <div>{eventsG.find(x => x.id === item.eventId).type}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Students