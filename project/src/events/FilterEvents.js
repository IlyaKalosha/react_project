import React, {useContext, useState} from "react";
import {
    CompaniesContext, EventsContext,
    MappingContext,
    MappingContextNF, StudentsContext
} from "../App";


function FilterEvents(props) {
    const [filterName, setNameSelected] = useState(1);
    const [filterYear, setYearSelected] = useState(0);
    const [filterProf, setProfSelected] = useState(0);


    const mapping = useContext(MappingContext);
    const students = useContext(StudentsContext);
    const companies = useContext(CompaniesContext);
    const mappingNF = useContext(MappingContextNF);
    const events = useContext(EventsContext);

    function filterByProf() {
        const list = mapping;
        const profFilterInput = document.getElementById('profFilterInput');
        const filteredList = list.filter(item => item.companyId === companies.find(i => i.name === profFilterInput.value)?.id);
        props.setMapping(filteredList);
    }

    function filterByYear() {
        const list = mapping;
        const yearFilterInput = document.getElementById('yearFilterInput');
        const filteredList = list.filter(item => item.eventId === events.find(i => i.type === yearFilterInput.value)?.id);
        props.setMapping(filteredList);
    }

    function filterByName() {
        const list = mapping;
        const nameFilterInput = document.getElementById('nameFilterInput');
        const filteredList = list.filter(item => students.some(i => i.name.includes(nameFilterInput.value) && item.studentId === i.id));
        props.setMapping(filteredList);
    }

    function filterClear() {
        const list = mappingNF;
        props.setMapping(list);
    }


    return (
        <div className='FilterRoot'>
            <button className='Action' onClick={() => {
                setNameSelected(1);
                setYearSelected(0);
                setProfSelected(0);
            }}>Студент
            </button>
            <button className='Action' onClick={() => {
                setYearSelected(1);
                setNameSelected(0);
                setProfSelected(0);
            }}>Событие
            </button>
            <button className='Action' onClick={() => {
                setYearSelected(0);
                setNameSelected(0);
                setProfSelected(1);
            }}>Компания
            </button>
            <button className='Action' onClick={() => filterClear()}>Очистить фильтры</button>
            {
                filterName ? (
                    <div className='filter'>
                        <div className='filterInput'>
                            <p>Студент</p>
                            <input type='text' id='nameFilterInput'/>
                        </div>
                        <button onClick={() => filterByName()}>Отфильтровать</button>
                    </div>
                ) : filterYear ? (
                        <div className='filter'>
                            <div className='filterInput'>
                                <p>Событие</p>
                                <input type='text' id='yearFilterInput'/>
                            </div>
                            <button onClick={() => filterByYear()}>Отфильтровать</button>
                        </div>
                    ) :
                    (
                        <div className='filter'>
                            <div className='filterInput'>
                                <p>Компания</p>
                                <input type='text' id='profFilterInput'/>
                            </div>
                            <button onClick={() => filterByProf()}>Отфильтровать</button>
                        </div>
                    )
            }
        </div>
    );
}

export default FilterEvents;