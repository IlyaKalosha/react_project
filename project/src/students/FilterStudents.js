import React, {useContext, useState} from "react";
import {StudentsContext, StudentsContextNF} from "../App";
import {specG} from "../data";


function FilterStudents(props) {
    const [filterName, setNameSelected] = useState(1);
    const [filterYear, setYearSelected] = useState(0);
    const [filterProf, setProfSelected] = useState(0);

    const students = useContext(StudentsContext);
    const studentsNF = useContext(StudentsContextNF);

    function filterByProf() {
        const list = students;
        const profFilterInput = document.getElementById('profFilterInput');
        const filteredList = list.filter(item => item.spec === specG.find(i => i.name === profFilterInput.value)?.id);
        props.setStudents(filteredList);
    }

    function filterByYear() {
        const list = students;
        const profFilterInput = document.getElementById('yearFilterInput');
        const filteredList = list.filter(item => item.year === profFilterInput.value);
        props.setStudents(filteredList);
    }

    function filterByName() {
        const list = students;
        const profFilterInput = document.getElementById('nameFilterInput');
        const filteredList = list.filter(item => item.name.includes(profFilterInput.value));
        props.setStudents(filteredList);
    }

    function filterClear() {
        const list = studentsNF;
        props.setStudents(list);
    }

    return (
        <div className='FilterRoot'>
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
            <button className='Action' onClick={() => filterClear()}>Очистить фильтры</button>
            {
                filterName ? (
                    <div className='filter'>
                        <div className='filterInput'>
                            <p>Имя</p>
                            <input type='text' id='nameFilterInput'/>
                        </div>
                        <button onClick={() => filterByName()}>Отфильтровать</button>
                    </div>
                ) : filterYear ? (
                        <div className='filter'>
                            <div className='filterInput'>
                                <p>Год поступления</p>
                                <input type='text' id='yearFilterInput'/>
                            </div>
                            <button onClick={() => filterByYear()}>Отфильтровать</button>
                        </div>
                    ) :
                    (
                        <div className='filter'>
                            <div className='filterInput'>
                                <p>Специальность</p>
                                <input type='text' id='profFilterInput'/>
                            </div>
                            <button onClick={() => filterByProf()}>Отфильтровать</button>
                        </div>
                    )
            }
        </div>
    );
}

export default FilterStudents;