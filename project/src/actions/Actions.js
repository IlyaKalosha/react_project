import React, {useContext} from "react";
import {StudentsContext} from "../App";


function Actions(props) {
    const students = useContext(StudentsContext);

    function add() {

    }

    function update() {

    }

    function remove() {
        if (props.type === 'stud') {
            const list = students;
            const newList = list.filter(item => item.id !== props.currentItemId);
            props.nextId(newList[0]?.id);
            props.setAction(newList);
        }
    }

    return (
        <div className='Actions'>
            <button className='Action' onClick={() => {document.getElementsByClassName('AddRoot')[0].style.display = 'grid'}}>Add</button>
            <button className='Action' onClick={() => {document.getElementsByClassName('EditRoot')[0].style.display = 'grid'}}>Edit</button>
            <button className='Action' onClick={() => remove()}>Delete</button>
        </div>
    );
}

export default Actions;