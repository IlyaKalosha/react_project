import React, {useContext} from "react";
import '../Base.css'
import {CompaniesContext, EventsContext, MappingContext, StudentsContext} from "../App";

function EditEvent(props) {
    const mappings = useContext(MappingContext);
    const students = useContext(StudentsContext);
    const companies = useContext(CompaniesContext);
    const events = useContext(EventsContext);

    function Edit() {
        const list = mappings;
        const eventSelect = document.getElementsByClassName('eventSelect')[1];
        const companySelect = document.getElementsByClassName('companySelect')[1];
        const studentSelect = document.getElementsByClassName('studentSelect')[1];
        const event = eventSelect.options[eventSelect.selectedIndex];
        const company = companySelect.options[companySelect.selectedIndex];
        const student = studentSelect.options[studentSelect.selectedIndex];


        const updatedMapping = {
            id: props.currentItemId,
            studentId: students.find(s => s.name === student.value).id,
            companyId: companies.find(c => c.name === company.value).id,
            eventId: events.find(e => e.type === event.value).id
        };

        const newList = list.filter(item => item.id !== props.currentItemId);
        newList.push(updatedMapping);
        newList.sort((a1, a2) => a1.id - a2.id);

        props.setMapping(newList);

        document.getElementsByClassName('EditRoot')[0].style.display = 'none';
    }

    return (
        <div className='EditRoot'>
            <h5>Изменить</h5>
            <div className='EditGrid'>
                <div>
                    <p>Тип события</p>
                    <p>Компания</p>
                    <p>Студент</p>
                </div>
                <div>
                    <select className='eventSelect'/>
                    <select className='companySelect'/>
                    <select className='studentSelect'/>
                </div>
            </div>
            <div className='EditButtons'>
                <button onClick={() => Edit()}>Подтвердить</button>
                <button onClick={() => {
                    document.getElementsByClassName('EditRoot')[0].style.display = 'none';
                }}>Отмена
                </button>
            </div>
        </div>
    );
}

export default EditEvent;