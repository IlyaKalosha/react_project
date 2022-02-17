import React, {useState} from "react";
import "../Base.css"
import {companies, events, mapping, students} from "../data";

function Companies() {
    const [currentCompany, setCompanyId] = useState(1);

    return (
        <div className="RootContent">
            <div className='LeftSideContent'>
                <h1>Contacts page left</h1>
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