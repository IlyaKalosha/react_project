import React, {useContext} from "react";
import '../Base.css'
import {StudentsContext} from "../App";

function EditStudent(props) {
    const students = useContext(StudentsContext);

    function Edit() {
        const list = students;

        const name = document.getElementsByClassName('Name')[1];
        const year = document.getElementsByClassName('Year')[1];
        const group = document.getElementsByClassName('Group')[1];
        const selectSpec = document.getElementsByClassName('Spec')[1];
        const spec = selectSpec.options[selectSpec.selectedIndex];


        const updatedStudent = {
            id: props.currentItemId,
            name: name.value,
            spec: spec.value,
            year: year.value,
            group: group.value
        };

        const newList = list.filter(item => item.id !== props.currentItemId);
        newList.push(updatedStudent);
        newList.sort((a1, a2) => a1.id - a2.id);

        props.setStudents(newList);

        document.getElementsByClassName('EditRoot')[0].style.display = 'none';
    }

    return (
        <div className='EditRoot'>
            <h5>Изменить</h5>
            <div className='EditGrid'>
                <div>
                    <p>Имя</p>
                    <p>Специальность</p>
                    <p>Год поступления</p>
                    <p>Группа</p>
                </div>
                <div>
                    <input className='Name' type='text' placeholder='Имя фамилия'/>
                    <select className='Spec'>
                        <option value='ИСиТ'>ИСиТ</option>
                        <option value='ПОИТ'>ПОИТ</option>
                        <option value='ДЭЙВИ'>ДЭЙВИ</option>
                        <option value='ПОИБМС'>ПОИБМС</option>
                    </select>
                    <input className='Year' type='text' placeholder='Год поступления'/>
                    <input className='Group' type='text' placeholder='Группа'/>
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

export default EditStudent;