import React, {useContext} from "react";
import '../Base.css'
import {StudentsContext, StudentsContextNF} from "../App";

function AddStudent(props) {
    const students = useContext(StudentsContext);
    const studentsNF = useContext(StudentsContextNF);

    function Add() {
        const list = students;
        const listNF = studentsNF;

        const name = document.getElementsByClassName('Name')[0];
        const year = document.getElementsByClassName('Year')[0];
        const group = document.getElementsByClassName('Group')[0];
        const selectSpec = document.getElementsByClassName('Spec')[0];

        const newStudent = {
            id: studentsNF.length + 1,
            name: name.value,
            spec: selectSpec.selectedIndex + 1,
            year: year.value,
            group: group.value
        };

        name.value = '';
        year.value = '';
        group.value = '';
        selectSpec.selectedIndex = 0;

        console.log(newStudent);

        let id = list.push(newStudent);
        let idNF = listNF.push(newStudent);
        props.setStudents(list);
        props.setStudentsNF(listNF);
        props.setStudentId(id);
        document.getElementsByClassName('AddRoot')[0].style.display = 'none';
    }

    return (
        <div className='AddRoot'>
            <h5>Новый</h5>
            <div className='AddGrid'>
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

export default AddStudent;