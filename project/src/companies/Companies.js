import React, {useContext, useState} from "react";
import "../Base.css"
import {eventsG, mappingG, studentsG} from "../data";
import Actions from "../actions/Actions";
import {CompaniesContext} from "../App";
import AddCompany from "./AddCompany";
import EditCompany from "./EditCompany";

function Companies({setAction}) {
    const companies = useContext(CompaniesContext);
    const [currentCompany, setCompanyId] = useState(companies[0]?.id);

    return (
        <div className="RootContent">
            <div className='LeftSideContent'>
                <Actions type={'comp'} currentItemId={currentCompany} setAction={setAction} nextId={setCompanyId}/>

                <AddCompany nextId={setCompanyId} setAction={setAction}/>
                <EditCompany currentItemId={currentCompany} nextId={setCompanyId} setAction={setAction}/>


                <div className='LeftItemsList'>
                    {
                        companies.map(company => {
                            return <div key={company.id} className='LeftItem'
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
                        mappingG.filter((item) => item.companyId === currentCompany).map(item => {
                            return <div className='RightItem'>
                                <div>{item.id}</div>
                                <div>{item.date}</div>
                                <div>{studentsG.find(x => x.id === item.studentId).name} {studentsG.find(x => x.id === item.studentId).surname}</div>
                                <div>{eventsG.find(x => x.id === item.eventId).type}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Companies