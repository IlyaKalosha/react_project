import React, {useContext, useState} from "react";
import {CompaniesContext, EventsContext, MappingContext, StudentsContext} from "../App";


function FilterStudents(props) {
    const [filterName, setNameSelected] = useState(1);
    const [filterYear, setYearSelected] = useState(0);
    const [filterProf, setProfSelected] = useState(0);


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
            const spec = selectSpec.options[selectSpec.selectedIndex];

            name.value = students.find(item => item.id === props.currentItemId).name;
            year.value = students.find(item => item.id === props.currentItemId).year;
            spec.value = students.find(item => item.id === props.currentItemId).spec;
            group.value = students.find(item => item.id === props.currentItemId).group;

            document.getElementsByClassName('EditRoot')[0].style.display = 'grid'
        }
        if (props.type === 'comp') {
            const name = document.getElementsByClassName('Name')[1];

            name.value = companies.find(item => item.id === props.currentItemId).name;

            document.getElementsByClassName('EditRoot')[0].style.display = 'grid'
        }
    }

    function remove() {
        if (props.type === 'stud') {
            const list = students;
            const newList = list.filter(item => item.id !== props.currentItemId);
            props.setStudents(newList);
        }
        if (props.type === 'comp') {
            const list = companies;
            const newList = list.filter(item => item.id !== props.currentItemId);
            props.setCompanies(newList);
        }
        if (props.type === 'event') {
            const list = mappings;
            const newList = list.filter(item => item.id !== props.currentItemId);
            props.setMapping(newList);
        }
    }

    return (
        <div className='FilterStudents'>
            <button className='Action' onClick={() => {
                setNameSelected(1);
                setYearSelected(0);
                setProfSelected(0);
            }}>Имя
            </button>
            <button className='Action' onClick={() => {
                setYearSelected(1);
                setNameSelected(0);
                setProfSelected(0);
            }}>Год поступления
            </button>
            <button className='Action' onClick={() => {
                setYearSelected(0);
                setNameSelected(0);
                setProfSelected(1);
            }}>Специальность
            </button>
            {
                filterName ? (
                    <div className='filter'>
                        <div className='filterInput'>
                            <p>Имя</p>
                            <input type='text'/>
                        </div>
                        <button>Отфильтровать</button>
                    </div>
                ) : filterYear ? (
                        <div className='filter'>
                            <div className='filterInput'>
                                <p>Год поступления</p>
                                <input type='text'/>
                            </div>
                            <button>Отфильтровать</button>
                        </div>
                    ) :
                    (
                        <div className='filter'>
                            <div className='filterInput'>
                                <p>Специальность</p>
                                <input type='text'/>
                            </div>
                            <button>Отфильтровать</button>
                        </div>
                    )
            }
        </div>
    );
}

export default FilterStudents;