import React, {useContext, useState} from "react";
import {CompaniesContext, EventsContext, MappingContext, StudentsContext} from "../App";


function Actions(props) {
    const [filterState, setSelected] = useState(1);

    const students = useContext(StudentsContext);
    const companies = useContext(CompaniesContext);
    const events = useContext(EventsContext);
    const mappings = useContext(MappingContext);

    function add() {
        if (props.type === 'stud') {
            document.getElementsByClassName('AddRoot')[0].style.display = 'grid';
        }
        if (props.type === 'comp') {
            document.getElementsByClassName('AddRoot')[0].style.display = 'grid';
        }
        if (props.type === 'event') {
            document.getElementsByClassName('AddRoot')[0].style.display = 'grid';
            var eventSelect = document.getElementsByClassName('eventSelect')[0];
            eventSelect.innerHTML = '';
            for (var i = 0; i < events.length; i++) {
                var el = document.createElement("option");
                el.textContent = events[i].type;
                el.value = events[i].type;
                eventSelect.appendChild(el);
            }
            var companySelect = document.getElementsByClassName('companySelect')[0];
            companySelect.innerHTML = '';
            for (var i = 0; i < companies.length; i++) {
                var el = document.createElement("option");
                el.textContent = companies[i].name;
                el.value = companies[i].name;
                companySelect.appendChild(el);
            }
            var studentSelect = document.getElementsByClassName('studentSelect')[0];
            studentSelect.innerHTML = '';
            for (var i = 0; i < students.length; i++) {
                var el = document.createElement("option");
                el.textContent = students[i].name;
                el.value = students[i].name;
                studentSelect.appendChild(el);
            }
        }
    }

    function update() {
        if (props.type === 'stud') {
            const name = document.getElementsByClassName('Name')[1];
            const year = document.getElementsByClassName('Year')[1];
            const group = document.getElementsByClassName('Group')[1];
            const selectSpec = document.getElementsByClassName('Spec')[1];

            name.value = students.find(item => item.id === props.currentItemId).name;
            year.value = students.find(item => item.id === props.currentItemId).year;
            group.value = students.find(item => item.id === props.currentItemId).group;
            selectSpec.selectedIndex = students.find(s => s.id === props.currentItemId).spec - 1;

            document.getElementsByClassName('EditRoot')[0].style.display = 'grid'
        }
        if (props.type === 'comp') {
            const name = document.getElementsByClassName('Name')[1];

            name.value = companies.find(item => item.id === props.currentItemId).name;

            document.getElementsByClassName('EditRoot')[0].style.display = 'grid'
        }
        if (props.type === 'event') {
            document.getElementsByClassName('EditRoot')[0].style.display = 'grid';
            var eventSelect = document.getElementsByClassName('eventSelect')[1];
            eventSelect.innerHTML = '';
            for (var i = 0; i < events.length; i++) {
                var el = document.createElement("option");
                el.textContent = events[i].type;
                el.value = events[i].type;
                eventSelect.appendChild(el);
            }
            var companySelect = document.getElementsByClassName('companySelect')[1];
            companySelect.innerHTML = '';
            for (var i = 0; i < companies.length; i++) {
                var el = document.createElement("option");
                el.textContent = companies[i].name;
                el.value = companies[i].name;
                companySelect.appendChild(el);
            }
            var studentSelect = document.getElementsByClassName('studentSelect')[1];
            studentSelect.innerHTML = '';
            for (var i = 0; i < students.length; i++) {
                var el = document.createElement("option");
                el.textContent = students[i].name;
                el.value = students[i].name;
                studentSelect.appendChild(el);
            }

            eventSelect.selectedIndex = mappings.find(m => m.id === props.currentItemId).eventId - 1;
            companySelect.selectedIndex = mappings.find(m => m.id === props.currentItemId).companyId - 1;
            studentSelect.selectedIndex = mappings.find(m => m.id === props.currentItemId).studentId - 1;
        }
    }

    function remove() {
        if (props.type === 'stud') {
            const list = students;
            const newList = list.filter(item => item.id !== props.currentItemId);
            props.setStudents(newList);

            props.setStudentId(newList[0].id);

            const list2 = mappings;
            const newList2 = list2.filter(item => item.studentId !== props.currentItemId);
            props.setMapping(newList2);
        }
        if (props.type === 'comp') {
            const list = companies;
            const newList = list.filter(item => item.id !== props.currentItemId);
            props.setCompanies(newList);

            props.setCompanyId(newList[0].id);

            const list2 = mappings;
            const newList2 = list2.filter(item => item.companyId !== props.currentItemId);
            props.setMapping(newList2);
        }
        if (props.type === 'event') {
            const list = mappings;
            const newList = list.filter(item => item.id !== props.currentItemId);
            props.setMapping(newList);
            props.setMappingId(newList[0].id);
        }
    }

    function filter() {
        if (filterState) {
            document.getElementsByClassName('FilterRoot')[0].style.display = 'grid';
            setSelected(0);
        } else {
            document.getElementsByClassName('FilterRoot')[0].style.display = 'None';
            setSelected(1);
        }
    }

    return (
        <div className='Actions'>
            <button className='Action' onClick={() => add()}>Add
            </button>
            <button className='Action' onClick={() => update()}>Edit</button>
            <button className='Action' onClick={() => remove()}>Delete</button>
            <button className='Action' id='filterButton' onClick={() => filter()}>Filters</button>
        </div>
    );
}

export default Actions;