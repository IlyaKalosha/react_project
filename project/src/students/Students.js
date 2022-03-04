import React, {useContext, useState} from "react";
import "../Base.css"
import Actions from "../actions/Actions";
import {CompaniesContext, EventsContext, MappingContext, StudentsContext} from "../App";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import FilterStudents from "./FilterStudents";


function Students(props) {
    const students = useContext(StudentsContext);
    const companies = useContext(CompaniesContext);
    const events = useContext(EventsContext);
    const mapping = useContext(MappingContext);

    const [currentStudent, setStudentId] = useState(students[0]?.id);

    return (
        <div className="RootContent">
            <div className='LeftSideContent'>
                <Actions type={'stud'} currentItemId={currentStudent} setStudents={props.setStudents}
                         setMapping={props.setMapping} setStudentId={setStudentId} filterVisible={1}/>
                <FilterStudents setStudentsNF={props.setStudentsNF} setStudents={props.setStudents}/>
                <AddStudent setStudents={props.setStudents} setStudentId={setStudentId} setStudentsNF={props.setStudentsNF}/>
                <EditStudent currentItemId={currentStudent} setStudents={props.setStudents} setStudentsNF={props.setStudentsNF}/>
                <hr/>
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
                    className='RightContentHeader'>{students.find(x => x.id === currentStudent)?.name} подробно
                </div>
                <hr/>
                <div className='RightItemsList'>
                    {
                        mapping.filter((item) => item.studentId === currentStudent).map((item) => {
                            return <div key={item.id} className='RightItem'>
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