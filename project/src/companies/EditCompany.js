import React, {useContext} from "react";
import '../Base.css'
import {CompaniesContext, StudentsContext} from "../App";

function EditCompany(props) {
    const companies = useContext(CompaniesContext);

    function Edit() {
        const list = companies;

        const name = document.getElementsByClassName('Name')[1];


        const updatedCompany = {
            id: props.currentItemId,
            name: name.value
        };

        const newList = list.filter(item => item.id !== props.currentItemId);
        newList.push(updatedCompany);
        newList.sort((a1, a2) => a1.id - a2.id);

        props.nextId(props.currentItemId);
        props.setAction(newList);

        document.getElementsByClassName('EditRoot')[0].style.display = 'none';
    }

    return (
        <div className='EditRoot'>
            <h5>Изменить</h5>
            <div className='EditGrid'>
                <div>
                    <p>Имя</p>
                </div>
                <div>
                    <input className='Name' type='text' placeholder='Имя фамилия'/>
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

export default EditCompany;