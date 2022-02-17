import React, {useState} from "react";
import "../Base.css"
import "./Students.css"
import {companies, events, mapping, students} from '../data'
import Actions from "../actions/Actions";


function Students() {
    const [currentStudent, setStudentId] = useState(1);

    return (
        <div className="RootContent">
            <div className='LeftSideContent'>
                <Actions/>
                <div className='LeftItemsList'>
                    {
                        students.map(student => {
                            return <div key={student.id} className='LeftItem'
                                        onClick={() => setStudentId(student.id)}>{student.name}</div>
                        })
                    }
                </div>
            </div>
            <div className='RightSideContent'>
                <div
                    className='RightContentHeader'>{students.find(x => x.id === currentStudent).name} {students.find(x => x.id === currentStudent).surname} подробно
                </div>
                <hr/>
                <div className='RightItemsList'>
                    {
                        mapping.filter((item) => item.studentId === currentStudent).map(item => {
                            return <div className='RightItem'>
                                <div>{item.id}</div>
                                <div>{item.date}</div>
                                <div>{companies.find(x => x.id === item.companyId).name}</div>
                                <div>{events.find(x => x.id === item.eventId).type}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Students