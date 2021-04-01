import React, {useState, useEffect} from 'react';
const url = "https://course-api.com/react-tabs-project";

const App = ()=>{
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJobs = async ()=>{
    	const response = await fetch(url);
    	const newJobs = await response.json();
    	setJobs(newJobs);
        setLoading(false);
    }

    useEffect(()=>{
       fetchJobs();
    }, [])
    
    if(loading){
        return (
            <section><h1>Loading...</h1></section>
        )
    }
    const companies = jobs.map(element=>element.company);

    const changeValue = (index)=>{
        setValue(index);
    }
    const {id, title, dates, duties, company} = jobs[value];
	return (
		<section className="expirience">
		    <header><h1>Expirience</h1></header>
		    <div className="main">
                <aside className="companies">
                      {companies.map((company,index)=>{
                        return (
                            <button onClick={()=>changeValue(index)} className={index===value&&"active"}>{company}</button>
                        )
                    })}
                </aside>
               <div className="work" key={id}>
                    <div className="title">
                        <h2>{title}</h2>
                        <a href="#company-website">{company}</a>
                        <p className="date">{dates}</p>
                    </div>
                    <div className="work-details">
                        {duties.map(dut=>{
                            return (
                                <p>{dut}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
		</section>
	)
}

export default App;
