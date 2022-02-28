import React, {useContext, useState} from "react";
import "../Base.css"
import Actions from "../actions/Actions";
import {CompaniesContext, EventsContext, MappingContext, StudentsContext} from "../App";
import AddCompany from "./AddCompany";
import EditCompany from "./EditCompany";

function Companies(props) {
    const students = useContext(StudentsContext);
    const companies = useContext(CompaniesContext);
    const events = useContext(EventsContext);
    const mapping = useContext(MappingContext);


    const [currentCompany, setCompanyId] = useState(companies[0]?.id);

    return (
        <div className="RootContent">
            <div className='LeftSideContent'>
                <Actions type={'comp'} currentItemId={currentCompany} setAction={props.setAction} nextId={setCompanyId}/>

                <AddCompany nextId={setCompanyId} setAction={props.setAction}/>
                <EditCompany currentItemId={currentCompany} nextId={setCompanyId} setAction={props.setAction}/>


                <div className='LeftItemsList'>
                    {
                        companies.map((company, i) => {
                            return <div key={i} className='LeftItem'
                                        onClick={() => setCompanyId(company.id)}>{company.name}</div>
                        })
                    }
                </div>
            </div>
            <div className='RightSideContent'>
                <div
                    className='RightContentHeader'>Компания {companies.find(x => x.id === currentCompany).name} подробно
                </div>
                <hr/>
                <div className='RightItemsList'>
                    {
                        mapping.filter((item) => item.companyId === currentCompany).map(item => {
                            return <div className='RightItem'>
                                <div>{item.id}</div>
                                <div>{item.date}</div>
                                <div>{students.find(x => x.id === item.studentId).name} {students.find(x => x.id === item.studentId).surname}</div>
                                <div>{events.find(x => x.id === item.eventId).type}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Companies