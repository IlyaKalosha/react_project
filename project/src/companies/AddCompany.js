import React, {useContext} from "react";
import '../Base.css'
import {CompaniesContext} from "../App";

function AddCompany(props) {
    const companies = useContext(CompaniesContext);

    function Add() {
        const list = companies;
        const name = document.getElementsByClassName('Name')[0];

        const newCompany = {
            id: companies.length + 1,
            name: name.value
        };

        name.value = '';

        console.log(newCompany);
        let id = list.push(newCompany);
        props.setCompanies(list);
        props.setCompanyId(id);
        document.getElementsByClassName('AddRoot')[0].style.display = 'none';
    }

    return (
        <div className='AddRoot'>
            <h5>Новая</h5>
            <div className='AddGrid'>
                <div>
                    <p>Имя компании</p>
                </div>
                <div>
                    <input className='Name' type='text' placeholder='Имя компании'/>
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

export default AddCompany;