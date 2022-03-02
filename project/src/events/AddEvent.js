import React, {useContext} from "react";
import '../Base.css'
import {CompaniesContext, EventsContext, MappingContext, StudentsContext} from "../App";

function Add(props) {
    const mappings = useContext(MappingContext);
    const students = useContext(StudentsContext);
    const companies = useContext(CompaniesContext);
    const events = useContext(EventsContext);

    function Add() {
        const list = mappings;
        const eventSelect = document.getElementsByClassName('eventSelect')[0];
        const companySelect = document.getElementsByClassName('companySelect')[0];
        const studentSelect = document.getElementsByClassName('studentSelect')[0];
        const event = eventSelect.options[eventSelect.selectedIndex];
        const company = companySelect.options[companySelect.selectedIndex];
        const student = studentSelect.options[studentSelect.selectedIndex];

        console.log(list.length);

        const newMapping = {
            id: mappings.length + 1,
            studentId: students.find(s => s.name === student.value).id,
            companyId: companies.find(c => c.name === company.value).id,
            eventId: events.find(e => e.type === event.value).id
        };

        eventSelect.selectedIndex = 0;
        companySelect.selectedIndex = 0;
        studentSelect.selectedIndex = 0;

        console.log(newMapping);
        let id = list.push(newMapping);
        props.setMapping(list);
        props.setMappingId(id);
        document.getElementsByClassName('AddRoot')[0].style.display = 'none';
    }

    return (
        <div className='AddRoot'>
            <h5>Новое</h5>
            <div className='AddGrid'>
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
            <div className='AddButtons'>
                <button onClick={() => Add()}>Подтвердить</button>
                <button onClick={() => {
                    document.getElementsByClassName('AddRoot')[0].style.display = 'none';
                }}>Отмена
                </button>
            </div>
        </div>
    );
}

export default Add;