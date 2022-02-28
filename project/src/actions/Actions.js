import React, {useContext} from "react";
import {CompaniesContext, StudentsContext} from "../App";


function Actions(props) {
    const students = useContext(StudentsContext);
    const companies = useContext(CompaniesContext);

    function add() {

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
            props.nextId(newList[0]?.id);
            props.setAction(newList);
        }
        if (props.type === 'comp') {
            const list = companies;
            const newList = list.filter(item => item.id !== props.currentItemId);
            props.nextId(newList[0]?.id);
            props.setAction(newList);
        }
    }

    return (
        <div className='Actions'>
            <button className='Action' onClick={() => {
                document.getElementsByClassName('AddRoot')[0].style.display = 'grid'
            }}>Add
            </button>
            <button className='Action' onClick={() => update()}>Edit</button>
            <button className='Action' onClick={() => remove()}>Delete</button>
        </div>
    );
}

export default Actions;