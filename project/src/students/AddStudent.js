import React from "react";
import '../Base.css'

function AddStudent() {
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
                    <input type='text' placeholder='Имя фамилия'/>
                    <select>
                        <option value='ИСиТ'>ИСиТ</option>
                        <option value='ПОИТ'>ПОИТ</option>
                        <option value='ДЭЙВИ'>ДЭЙВИ</option>
                        <option value='ПОИБМС'>ПОИБМС</option>
                    </select>
                    <input type='text' placeholder='Год поступления'/>
                    <input type='text' placeholder='Группа'/>
                </div>
            </div>
        </div>
    );
}

export default AddStudent;